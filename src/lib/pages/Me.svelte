<script>
    // @ts-nocheck

	import tilt from 'vanilla-tilt-svelte';
    import pfp from '$lib/images/pfp.jpg';
	import pfpTrans from '$lib/images/pfp.png';
</script>

<section class="ana">
    <div class="image-wrapper" data-aos="fade-right" data-aos-duration="2000">
        <div
            class="image"
            use:tilt={{
                scale: 1,
                max: 8,
                speed: 400,
                glare: true,
                gyroscope: false,
                startX: -8
            }}
        >
            <img src={pfp} alt="A pic-ture of Me!" />
            <img class="me" src={pfpTrans} alt="A pic-ture of Me!" />
        </div>
    </div>

    <div class="info" data-aos="fade-down">
        <div class="wrap" data-aos="flip-right" data-aos-duration="2000">
            <div class="text">
                <div class="box" />
                <h1 style="white-space: nowrap">
                    Ramy Hadid
                    <div class="hue">👋</div>
                </h1>
            </div>
            <p>
                I'm a 1st year Science & Technology (ST) student at the University of
				<a href="https://fr.wikipedia.org/wiki/Universit%C3%A9_des_sciences_et_de_la_technologie_Houari-Boum%C3%A9di%C3%A8ne" class="inline">
					<span class="flip-x">✨</span>
						USTHB
					<span class="flip">✨</span>
				</a>. I'm currently working for SocialGYM (Dubai) from a 2023 contract.
            </p>
        </div>
    </div>
</section>

<style>
    .hue {
		animation: wave 4s infinite;
		transform-origin: 70% 70%;
		display: inline-block;
	}

	.inline {
		display: inline-flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
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

    section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		width: 100%;
	}

	section:not(.basic) {
		min-height: calc(100vh - var(--nav));
	}

	.image {
		position: relative;
		width: 100%;
		max-width: var(--mw);
		border-radius: 10px;
		overflow: hidden;

		transform-style: preserve-3d;
		transform: perspective(1000px);
	}

	.image-wrapper {
		border-radius: 10px;
		overflow: hidden;
		padding: 8px;
	}

	.me {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 10px;

		animation: shadow 2s infinite;
		transform: translateZ(20px);
	}

	.image img {
		width: 100%;
		max-width: var(--mw);
		border-radius: 10px;
	}

	.info {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.wrap {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.info h1 {
		font-family: 'Inter', sans-serif;
		font-weight: 700;

		font-size: min(8rem, 6vw);
	}

	.info p {
		font-family: 'Inter', sans-serif;
		font-size: 1.8rem;
		font-weight: 400;
	}

	.info h1,
	.info p {
		margin: 10px;
	}

	.text {
		position: relative;
		width: fit-content;
		height: fit-content;
	}

	.box {
		display: none;

		position: absolute;
		top: 0;
		height: 100%;
		right: 0;
		background: var(--back);
		box-shadow: -18px 0px 22px -2px var(--back);
		-webkit-box-shadow: -18px 0px 22px -2px var(--back);
		-moz-box-shadow: -18px 0px 22px -2px var(--back);
		animation: reveal infinite 10s cubic-bezier(0.94, 0.56, 0.42, 0.97);
		animation-delay: 1s;
		background-color: rgba(255, 255, 255, 0.123);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.123);
		border-radius: 10px;
		padding: 0 10px;
	}

	@keyframes shadow {
		0% {
			filter: drop-shadow(0 0 0 var(--shadow));
		}

		50% {
			filter: drop-shadow(0 0 10px var(--shadow));
		}

		100% {
			filter: drop-shadow(0 0 0 var(--shadow));
		}
	}

	@keyframes reveal {
		0% {
			width: 0;
		}

		50% {
			width: 0;
		}

		80% {
			width: 100%;
			content: '✨';
		}

		100% {
			width: 0;
		}
	}

	.flip {
		animation: flipping infinite 1s steps(1);
		transform-origin: center;
	}

	.flip-x {
		animation: flipping infinite 1s steps(1);
		animation-direction: reverse;
		transform-origin: center;
	}


	@keyframes flipping {
		0% {
			transform: rotateY(0deg);
		}

		50% {
			transform: rotateY(180deg);
		}

		100% {
			transform: rotateY(0deg);
		}
	}

	@media screen and (max-width: 760px) {

		.ana {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.ana p {
			text-align: center;
			font-size: 1rem !important;
		}

		.image-wrapper {
			width: 100%;
			max-width: 60vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		:root {
			--space: 1rem;
			--nav: 80px;
		}

		.image img {
			max-width: min(300px, 100%);
		}

		.image {
			max-width: min(300px, 100%);
		}

		.info {
			text-align: left;
		}

		.info p {
			font-size: 1.2rem;
		}
	}

    @media screen and (max-width: 760px) {
		.ana {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.ana p {
			text-align: center;
			font-size: 1rem !important;
		}

		.image-wrapper {
			width: 100%;
			max-width: 60vw;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		:root {
			--space: 1rem;
			--nav: 80px;
		}

		.image img {
			max-width: min(300px, 100%);
		}

		.image {
			max-width: min(300px, 100%);
		}

		.info {
			text-align: left;
		}

		.info p {
			font-size: 1.2rem;
		}
	}
</style>
