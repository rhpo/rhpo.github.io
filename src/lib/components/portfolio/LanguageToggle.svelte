<script lang="ts">
	import { locale, setLocale } from '$lib/i18n';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import quebecFlag from '$lib/imgs/quebec.svg';
	import ukFlag from '$lib/imgs/uk.svg';

	let _class = '';
	export { _class as class };
</script>

<aside
	class={`fixed left-3 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 z-40 select-none ${_class}`}
	aria-label={$locale === 'fr' ? 'Sélecteur de langue' : 'Language selector'}
>
	<div
		class="flex flex-col items-center gap-2.5"
		role="group"
		aria-label={$locale === 'fr' ? 'Choix de la langue' : 'Choose language'}
	>
		<!-- French / Quebec Flag Option -->
		<Tooltip.Root openDelay={150}>
			<Tooltip.Trigger>
				<button
					type="button"
					on:click={() => setLocale('fr')}
					class="relative flex items-center justify-center transition-all duration-200 outline-none focus-visible:outline-none active:scale-95 {$locale === 'fr'
						? 'scale-105 opacity-100 drop-shadow-xs'
						: 'scale-95 opacity-40 hover:scale-100 hover:opacity-100'}"
					aria-label="Français"
					aria-pressed={$locale === 'fr'}
				>
					<div class="h-[20px] w-[30px] overflow-hidden rounded-[3px] sm:h-[22px] sm:w-[33px]">
						<img
							src={quebecFlag}
							alt="Drapeau du Québec"
							class="h-full w-full object-cover pointer-events-none select-none"
							width="33"
							height="22"
							loading="eager"
						/>
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
					class="relative flex items-center justify-center transition-all duration-200 outline-none focus-visible:outline-none active:scale-95 {$locale === 'en'
						? 'scale-105 opacity-100 drop-shadow-xs'
						: 'scale-95 opacity-40 hover:scale-100 hover:opacity-100'}"
					aria-label="English"
					aria-pressed={$locale === 'en'}
				>
					<div class="h-[20px] w-[30px] overflow-hidden rounded-[3px] sm:h-[22px] sm:w-[33px]">
						<img
							src={ukFlag}
							alt="Flag of the United Kingdom"
							class="h-full w-full object-cover pointer-events-none select-none"
							width="33"
							height="22"
							loading="eager"
						/>
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
