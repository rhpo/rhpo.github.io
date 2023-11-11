import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),

		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// // ignore deliberate link to shiny 404 page
				// if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
				// 	return;
				// }

				// // otherwise fail the build
				// throw new Error(message);

				// ? This is the code part

				console.error(`HTTP error: ${message} (${path})`);

				// If the error is a 404, redirect to the custom 404 page.
				if (message.includes('404')) {
					return {
						statusCode: 404,
						headers: {
							Location: '/not-found',
						},
					};
				}

				// Otherwise, fail the build.
				throw new Error(message)
			}
		}
	}
};

export default config;
