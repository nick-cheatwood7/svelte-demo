import type { Handle, HandleFetch } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';

const logger = (async ({ event, resolve }) => {
	const start_time = Date.now();
	const response = await resolve(event);
	console.log(`${event.request.method} ${event.url.pathname} – ${Date.now() - start_time}ms`);
	return response;
}) satisfies Handle;

const authorize = (async ({ event, resolve }) => {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}) satisfies Handle;

export const handle = sequence(logger, authorize);

// Intercepting fetch requests
export const handleFetch = (({ request, fetch }) => {
	return fetch(request);
}) satisfies HandleFetch;

// /** @type {import('@sveltejs/kit').HandleServerError} */
// // Intercept errors
// export function handleError({ event, error }) {
// 	return {
// 		message: 'Opps! Something went wrong'
// 		code: error.code || 500
// 	};
// }
