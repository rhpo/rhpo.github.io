<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import HackathonCard from '$lib/components/portfolio/HackathonCard.svelte';
	import ProjectCard from '$lib/components/portfolio/ProjectCard.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import * as Avatar from '$lib/components/ui/avatar';

	import { getResumeData } from '$lib/data/resume';
	import { locale, t } from '$lib/i18n';
	import { marked } from 'marked';

	// @ts-ignore
	import tippy from 'sveltejs-tippy';

	let BLUR_FADE_DELAY = 0.04;

	$: DATA = getResumeData($locale);
</script>

<svelte:head>
	<title>{DATA.name} — {$locale === 'fr' ? 'Ingénieur Logiciel & Entrepreneur' : 'Software Engineer & Entrepreneur'}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content="{DATA.name} — {$locale === 'fr' ? 'Ingénieur Logiciel' : 'Software Engineer'}" />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={DATA.img} />
	<meta property="og:locale" content={$locale === 'fr' ? 'fr_FR' : 'en_US'} />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content="{DATA.name} — {$locale === 'fr' ? 'Ingénieur Logiciel' : 'Software Engineer'}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={DATA.img} />
	<meta name="twitter:description" content={DATA.description} />

	<meta name="google-site-verification" content="your-google-verification-code" />
	<meta name="yandex-verification" content="your-yandex-verification-code" />
</svelte:head>

<main class="flex min-h-[100dvh] flex-col space-y-10">
	<section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}
					>
						{$t('hero.greeting')} {DATA.nameComposed.first} <span class="hand">👋</span>
					</BlurFade>

					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}>
						{DATA.description}
					</BlurFade>

					<!-- location -->
					<BlurFade
						delay={BLUR_FADE_DELAY * 1.2}
						class="flex items-center gap-2 text-sm text-muted-foreground"
					>
						<span>{DATA.location}</span>
					</BlurFade>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>

	<section id="about">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">{$t('sections.about')}</h2>
		</BlurFade>
		<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
			<div
				class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
			>
				{@html marked(DATA.summary)}
			</div>
		</BlurFade>
	</section>

	<section id="work">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{$t('sections.work')}</h2>
			</BlurFade>
			{#each DATA.work as work, id (work.company + $locale)}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...work} />
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="education">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{$t('sections.education')}</h2>
			</BlurFade>
			{#each DATA.education as edu, id (edu.school + $locale)}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard
						href={edu.href}
						logoUrl={edu.logoUrl}
						company={edu.degree}
						title={edu.school}
						start={edu.start}
						end={edu.end}
					/>
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="internships">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{$t('sections.internships')}</h2>
			</BlurFade>
			{#each DATA.internships as internship, id (internship.company + $locale)}
				<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
					<ResumeCard {...internship} />
				</BlurFade>
			{/each}
		</div>
	</section>

	<section id="skills">
		<div class="flex min-h-0 flex-col gap-y-3">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 class="text-xl font-bold">{$t('sections.skills')}</h2>
			</BlurFade>

			<div class="flex flex-wrap gap-1">
				{#each DATA.skills as skill, id (skill.name)}
					<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
						<div class="skill">
							<div
								class="icon"
								use:tippy={{
									content: `<p class="tooltip">${skill.name}</p>`,
									allowHTML: true,
									placement: 'top'
								}}
							>
								<i
									class={`icon devicon-${skill.icon}${skill.icon.includes('-') ? '' : '-plain'} ${
										typeof skill.colorless === 'undefined' ? 'colored' : ''
									} `}
								/>
								<i
									class={`icon devicon-${skill.icon}${skill.icon.includes('-') ? '' : '-plain'} ${
										typeof skill.colorless === 'undefined' ? 'colored' : ''
									} blur`}
									style:animation-delay={`${BLUR_FADE_DELAY * id + 0.5}s`}
								/>
							</div>
						</div>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<section id="projects">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							{$t('projects.badge')}
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							{$t('projects.title')}
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							{$t('projects.description')}
						</p>
					</div>
				</div>
			</BlurFade>
			<div class="mx-auto grid max-w-[800px] grid-cols-1 gap-3 sm:grid-cols-2">
				{#each DATA.projects as project, id (project.title + $locale)}
					<BlurFade delay={BLUR_FADE_DELAY * 1.5 + id * 0.05}>
						<ProjectCard
							href={project.href}
							title={project.title}
							description={project.description}
							dates={project.dates}
							tags={project.technologies}
							image={project.image}
							video={project.video}
							links={project.links}
						/>
					</BlurFade>
				{/each}
			</div>
		</div>
	</section>

	<section id="hackathons">
		<div class="w-full space-y-12 py-12">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
							{$t('hackathons.badge')}
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
							{$t('hackathons.title')}
						</h2>
						<p
							class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							{$t('hackathons.description', { count: DATA.hackathons.length })}
						</p>
					</div>
				</div>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<ul class="mb-4 ml-4 divide-y divide-dashed border-l">
					{#each DATA.hackathons as project (project.title + $locale)}
						<BlurFade delay={BLUR_FADE_DELAY}>
							<HackathonCard {...project} />
						</BlurFade>
					{/each}
				</ul>
			</BlurFade>
		</div>
	</section>

	<section id="contact">
		<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<div class="space-y-3">
					<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
						{$t('contact.badge')}
					</div>
					<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
						{$t('contact.title')}
					</h2>
					<p
						class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
					>
						{$t('contact.description_prefix')}{' '}
						<a href={DATA.contact.social.Instagram.url} class="text-blue-500 hover:underline">
							{$t('contact.description_link')}
						</a>
						{' '}{$t('contact.description_suffix')}
					</p>
				</div>
			</BlurFade>
		</div>
	</section>
</main>

<style>
	.hand {
		display: inline-block;
		transform-origin: 70% 70%;
		animation: wave 4s infinite;
	}

	.icon {
		position: relative;
		width: fit-content;
	}

	.skill {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 10px;
	}

	.skill i {
		font-size: 54px;
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

	@keyframes wave {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		}
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(-4deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
</style>
