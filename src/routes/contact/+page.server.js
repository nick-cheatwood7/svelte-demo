import { fail } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Actions} */
export const actions = {
	email: async ({ locals }) => {
		if (!locals?.user?.roles?.includes('admin')) {
			return fail(401, {
				error_message: 'Un-Authorized'
			});
		}
		return {
			message: 'Email sent!'
		};
	},
	test: () => {
		console.log('hit test action');
	}
};
