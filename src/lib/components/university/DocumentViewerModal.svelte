<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { DocumentGroup, DocumentVariant } from '$lib/data/transcripts';
	import {
		X,
		ZoomIn,
		ZoomOut,
		RotateCcw,
		Download,
		ExternalLink,
		ChevronLeft,
		ChevronRight,
		FileText,
		Languages
	} from 'lucide-svelte';
	import Badge from '$lib/components/ui/badge/badge.svelte';

	export let group: DocumentGroup;
	export let activeVariantIndex = 0;
	export let allGroups: DocumentGroup[] = [];
	export let isOpen = false;
	export let showOriginal = false;
	export let onClose: () => void = () => {};

	// Active variant
	$: variants = group?.variants || [];
	$: activeVariant = variants[activeVariantIndex] || variants[0];

	// Active image source & download name
	$: activeSrc =
		showOriginal && activeVariant?.hasOriginal && activeVariant?.originalSrc
			? activeVariant.originalSrc
			: activeVariant?.translatedSrc;

	$: activeDownloadName =
		showOriginal && activeVariant?.hasOriginal && activeVariant?.originalDownloadName
			? activeVariant.originalDownloadName
			: activeVariant?.translatedDownloadName;

	// Zoom & pan states
	let scale = 1;
	let translateX = 0;
	let translateY = 0;
	let isDragging = false;
	let startX = 0;
	let startY = 0;

	// Enforce perfect centering whenever zoomed out or fitting frame
	$: if (scale <= 1) {
		translateX = 0;
		translateY = 0;
	}

	function resetZoom() {
		scale = 1;
		translateX = 0;
		translateY = 0;
	}

	function zoomIn() {
		scale = Number(Math.min(scale + 0.35, 4).toFixed(2));
	}

	function zoomOut() {
		const nextScale = Number(Math.max(scale - 0.35, 0.7).toFixed(2));
		scale = nextScale;
		if (scale <= 1) {
			translateX = 0;
			translateY = 0;
		}
	}

	function handleWheel(e: WheelEvent) {
		e.preventDefault();
		const factor = e.deltaY > 0 ? 0.85 : 1.15;
		const nextScale = Number(Math.min(Math.max(scale * factor, 0.6), 4.5).toFixed(2));
		scale = nextScale;
		if (scale <= 1) {
			translateX = 0;
			translateY = 0;
		}
	}

	function handleDoubleClick() {
		if (scale === 1) {
			scale = 2;
		} else {
			resetZoom();
		}
	}

	function handleMouseDown(e: MouseEvent) {
		if (e.button !== 0) return;
		if (scale <= 1) return; // Keep centered when document fits or smaller
		isDragging = true;
		startX = e.clientX - translateX;
		startY = e.clientY - translateY;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging) return;
		translateX = e.clientX - startX;
		translateY = e.clientY - startY;
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleTouchStart(e: TouchEvent) {
		if (e.touches.length === 1 && scale > 1) {
			isDragging = true;
			startX = e.touches[0].clientX - translateX;
			startY = e.touches[0].clientY - translateY;
		}
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging || e.touches.length !== 1) return;
		translateX = e.touches[0].clientX - startX;
		translateY = e.touches[0].clientY - startY;
	}

	function handleTouchEnd() {
		isDragging = false;
	}

	function selectVariant(index: number) {
		activeVariantIndex = index;
		resetZoom();
	}

	// Group navigation
	$: currentGroupIndex = allGroups.findIndex((g) => g.id === group?.id);
	$: hasPrevGroup = currentGroupIndex > 0;
	$: hasNextGroup = currentGroupIndex < allGroups.length - 1;

	function goToPrevGroup() {
		if (hasPrevGroup) {
			group = allGroups[currentGroupIndex - 1];
			activeVariantIndex = 0;
			resetZoom();
		}
	}

	function goToNextGroup() {
		if (hasNextGroup) {
			group = allGroups[currentGroupIndex + 1];
			activeVariantIndex = 0;
			resetZoom();
		}
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (!isOpen) return;
		if (e.key === 'Escape') {
			onClose();
		} else if (e.key === 'ArrowLeft') {
			if (activeVariantIndex > 0) {
				selectVariant(activeVariantIndex - 1);
			} else {
				goToPrevGroup();
			}
		} else if (e.key === 'ArrowRight') {
			if (activeVariantIndex < variants.length - 1) {
				selectVariant(activeVariantIndex + 1);
			} else {
				goToNextGroup();
			}
		} else if (e.key === '+' || e.key === '=') {
			zoomIn();
		} else if (e.key === '-' || e.key === '_') {
			zoomOut();
		} else if (e.key === '0') {
			resetZoom();
		}
	}

	function handleDownload() {
		const a = window.document.createElement('a');
		a.href = activeSrc;
		a.download = activeDownloadName;
		window.document.body.appendChild(a);
		a.click();
		window.document.body.removeChild(a);
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
		}
	});

	// Reset zoom when group or variant changes
	$: if (group || activeVariantIndex !== undefined) {
		resetZoom();
	}
</script>

{#if isOpen && group && activeVariant}
	<!-- Fullscreen Lightbox Backdrop -->
	<div
		class="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-lg transition-all duration-200 dark:bg-black/95"
		transition:fade={{ duration: 150 }}
	>
		<!-- Header Toolbar: Left (Info) | Center (Year Toggle) | Right (Language Toggle + Close) -->
		<header class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6">
			<!-- Left: Document Title & Badges -->
			<div class="flex items-center gap-3 overflow-hidden min-w-0 md:min-w-64">
				<div class="hidden sm:flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground">
					<FileText class="size-4.5" />
				</div>
				<div class="min-w-0">
					<div class="flex items-center gap-2 flex-wrap">
						<h3 class="truncate text-sm font-semibold tracking-tight text-foreground sm:text-base">
							{group.title}
						</h3>
						<Badge variant="secondary" class="text-[11px] font-medium">
							{activeVariant.year || group.badge}
						</Badge>
					</div>
					{#if activeVariant.subLabel}
						<p class="truncate text-xs text-muted-foreground">
							{activeVariant.subLabel} &bull; {group.institution}
						</p>
					{/if}
				</div>
			</div>

			<!-- Center: Year / Variant Selector Toggle -->
			<div class="flex items-center justify-center flex-1 my-1 md:my-0">
				{#if variants.length > 1}
					<div class="inline-flex rounded-xl border border-border bg-muted/50 p-1 text-xs shadow-xs">
						{#each variants as v, idx}
							<button
								type="button"
								class="rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all {activeVariantIndex === idx ? 'bg-primary text-primary-foreground shadow-sm font-bold' : 'text-muted-foreground hover:text-foreground'}"
								on:click={() => selectVariant(idx)}
							>
								{v.shortLabel}
							</button>
						{/each}
					</div>
				{/if}
			</div>

			<!-- Right: Language Toggle & Close Button -->
			<div class="flex items-center justify-between md:justify-end gap-2 shrink-0 md:min-w-64">
				<!-- Big Toggle for Original Document on the Right -->
				{#if activeVariant.hasOriginal}
					<div class="inline-flex items-center gap-1 rounded-xl border border-border bg-card p-1 shadow-xs">
						<button
							type="button"
							class="flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all {!showOriginal ? 'bg-primary text-primary-foreground shadow-xs font-bold' : 'text-muted-foreground hover:text-foreground'}"
							on:click={() => (showOriginal = false)}
						>
							<Languages class="size-3.5" />
							<span>English (Translation)</span>
						</button>
						<button
							type="button"
							class="flex items-center gap-1.5 rounded-lg px-2.5 sm:px-3 py-1.5 text-xs font-semibold transition-all {showOriginal ? 'bg-primary text-primary-foreground shadow-xs font-bold' : 'text-muted-foreground hover:text-foreground'}"
							on:click={() => (showOriginal = true)}
						>
							<FileText class="size-3.5" />
							<span>{activeVariant.originalLanguage === 'FR' ? 'French (Original)' : `Original (${activeVariant.originalLanguage})`}</span>
						</button>
					</div>
				{/if}

				<!-- Close Button -->
				<button
					type="button"
					aria-label="Close document viewer"
					class="inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
					on:click={onClose}
				>
					<X class="size-4.5" />
				</button>
			</div>
		</header>

		<!-- Main Viewport Area -->
		<div
			class="relative flex flex-1 items-center justify-center overflow-hidden select-none p-4 {scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}"
			on:wheel={handleWheel}
			on:mousedown={handleMouseDown}
			on:touchstart={handleTouchStart}
			on:touchmove={handleTouchMove}
			on:touchend={handleTouchEnd}
			on:dblclick={handleDoubleClick}
			role="region"
			aria-label="Interactive document zoom viewer"
		>
			<!-- Previous / Next Group Navigation Arrows -->
			{#if hasPrevGroup}
				<button
					type="button"
					aria-label="Previous document group"
					class="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/80 bg-background/80 p-2.5 text-foreground shadow-lg backdrop-blur hover:bg-accent transition"
					on:click|stopPropagation={goToPrevGroup}
					title="Previous document group"
				>
					<ChevronLeft class="size-5" />
				</button>
			{/if}

			{#if hasNextGroup}
				<button
					type="button"
					aria-label="Next document group"
					class="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/80 bg-background/80 p-2.5 text-foreground shadow-lg backdrop-blur hover:bg-accent transition"
					on:click|stopPropagation={goToNextGroup}
					title="Next document group"
				>
					<ChevronRight class="size-5" />
				</button>
			{/if}

			<!-- Image Container:
				Zero transition during drag to prevent movement delay.
				Hardware-accelerated translate3d.
				Centered perfectly via transform-origin: center center.
			-->
			<div
				class="will-change-transform flex items-center justify-center max-h-full max-w-full"
				style="transform: translate3d({translateX}px, {translateY}px, 0) scale({scale}); transform-origin: center center; transition: {isDragging ? 'none' : 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)'};"
			>
				<img
					src={activeSrc}
					alt="{group.title} - {activeVariant.label}"
					class="max-h-[80vh] max-w-[88vw] rounded-lg object-contain shadow-2xl border border-border/50 pointer-events-none select-none"
					loading="eager"
					draggable="false"
				/>
			</div>
		</div>

		<!-- Bottom Floating Controls Toolbar -->
		<footer class="flex items-center justify-between border-t border-border/60 bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6">
			<div class="hidden sm:flex items-center gap-2 text-xs text-muted-foreground">
				<span class="inline-block size-1.5 rounded-full bg-emerald-500"></span>
				<span>{scale > 1 ? 'Drag to pan' : 'Scroll wheel or double click to zoom'} &bull; Centered when fitted</span>
			</div>

			<!-- Zoom & Download Controls -->
			<div class="flex items-center gap-1.5 mx-auto sm:mx-0">
				<button
					type="button"
					aria-label="Zoom out"
					class="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
					on:click={zoomOut}
					title="Zoom Out (-)"
				>
					<ZoomOut class="size-3.5" />
				</button>

				<button
					type="button"
					class="inline-flex h-8 min-w-16 items-center justify-center rounded-lg border border-border bg-card px-2 text-xs font-mono font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
					on:click={resetZoom}
					title="Reset Zoom to Center (0)"
				>
					{Math.round(scale * 100)}%
				</button>

				<button
					type="button"
					aria-label="Zoom in"
					class="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
					on:click={zoomIn}
					title="Zoom In (+)"
				>
					<ZoomIn class="size-3.5" />
				</button>

				<button
					type="button"
					aria-label="Fit to Screen"
					class="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
					on:click={resetZoom}
					title="Fit to Screen & Center"
				>
					<RotateCcw class="size-3.5" />
				</button>

				<div class="h-4 w-px bg-border mx-1"></div>

				<!-- Download Active Document Button -->
				<button
					type="button"
					class="inline-flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
					on:click={handleDownload}
					title="Download currently viewed document"
				>
					<Download class="size-3.5" />
					<span>Download {showOriginal && activeVariant.hasOriginal ? `(${activeVariant.originalLanguage})` : '(EN)'}</span>
				</button>

				<!-- Open in new tab -->
				<a
					href={activeSrc}
					target="_blank"
					rel="noreferrer"
					class="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground"
					title="Open original high-res image in new tab"
				>
					<ExternalLink class="size-3.5" />
				</a>
			</div>
		</footer>
	</div>
{/if}
