// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

// SITE: set to the live URL once Cloudflare gives one (llms.txt and the sitemap use it).
export default defineConfig({
	site: 'https://microsolar-wiki.example.workers.dev',
	integrations: [
		starlight({
			title: 'Micro Solar DC Wiki',
			description: 'Plain-language guides for setting up a small off-grid solar power system safely.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/whatwhatwhoa/microsolar-wiki' }],
			editLink: { baseUrl: 'https://github.com/whatwhatwhoa/microsolar-wiki/edit/main/' },
			lastUpdated: true,
			routeMiddleware: './src/routeData.ts',
			components: { MarkdownContent: './src/components/MarkdownContent.astro' },
			plugins: [starlightLinksValidator(), starlightLlmsTxt()],
			sidebar: [
				{ label: 'Start here', items: [{ autogenerate: { directory: 'start-here' } }] },
				{ label: 'Plan your system', items: [{ autogenerate: { directory: 'plan' } }] },
				{ label: 'Choose parts', items: [{ autogenerate: { directory: 'choose-parts' } }] },
				{ label: 'Install and wire', items: [{ autogenerate: { directory: 'install' } }] },
				{ label: 'Stay safe', items: [{ autogenerate: { directory: 'safety' } }] },
				{ label: 'Maintain and fix', items: [{ autogenerate: { directory: 'maintain' } }] },
				{ label: 'Example systems', items: [{ autogenerate: { directory: 'examples' } }] },
			],
		}),
	],
});
