<script>
	import { faHeart } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
</script>

<div id="highlight" class="container skillbox" data-aos="flip-right" data-aos-duration="1200">
	<h1><Fa icon={faHeart} /> Most Loved Repo</h1>
	<p class="description">
		Luna is an Interpreted programming language that I wrote in <i
			class="devicon-typescript-plain colored"
		/>, It can compile to the motherlang (JS), and has an easy syntax, as well as some special
		features like Reactivity, it can also be executed in both the browser and the terminal.
	</p>
</div>

<embed
	data-aos="fade-left"
	data-aos-duration="2000"
	src="https://github-readme-stats.vercel.app/api/pin/?username=rhpo&repo=luna&hide_border=true&show_icons=true&show_owner=true&theme=dark&border_radius=14"
	width="700"
/>

<br />

<style>
	embed {
		width: 100%;
		max-width: var(--mw);
		margin: 20px auto;
		display: block;
	}

	:global(.colored) {
		color: var(--accent);
	}

	:global(.tooltip) {
		margin: 0;
		font-family: 'Inter', sans-serif;
		font-size: 15px;
		font-weight: 500;
		color: white;
	}

	.icon {
		position: relative;
		width: fit-content;
	}

	.icon *:not(.blur) {
		z-index: 2;
	}

	.blur {
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.7;
		animation: blur 3s infinite;
	}

	@keyframes blur {
		0% {
			filter: blur(0px);
		}

		50% {
			filter: blur(20px);
		}

		100% {
			filter: blur(0px);
		}
	}

	.container p {
		margin: 0;
	}

	.skillbox {
		width: 100%;
		max-width: var(--mw);
		padding: 20px;
		padding-bottom: 0;
		margin-bottom: 0;
		text-align: center;
	}

	.skillbox h1 {
		margin-bottom: 10px;
	}

	.skillbox .description {
		margin-bottom: 20px;
	}

	.skills {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.skill {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px;
	}

	.skill i {
		font-size: 50px;
	}
</style>
