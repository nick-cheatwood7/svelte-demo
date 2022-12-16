import { error } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').ServerLoad} */
export async function load({ fetch, params, setHeaders, locals }) {
	// if (!locals?.user?.id) throw redirect(307, '/');

	const res = await fetch(`https://syntax.fm/api/shows/${params.id}`);
	const data = await res.json();
	if (!res.ok) {
		throw error(404, {
			message: 'Episode not found'
		});
	}

	setHeaders({
		'Cache-Control': 'max-age=3600' // 1 hour
	});

	return {
		episode: data,
		user: locals.user
	};
}
