<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';
	import { ChevronRightIcon } from 'lucide-svelte';
	import { quartOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { t } from '$lib/i18n';

	export let logoUrl: string = '';
	export let company: string = '';
	export let title: string = '';
	export let href: string = '';
	export let badges: string[] = [''];
	export let description: string = '';
	export let start: string = '';
	export let end: string = '';
	let isExpanded = false;

	let handleClick = (e: MouseEvent | KeyboardEvent) => {
		if (description) {
			e.preventDefault();
			isExpanded = !isExpanded;
		}
	};
</script>

<a href={href || '#'} target={href ? '_blank' : '_self'} class="cursor-pointer">
	<div class="flex rounded-lg bg-card text-card-foreground">
		<div class="flex-none">
			<Avatar.Root class="bg-muted-background m-auto size-12 border dark:bg-foreground">
				<Avatar.Image src={logoUrl} alt={company} class="object-contain" />
				<Avatar.Fallback>{company[0]}</Avatar.Fallback>
			</Avatar.Root>
		</div>
		<div class="group ml-4 flex-grow flex-col items-center">
			<div
				class="flex flex-col cursor-pointer"
				on:click={handleClick}
				on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(e)}
				role="button"
				tabindex="0"
			>
				<div class="flex items-center justify-between gap-x-2 text-base">
					<h3
						class="inline-flex items-center justify-center text-xs font-semibold leading-none sm:text-sm"
					>
						{@html company}
						{#if badges?.length > 0 && badges[0] !== ''}
							<span class="badges inline-flex gap-x-1 pl-2">
								{#each badges as badge, index}
									<Badge variant="secondary" class="align-middle text-xs" key={index}>
										{badge}
									</Badge>
								{/each}
							</span>
						{/if}
						<ChevronRightIcon
							class={cn(
								'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
								isExpanded ? 'rotate-90' : 'rotate-0'
							)}
						/>
					</h3>
					<div class="text-right text-xs tabular-nums text-muted-foreground sm:text-sm">
						{start} - {end || $t('common.present')}
					</div>
				</div>
				{#if title}
					<div class="font-sans text-xs">{@html title}</div>
				{/if}
			</div>
			{#if description}
				{#if isExpanded}
					<div
						class="mt-2 text-xs sm:text-sm"
						transition:slide={{
							duration: 700,
							easing: quartOut
						}}
					>
						<span
							on:click={handleClick}
							on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick(e)}
							role="button"
							tabindex="0"
						>
							{description}
						</span>

						<div class="url mt-2">
							{#if href}
								<a
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									class="text-xs text-blue-400 hover:underline"
								>
									{href}
								</a>
							{/if}
						</div>
					</div>
				{/if}
			{/if}
		</div>
	</div>
</a>

<style>
	@media (max-width: 640px) {
		.badges {
			display: none;
		}
	}
</style>
