import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$db/fake_auth';

/** @type {import('@sveltejs/kit').Handle}  */
async function logger({ event, resolve }) {
	const start_time = Date.now();
	const response = await resolve(event);
	console.log(`${event.request.method} ${event.url.pathname} – ${Date.now() - start_time}ms`);
	return response;
}

/** @type {import('@sveltejs/kit').Handle}  */
function authorize({ event, resolve }) {
	const user = auth();
	event.locals.user = user;
	return resolve(event);
}

export const handle = sequence(logger, authorize);

/** @type {import('@sveltejs/kit').HandleFetch}  */
// Intercepting fetch requests
export function handleFetch({ request, fetch }) {
	return fetch(request);
}

// /** @type {import('@sveltejs/kit').HandleServerError} */
// // Intercept errors
// export function handleError({ event, error }) {
// 	return {
// 		message: 'Opps! Something went wrong'
// 		code: error.code || 500
// 	};
// }
