<script>
	// @ts-nocheck

	import Button from '$lib/ui/Button.svelte';

	import Input from '$lib/ui/Input.svelte';
	import { dialog } from '$lib/ui/dialog';
	import { faExclamationCircle, faMessage } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let loading = false;
	let data = {
		name: { value: '', valid: false },
		email: { value: '', valid: false },
		message: { value: '', valid: false }
	};

	const reset = () =>
		(data = {
			name: { value: '', valid: false },
			email: { value: '', valid: false },
			message: { value: '', valid: false }
		});

	$: canSend =
		data.name.valid &&
		(data.email.value.trim && data.email.value.trim() !== '' ? data.email.valid : true) &&
		data.message.value.trim &&
		data.message.value.trim() !== '';

	async function notify() {
		loading = true;

		if (!canSend) {
			dialog('Please fill all the fields correctly.', 'Oops!', faExclamationCircle);

			loading = false;
			return;
		}

		let params = new URLSearchParams();

		params.append("title", data.name.value + ` (${data.email.value})`);
		params.append("message", data.message.value);

		let res = await fetch('https://server.codiha.com/notify/ + params.toString()', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok || !res.status === 200) {
			dialog(
				'An error occured while sending your message, please try again later.',
				'Oops!',
				faExclamationCircle
			);

			reset();

			loading = false;
			return;
		} else
			try {
				let json = await res.json();

				if (!json.success) {
					dialog(
						'An error occured while sending your message, please try again later.',
						'Oops!',
						faExclamationCircle
					);

					reset();

					loading = false;
					return;
				} else {
					dialog('Message sent successfully!', 'Horray!', faMessage);

					reset();
					loading = false;
				}
			} catch {
				dialog(
					'An error occured while sending your message, please try again later.',
					'Oops!',
					faExclamationCircle
				);

				reset();

				loading = false;
				return;
			}
	}
</script>

<div class="container" id="notify">
	<h1 data-aos="fade-right"><Fa icon={faMessage} /> Text me !</h1>

	<p style="text-align: center" data-aos="fade-right">
		I will receive a notification with your message & name on my phone, "besh ta3ref brk"
	</p>

	<div class="messagebox">
		<form data-aos="flip-right">
			<Input
				textColor="white"
				type="text"
				name="Name (so it can be friendly)"
				bind:valid={data.name.valid}
				bind:value={data.name.value}
				placeholder="Your Name"
				pattern={/^[a-zA-Z ]{2,30}$/}
				replace={function (inputName) {
					let capitalizedName = inputName.replace(/\b\w/g, (match) => match.toUpperCase());
					capitalizedName = capitalizedName
						.split(' ')
						.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
						.join(' ');
					const formattedName = capitalizedName.replace(/\s+/g, ' ').substring(0, 30);

					return formattedName;
				}}
			/>

			<Input
				textColor="white"
				type="text"
				bind:valid={data.email.valid}
				bind:value={data.email.value}
				name="E-mail (optional, in case you want me to reply to you)"
				placeholder="Your Email"
				pattern={/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}
				replace={(i) => i.toLowerCase().replaceAll(' ', '')}
			/>

			<Input
				textColor="white"
				type="textarea"
				name="Message"
				placeholder="Your Message"
				rich
				bind:valid={data.message.valid}
				bind:value={data.message.value}
			/>
			<br />
			<Button
				onClick={notify}
				bind:loader={loading}
				fullw
				type="primary"
				textColor="white"
				icon={faMessage}>Notify me!</Button
			>
		</form>
	</div>
</div>

<style>
	.messagebox {
		width: 100%;
		padding: var(--space);
		padding-top: 0;
		max-width: calc(var(--width) / 2);

		font-family: 'Inter', sans-serif !important;
	}

	.messagebox * {
		font-family: 'Inter', sans-serif !important;
	}
</style>
