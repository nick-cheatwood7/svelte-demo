import type { Load } from '@sveltejs/kit';

export const load = (async ({ fetch, parent }) => {
	const parent_data = await parent();
	console.log('parent_data', parent_data);

	const res = await fetch('https://syntax.fm/api/shows/latest');
	const data = await res.json();

	return {
		latest_episode: data
	};
}) satisfies Load;
