import { API_KEY } from '$env/static/private';

import type { PageServerLoad, PageServerLoadEvent } from './$types';

import { error } from '@sveltejs/kit';
console.log('API KEY', API_KEY);

export const load = (async ({ fetch, params, setHeaders, locals }: PageServerLoadEvent) => {
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
}) satisfies PageServerLoad;
