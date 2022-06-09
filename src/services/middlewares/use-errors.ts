import type { Handle } from '@sveltejs/kit';

export const useErrors: Handle = async ({ event, resolve }) => {
	try {
		return await resolve(event);
	} catch (error) {
		console.error(error);
		return new Response(
			JSON.stringify({
				message: error.message
			}),
			{
				status: 500
			}
		);
	}
};
