import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Page rules the build enforces (see AGENTS.md): a page is a draft until it has sources and a
// review date. Drafts get a warning banner (src/routeData.ts). 'about' pages make no technical claims.
const extend = z.object({
	status: z.enum(['draft', 'reviewed', 'about']).default('draft'),
	reviewed: z.coerce.date().optional(),
	sources: z
		.array(z.object({ title: z.string(), url: z.string().url(), note: z.string().optional() }))
		.default([]),
});

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: (ctx) =>
			docsSchema({ extend })(ctx).superRefine((d, issue) => {
				if (d.status === 'reviewed' && (d.sources.length === 0 || !d.reviewed)) {
					issue.addIssue({
						code: 'custom',
						message: 'status: reviewed needs at least one source and a reviewed: date',
					});
				}
			}),
	}),
};
