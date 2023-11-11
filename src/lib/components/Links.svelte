<script>
    // @ts-nocheck
	import Button from "$lib/ui/Button.svelte";
    import {faDiscord, faFacebook, faGithub, faLinkedin, faViber, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";
	import { faA, faAt } from "@fortawesome/free-solid-svg-icons";

</script>
<div class="row buttons">
    <Button
        icon={faGithub}
        href="https://github.com/rhpo/"
        color="white"
        textColor="black"
        fullw
    >GitHub</Button>

    <Button
        icon={faLinkedin}
        href="https://github.com/rhpo/"
        color="#0077b5"
        textColor="white"
        fullw
    >LinkedIN</Button>

    <Button
        icon={faFacebook}
        href="https://www.facebook.com/profile.php?id=100009607830811"
        color="royalblue"
        textColor="white"
        fullw
    >Facebook</Button>

    <Button
        icon={faViber}
        href="tel:+213553238410"
        color="rgb(115, 96, 242)"
        textColor="white"
        fullw
    >Viber</Button>
</div>

<div class="row buttons">

    <Button
        icon={faAt}
        href="mailto:me@ramyhadid.tech"
        color="#f6d876"
        textColor="var(--back)"
        fullw
    >Email</Button>

    <Button
        icon={faYoutube}
        href="https://www.youtube.com/@ramyhadid"
        color="red"
        textColor="white"
        fullw
    >YouTube</Button>

    <Button
        icon={faDiscord}
        href="https://discordapp.com/users/751901651622690927"
        color="#7289da"
        textColor="white"
        fullw
    >Discord</Button>
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
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
    }

    @media screen and (max-width: 590px) {
        .row {
            grid-template-columns: 1fr;
            width: 100%;
        }
    }
</style>
