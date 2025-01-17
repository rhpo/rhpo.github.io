<script>
	import Links from '$lib/components/Links.svelte';

	import { faBrain, faChain } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	import tippy from 'sveltejs-tippy';

	let skills = [
		{
			name: 'HTML',
			icon: 'html5'
		},
		{
			name: 'CSS',
			icon: 'css3'
		},
		{
			name: 'NodeJS',
			icon: 'nodejs'
		},
		        
		{
			name: 'JavaScript',
			icon: 'javascript'
		},

		{
			name: 'TypeScript',
			icon: 'typescript'
		},

		{
			name: 'C++',
			icon: 'cplusplus'
		},
		{
			name: 'C',
			icon: 'c'
		},
		{
			name: 'C#',
			icon: 'csharp'
		},

		{
			name: 'ReactJS',
			icon: 'react'
		},

		{
			name: 'Svelte',
			icon: 'svelte'
		},

		{
			name: 'Go',
			icon: 'go'
		},

		{
			name: 'Ruby',
			icon: 'ruby'
		},

		{
			name: 'Python',
			icon: 'python'
		},

		{
			name: 'MongoDB',
			icon: 'mongodb'
		},

		{
			name: 'VsCode',
			icon: 'vscode'
		},

		{
			name: 'Visual Studio',
			icon: 'visualstudio'
		},

		{
			name: 'Markdown',
			icon: 'markdown',
			colorless: true
		},

        {
            name: 'Git',
            icon: 'git',
        },

		{
			name: 'GitHub',
			icon: 'github',
            colorless: true
		},

		{
			name: '.NET',
			icon: 'dot-net'
		}
	];
</script>

<div class="container skillbox" data-aos="flip-right" data-aos-duration="1200">
	<h1><Fa icon={faBrain} /> My Skills</h1>
	<p class="description">
		Those are the skills I have acquired over the years. I am always learning new things and I am
		always open to new opportunities.
	</p>

	<br />

	<div class="skills">
		{#each skills as skill, i}
			<div class="skill" data-aos="fade-right" data-aos-duration={(i * 20).toString() + 'ms'}>
				<div
					class="icon"
					use:tippy={{
						content: `<p class="tooltip">${skill.name}</p>`,
						allowHTML: true,
						placement: 'top'
					}}
				>
					<i
						class={`icon devicon-${skill.icon}-plain ${
							typeof skill.colorless === 'undefined' ? 'colored' : ''
						} `}
					/>
					<i
						class={`icon devicon-${skill.icon}-plain ${
							typeof skill.colorless === 'undefined' ? 'colored' : ''
						} blur`}
					/>
				</div>
				<!-- <h2>{skill.name}</h2> -->
			</div>
		{/each}
	</div>
</div>

<embed data-aos="flip-up" src="https://github-readme-stats.vercel.app/api?username=rhpo&hide_border=true&show_icons=true&theme=dark&border_radius=14" width="700">

<style>

	embed {
		width: 100%;
		max-width: var(--mw);
		margin: 20px auto;
		display: block;

	}

	:global(embed > g) {
		font-family: Cubano, sans-serif !important;
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
