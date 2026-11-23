import { defineRouteMiddleware } from '@astrojs/starlight/route-data';

export const onRequest = defineRouteMiddleware((context) => {
	const data = context.locals.starlightRoute.entry.data;
	if (data.template !== 'splash' && data.status === 'draft' && !data.banner) {
		data.banner = {
			content:
				'<strong>Draft.</strong> Not yet checked against its sources. Do not build from this page yet.',
		};
	}
});
