import type { Load } from '@sveltejs/kit';

export const load = (async ({ fetch }) => {
	const res = await fetch('https://syntax.fm/api/shows');
	const data = await res.json();

	return {
		all_episodes: data
	};
}) satisfies Load;
