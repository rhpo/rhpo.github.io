<script>
	import Navbar from '$lib/components/portfolio/Navbar.svelte';
	import '../../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { locale } from '$lib/i18n';
	import { onMount } from 'svelte';

	setMode('dark');

	onMount(() => {
		locale.init();
	});
</script>

<ModeWatcher />
<div class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24">
	<slot></slot>
	<Navbar />
</div>
