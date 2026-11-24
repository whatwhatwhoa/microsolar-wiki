// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';
import mermaid from 'astro-mermaid';

// SITE: set to the live URL once Cloudflare gives one (llms.txt and the sitemap use it).
export default defineConfig({
	site: 'https://microsolar-wiki.example.workers.dev',
	integrations: [
		// Diagrams: ```mermaid blocks, drawn in the browser. Must come before starlight.
		mermaid({ theme: 'neutral', autoTheme: true }),
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
				{ label: 'The code', items: [{ autogenerate: { directory: 'code' } }] },
				{ label: 'Install', items: [{ autogenerate: { directory: 'install' } }] },
				{ label: 'Operate and maintain', items: [{ autogenerate: { directory: 'maintain' } }] },
				{ label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
			],
		}),
	],
});
