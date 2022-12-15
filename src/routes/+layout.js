/** @type {import('@sveltejs/kit').Load} */
export async function load({ fetch }) {
	const res = await fetch('https://syntax.fm/api/shows');
	const data = await res.json();

	return {
		all_episodes: data
	};
}
