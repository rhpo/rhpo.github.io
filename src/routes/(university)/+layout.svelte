<script>
	import '../../app.css';
	import { ModeWatcher, setMode } from 'mode-watcher';
	
	setMode('light');
</script>

<ModeWatcher />
<div class="relative min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
	<slot></slot>
</div>

