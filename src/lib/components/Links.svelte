<script>
	// @ts-nocheck
	import Button from '$lib/ui/Button.svelte';
	import {
		faDiscord,
		faFacebook,
		faGithub,
		faLinkedin,
		faViber,
		faWhatsapp,
		faYoutube
	} from '@fortawesome/free-brands-svg-icons';
	import { faA, faAt } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="row buttons">
	<Button icon={faWhatsapp} href="tel:+213553238410" color="#25D366" textColor="white" fullw
		>Phone</Button
	>

	<Button icon={faAt} href="mailto:me@ramyhadid.tech" color="#EA4335" textColor="white" fullw
		>Email</Button
	>

	<Button icon={faGithub} href="https://github.com/rhpo/" color="#24292e" textColor="white" fullw
		>GitHub</Button
	>
</div>

<div class="row buttons">
	<Button
		icon={faLinkedin}
		href="https://www.linkedin.com/in/ramyhadid/"
		color="#0077b5"
		textColor="white"
		fullw>LinkedIN</Button
	>

	<Button
		icon={faDiscord}
		href="https://discordapp.com/users/751901651622690927"
		color="#5865F2"
		textColor="white"
		fullw>Discord</Button
	>

	<Button
		icon={faYoutube}
		href="https://www.youtube.com/@ramyhadid"
		color="#FF0000"
		textColor="white"
		fullw>YouTube</Button
	>
</div>

<style>
	:global(.buttons *) {
		font-family: cubano !important;
		font-weight: 100 !important;
		font-size: 1.5rem !important;
		letter-spacing: 0.05rem !important;
	}

	.row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 1rem;
	}

	@media screen and (max-width: 590px) {
		.row {
			grid-template-columns: 1fr;
			width: 100%;
		}
	}
</style>
