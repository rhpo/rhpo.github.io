<script>
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import LanguageToggle from '$lib/components/portfolio/LanguageToggle.svelte';
	import '../../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { locale } from '$lib/i18n';
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	setMode('dark');

	onMount(() => {
		locale.init();
	});

	afterNavigate(() => {
		locale.init();
	});
</script>

<ModeWatcher />
<LanguageToggle />
<div class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24">
	<slot></slot>
	<Navbar />
</div>
