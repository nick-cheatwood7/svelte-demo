import crypto from 'crypto';

export function auth() {
	return {
		id: crypto.randomUUID(),
		name: 'Nick',
		email: 'nick@test-email.com',
		roles: ['admin']
	};
}
