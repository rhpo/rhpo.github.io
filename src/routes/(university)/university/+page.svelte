<script lang="ts">
	import { UNIVERSITY_DATA, type DocumentGroup, type DocumentVariant } from '$lib/data/transcripts';
	import DocumentViewerModal from '$lib/components/university/DocumentViewerModal.svelte';
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import ModeToggle from '$lib/components/portfolio/ModeToggle.svelte';
	import {
		ArrowLeft,
		Download,
		ZoomIn,
		FileText,
		GraduationCap,
		ExternalLink,
		Languages,
		ShieldCheck
	} from 'lucide-svelte';

	let BLUR_FADE_DELAY = 0.04;

	// Active variant index per document group (group.id -> index)
	let activeVariantIndices: Record<string, number> = {
		transcripts: 0,
		rankings: 0,
		diploma: 0,
		language: 0,
		references: 0
	};

	// Big global document language toggle: false = English (Translation), true = French (Original)
	let showOriginal = false;

	function setVariant(groupId: string, index: number, e?: MouseEvent) {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		activeVariantIndices[groupId] = index;
		activeVariantIndices = { ...activeVariantIndices };
	}

	// Modal viewer state
	let viewerOpen = false;
	let activeGroup: DocumentGroup | null = null;
	let viewerVariantIndex = 0;

	function openViewer(group: DocumentGroup, e?: MouseEvent) {
		if (e) e.preventDefault();
		activeGroup = group;
		viewerVariantIndex = activeVariantIndices[group.id] ?? 0;
		viewerOpen = true;
	}

	function closeViewer() {
		if (activeGroup) {
			activeVariantIndices[activeGroup.id] = viewerVariantIndex;
			activeVariantIndices = { ...activeVariantIndices };
		}
		viewerOpen = false;
		activeGroup = null;
	}

	function downloadActiveVariant(group: DocumentGroup, e?: MouseEvent) {
		if (e) e.stopPropagation();
		const idx = activeVariantIndices[group.id] ?? 0;
		const variant = group.variants[idx] || group.variants[0];
		const showOrig = Boolean(showOriginal && variant.hasOriginal);
		const src = showOrig && variant.originalSrc ? variant.originalSrc : variant.translatedSrc;
		const name =
			showOrig && variant.originalDownloadName
				? variant.originalDownloadName
				: variant.translatedDownloadName;

		const a = window.document.createElement('a');
		a.href = src;
		a.download = name;
		window.document.body.appendChild(a);
		a.click();
		window.document.body.removeChild(a);
	}
</script>

<svelte:head>
	<title>Academic Transcripts & University Dossier — {UNIVERSITY_DATA.candidateName}</title>
	<meta
		name="description"
		content="Official academic transcripts, bachelor's degree diploma, cohort ranking certificates, reference letters, and IELTS credentials for {UNIVERSITY_DATA.candidateName}, {UNIVERSITY_DATA.institution}."
	/>
	<meta
		name="keywords"
		content="Rami Hadid, Ramy Hadid, Academic Transcripts, University Dossier, ESST, Mathematics and Computer Science, Bachelor Degree, Relevé de Notes, Licence Informatique, IELTS Academic, Class Ranking, Reference Letters"
	/>
	<meta name="author" content="{UNIVERSITY_DATA.candidateName}" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="profile" />
	<meta property="og:title" content="Academic Transcripts & University Dossier — {UNIVERSITY_DATA.candidateName}" />
	<meta
		property="og:description"
		content="Official transcripts, bachelor's degree diploma, class rankings, reference letters, and IELTS records for {UNIVERSITY_DATA.candidateName} ({UNIVERSITY_DATA.institution})."
	/>
	<meta property="og:site_name" content="{UNIVERSITY_DATA.candidateName} Portfolio" />
	<meta property="og:image" content="https://avatars.githubusercontent.com/u/69460661?v=4" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Academic Transcripts & University Dossier — {UNIVERSITY_DATA.candidateName}" />
	<meta
		name="twitter:description"
		content="Official transcripts, bachelor's degree diploma, class rankings, reference letters, and IELTS records for {UNIVERSITY_DATA.candidateName} ({UNIVERSITY_DATA.institution})."
	/>
	<meta name="twitter:image" content="https://avatars.githubusercontent.com/u/69460661?v=4" />

	<!-- Robots & Indexing -->
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
</svelte:head>

<div class="relative mx-auto min-h-screen max-w-6xl lg:max-w-7xl px-4 py-8 sm:px-6 lg:px-8 sm:py-14 pb-36">
	<!-- Top Navigation Bar -->
	<header class="mb-10 flex items-center justify-between border-b border-border/40 pb-4">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<a
				href="/"
				class="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-all hover:bg-accent hover:text-foreground"
			>
				<ArrowLeft class="size-3.5" />
				<span>Back to Portfolio</span>
			</a>
		</BlurFade>

		<BlurFade delay={BLUR_FADE_DELAY}>
			<div class="flex items-center gap-2">
				<Badge
					variant="outline"
					class="hidden sm:inline-flex gap-1 py-1 text-[11px] font-normal text-muted-foreground border-border/80"
				>
					<ShieldCheck class="size-3.5 text-emerald-500" />
					Official Dossier
				</Badge>
				<div class="border-l border-border/50 pl-2">
					<ModeToggle />
				</div>
			</div>
		</BlurFade>
	</header>

	<!-- Candidate Academic Hero Header -->
	<section class="mb-8 space-y-5">
		<div class="flex flex-col-reverse justify-between gap-5 sm:flex-row sm:items-center">
			<div class="space-y-2.5">
				<BlurFade delay={BLUR_FADE_DELAY * 1.5}>
					<div
						class="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs text-muted-foreground"
					>
						<GraduationCap class="size-3.5 text-primary" />
						<span>{UNIVERSITY_DATA.institution}</span>
					</div>
				</BlurFade>

				<BlurFade delay={BLUR_FADE_DELAY * 2}>
					<h1 class="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
						Academic Records & Transcripts
					</h1>
				</BlurFade>

				<BlurFade delay={BLUR_FADE_DELAY * 2.5}>
					<p class="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
						Complete documentation package for <strong class="text-foreground font-semibold"
							>{UNIVERSITY_DATA.candidateName}</strong
						>
						— {UNIVERSITY_DATA.degree} in {UNIVERSITY_DATA.field} ({UNIVERSITY_DATA.period}) studied fully in the French language.
					</p>
				</BlurFade>
			</div>

			<BlurFade delay={BLUR_FADE_DELAY * 1.5}>
				<Avatar.Root class="size-20 sm:size-24 border-2 border-border shadow-sm">
					<Avatar.Image
						alt={UNIVERSITY_DATA.candidateName}
						src="https://avatars.githubusercontent.com/u/69460661?v=4"
					/>
					<Avatar.Fallback>RH</Avatar.Fallback>
				</Avatar.Root>
			</BlurFade>
		</div>
	</section>

	<!-- 100% Width Toggle Before the Cards: English (Translation) vs French (Original) -->
	<BlurFade delay={BLUR_FADE_DELAY * 2.8}>
		<div class="mb-6 w-full space-y-1.5">
			<div class="flex items-center justify-between text-xs text-muted-foreground font-medium px-1">
				<span class="uppercase tracking-wider text-[10px] font-semibold text-muted-foreground">Document Language</span>
				<span class="text-xs text-foreground font-medium">
					{showOriginal ? 'Authentic Originals (FR / AR)' : 'Certified English Translations'}
				</span>
			</div>
			<div class="grid grid-cols-2 gap-1 w-full rounded-xl border border-border/80 bg-muted/30 p-1 shadow-xs backdrop-blur-sm">
				<button
					type="button"
					class="flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs sm:text-sm font-semibold transition-all {!showOriginal ? 'bg-primary text-primary-foreground shadow-xs font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-background/40'}"
					on:click={() => (showOriginal = false)}
				>
					<Languages class="size-3.5" />
					<span>English (Translation)</span>
				</button>
				<button
					type="button"
					class="flex items-center justify-center gap-2 rounded-lg py-2 px-3 text-xs sm:text-sm font-semibold transition-all {showOriginal ? 'bg-primary text-primary-foreground shadow-xs font-bold' : 'text-muted-foreground hover:text-foreground hover:bg-background/40'}"
					on:click={() => (showOriginal = true)}
				>
					<FileText class="size-3.5" />
					<span>French (Original)</span>
				</button>
			</div>
		</div>
	</BlurFade>

	<!-- Document Groups Grid: Categorized by Document -->
	<section class="space-y-8">
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each UNIVERSITY_DATA.groups as group, groupIdx (group.id)}
				{@const activeVariantIdx = activeVariantIndices[group.id] ?? 0}
				{@const currentVariant = group.variants[activeVariantIdx] || group.variants[0]}
				{@const showOrig = Boolean(showOriginal && currentVariant.hasOriginal)}
				{@const activeSrc = showOrig && currentVariant.originalSrc ? currentVariant.originalSrc : currentVariant.translatedSrc}

				<BlurFade delay={BLUR_FADE_DELAY * 3 + groupIdx * 0.08}>
					<article
						class="flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card text-card-foreground shadow-sm transition-all duration-300 hover:border-foreground/20 hover:shadow-md"
					>
						<!-- Card Header: Title & Info -->
						<div class="p-5 pb-4 space-y-3">
							<div class="flex items-start justify-between gap-2">
								<div class="space-y-1">
									<h2 class="text-lg font-semibold tracking-tight text-foreground">
										{group.title}
									</h2>
									<p class="text-xs font-medium text-muted-foreground">
										{group.subtitle}
									</p>
								</div>
								<Badge variant="secondary" class="text-[11px] shrink-0 font-medium">
									{group.badge}
								</Badge>
						</div>

						<!-- Document Image Preview Container (Clickable to Zoom) -->
						<div
							class="group/preview relative aspect-[16/11] w-full overflow-hidden border-y border-border/60 bg-muted/40 cursor-pointer"
							on:click={(e) => openViewer(group, e)}
							role="button"
							tabindex="0"
							on:keydown={(e) => e.key === 'Enter' && openViewer(group)}
							aria-label="Click to zoom {group.title} - {currentVariant.label}"
						>
							<img
								src={activeSrc}
								alt="{group.title} - {currentVariant.label}"
								class="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/preview:scale-[1.03]"
								loading="lazy"
							/>

							<!-- Subtle gradient on hover -->
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-200 group-hover/preview:opacity-100"
							></div>

							<!-- Floating hover action badge -->
							<div
								class="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-200 group-hover/preview:opacity-100"
							>
								<span
									class="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-xl backdrop-blur-md"
								>
									<ZoomIn class="size-3.5" />
									Click to Zoom & Pan
								</span>
							</div>

							<!-- Top badges overlay -->
							<div class="absolute left-3 top-3">
								<Badge
									variant="secondary"
									class="bg-background/85 backdrop-blur-md text-[11px] font-medium border border-border/50"
								>
									{currentVariant.year || currentVariant.label}
								</Badge>
							</div>

							<div class="absolute right-3 top-3">
								{#if currentVariant.hasOriginal}
									<Badge
										variant={showOrig ? 'default' : 'secondary'}
										class="backdrop-blur-md text-[10px] font-medium border border-border/60 {showOrig ? 'bg-primary text-primary-foreground' : 'bg-background/85'}"
									>
										{showOrig ? `Original (${currentVariant.originalLanguage})` : 'Translated (EN)'}
									</Badge>
								{:else if currentVariant.pdfSrc}
									<Badge
										variant="secondary"
										class="bg-background/85 backdrop-blur-md text-[10px] border border-border/60"
									>
										PDF Included
									</Badge>
								{/if}
							</div>
						</div>

						<!-- Card Footer: Description & Action Buttons -->
						<div class="flex flex-1 flex-col p-5 pt-4">
							<p class="text-xs text-muted-foreground/90 leading-relaxed mb-4">
								{group.description}
							</p>

							<div class="mt-auto flex items-center justify-between gap-2 pt-2 border-t border-border/40">
								<span class="text-[11px] text-muted-foreground truncate">
									{currentVariant.subLabel || group.institution}
								</span>

								<div class="flex items-center gap-1.5 shrink-0">
									<!-- Zoom Button -->
									<button
										type="button"
										class="inline-flex h-8 items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
										on:click={(e) => openViewer(group, e)}
										title="Open zoomable full-screen viewer"
									>
										<ZoomIn class="size-3.5" />
										<span>Zoom</span>
									</button>

									<!-- Download Active Document -->
									<button
										type="button"
										class="inline-flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3 text-xs font-semibold text-primary-foreground shadow-xs transition-colors hover:bg-primary/90"
										on:click={(e) => downloadActiveVariant(group, e)}
										title="Download selected document"
									>
										<Download class="size-3.5" />
										<span>Download {showOrig ? `(${currentVariant.originalLanguage})` : '(EN)'}</span>
									</button>

									<!-- IELTS PDF Download if present -->
									{#if currentVariant.pdfSrc}
										<a
											href={currentVariant.pdfSrc}
											download={currentVariant.pdfDownloadName}
											class="inline-flex size-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
											title="Download PDF report"
										>
											<FileText class="size-3.5 text-red-500" />
										</a>
									{/if}
								</div>
							</div>
						</div>
					</article>
				</BlurFade>
			{/each}
		</div>
	</section>

	<!-- Sticky Bottom Action Bar: Download Full Transcript PDF -->
	<div class="pointer-events-none fixed inset-x-0 bottom-6 z-40 mx-auto max-w-xl px-4">
		<div
			class="pointer-events-auto flex items-center justify-between gap-3 rounded-full border border-border/80 bg-background/90 p-2 pl-4 sm:pl-5 shadow-2xl backdrop-blur-xl transition-transform duration-200"
		>
			<!-- Dossier Info -->
			<div class="flex items-center gap-2.5 overflow-hidden">
				<div
					class="flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
				>
					<FileText class="size-4 sm:size-4.5" />
				</div>
				<div class="min-w-0">
					<p class="truncate text-xs sm:text-sm font-semibold text-foreground">
						Complete Academic Dossier
					</p>
					<p class="truncate text-[10px] sm:text-xs text-muted-foreground">
						Full Transcript &bull; {UNIVERSITY_DATA.fullTranscriptPdf.fileSize} PDF
					</p>
				</div>
			</div>

			<!-- Actions -->
			<div class="flex items-center gap-1.5">
				<!-- Open in new tab -->
				<a
					href={UNIVERSITY_DATA.fullTranscriptPdf.src}
					target="_blank"
					rel="noreferrer"
					class="hidden sm:inline-flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
					title="Preview PDF in new window"
				>
					<ExternalLink class="size-3.5" />
				</a>

				<!-- Download Primary Button -->
				<a
					href={UNIVERSITY_DATA.fullTranscriptPdf.src}
					download={UNIVERSITY_DATA.fullTranscriptPdf.filename}
					class="inline-flex h-9 sm:h-10 items-center gap-2 rounded-full bg-primary px-4 sm:px-5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
				>
					<Download class="size-3.5 sm:size-4" />
					<span>Full Transcript (PDF)</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Interactive Zoom Modal Lightbox -->
	{#if activeGroup}
		<DocumentViewerModal
			bind:group={activeGroup}
			bind:activeVariantIndex={viewerVariantIndex}
			bind:showOriginal
			allGroups={UNIVERSITY_DATA.groups}
			isOpen={viewerOpen}
			onClose={closeViewer}
		/>
	{/if}
</div>
