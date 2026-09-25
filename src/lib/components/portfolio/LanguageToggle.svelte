<script lang="ts">
	import { locale, setLocale } from '$lib/i18n';
	import * as Tooltip from '$lib/components/ui/tooltip';

	let _class = '';
	export { _class as class };
</script>

<aside
	class={`fixed left-3 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 z-50 pointer-events-auto select-none ${_class}`}
	aria-label={$locale === 'fr' ? 'Sélecteur de langue' : 'Language selector'}
>
	<div
		class="flex flex-col items-center gap-3"
		role="group"
		aria-label={$locale === 'fr' ? 'Choix de la langue' : 'Choose language'}
	>
		<!-- French / Quebec Flag Option -->
		<Tooltip.Root openDelay={150}>
			<Tooltip.Trigger>
				<button
					type="button"
					on:click={() => setLocale('fr')}
					class="relative flex items-center justify-center cursor-pointer transition-all duration-200 outline-none focus-visible:outline-none active:scale-95 {$locale === 'fr'
						? 'scale-105 opacity-100 drop-shadow-md'
						: 'scale-95 opacity-40 hover:scale-105 hover:opacity-100 drop-shadow-sm'}"
					aria-label="Français"
					aria-pressed={$locale === 'fr'}
				>
					<div class="h-[20px] w-[30px] overflow-hidden rounded-[3px] sm:h-[22px] sm:w-[33px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 9600 6400"
							class="h-full w-full object-cover pointer-events-none"
							aria-hidden="true"
						>
							<path fill="#fff" d="M0 0h9600v6400H0z" />
							<g id="qc-b">
								<path
									fill="#003da5"
									d="M4000 0v2400H0V0zM2309 1622v-129h-115c0-66 32-130 66-150 20-17 65-25 104-5 51 29 54 113 28 151 243-45 219-280 136-365-67-69-140-79-196-58-128 46-214 199-218 427h-67c0-207 36-273 130-534 48-123 19-275-65-415-31-50-69-95-112-144-43 49-81 94-112 144-84 140-113 292-65 415 94 261 130 327 130 534h-67c-4-228-90-381-218-427-56-21-129-11-196 58-83 85-107 320 136 365-26-38-23-122 28-151 39-20 84-12 104 5 34 20 66 84 66 150h-115v129h239c-3 67-39 119-106 148 8 28 49 85 105 81 11 60 21 94 71 149 50-55 60-89 71-149 56 4 97-53 105-81-67-29-103-81-106-148z"
									id="qc-a"
								/>
								<use href="#qc-a" x="5600" />
							</g>
							<use href="#qc-b" y="4000" />
						</svg>
					</div>
					{#if $locale === 'fr'}
						<span class="sr-only">(Actif)</span>
					{/if}
				</button>
			</Tooltip.Trigger>
			<Tooltip.Content
				side="right"
				sideOffset={10}
				class="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-xs font-sans shadow-md"
			>
				<div class="flex items-center gap-1.5 font-medium leading-tight">
					<span>Français</span>
					<span
						class="rounded bg-muted px-1 py-0.5 text-[9px] font-semibold tracking-wide text-muted-foreground"
					>
						QC
					</span>
				</div>
				<p class="text-[11px] leading-tight text-muted-foreground">
					{$locale === 'fr' ? 'Langue active' : 'Passer en français'}
				</p>
			</Tooltip.Content>
		</Tooltip.Root>

		<!-- English / UK Flag Option -->
		<Tooltip.Root openDelay={150}>
			<Tooltip.Trigger>
				<button
					type="button"
					on:click={() => setLocale('en')}
					class="relative flex items-center justify-center cursor-pointer transition-all duration-200 outline-none focus-visible:outline-none active:scale-95 {$locale === 'en'
						? 'scale-105 opacity-100 drop-shadow-md'
						: 'scale-95 opacity-40 hover:scale-105 hover:opacity-100 drop-shadow-sm'}"
					aria-label="English"
					aria-pressed={$locale === 'en'}
				>
					<div class="h-[20px] w-[30px] overflow-hidden rounded-[3px] sm:h-[22px] sm:w-[33px]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 60 30"
							class="h-full w-full object-cover pointer-events-none"
							aria-hidden="true"
						>
							<clipPath id="uk-clip-s">
								<path d="M0,0 v30 h60 v-30 z" />
							</clipPath>
							<clipPath id="uk-clip-t">
								<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
							</clipPath>
							<g clip-path="url(#uk-clip-s)">
								<path d="M0,0 v30 h60 v-30 z" fill="#012169" />
								<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
								<path
									d="M0,0 L60,30 M60,0 L0,30"
									clip-path="url(#uk-clip-t)"
									stroke="#C8102E"
									stroke-width="4"
								/>
								<path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
								<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6" />
							</g>
						</svg>
					</div>
					{#if $locale === 'en'}
						<span class="sr-only">(Active)</span>
					{/if}
				</button>
			</Tooltip.Trigger>
			<Tooltip.Content
				side="right"
				sideOffset={10}
				class="flex flex-col items-start gap-0.5 px-2.5 py-1.5 text-xs font-sans shadow-md"
			>
				<div class="flex items-center gap-1.5 font-medium leading-tight">
					<span>English</span>
					<span
						class="rounded bg-muted px-1 py-0.5 text-[9px] font-semibold tracking-wide text-muted-foreground"
					>
						UK
					</span>
				</div>
				<p class="text-[11px] leading-tight text-muted-foreground">
					{$locale === 'en' ? 'Active language' : 'Switch to English'}
				</p>
			</Tooltip.Content>
		</Tooltip.Root>
	</div>
</aside>
