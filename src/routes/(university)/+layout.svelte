<script>
	import '../../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { locale } from '$lib/i18n';
	import { onMount } from 'svelte';
	import LanguageToggle from '$lib/components/portfolio/LanguageToggle.svelte';
	
	setMode('light');

	onMount(() => {
		locale.init();
	});
</script>

<ModeWatcher />
<LanguageToggle />
<div class="relative min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
	<slot></slot>
</div>
