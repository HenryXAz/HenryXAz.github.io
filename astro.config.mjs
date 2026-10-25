// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const env = loadEnv(mode, process.cwd(), '');
const rawSiteUrl = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL;
let site;

if (rawSiteUrl) {
	const parsedSite = new URL(rawSiteUrl);
	const localHosts = new Set(['localhost', '127.0.0.1', '::1']);

	if (!['http:', 'https:'].includes(parsedSite.protocol) || localHosts.has(parsedSite.hostname)) {
		throw new Error('PUBLIC_SITE_URL must be a public http(s) URL and cannot use localhost.');
	}
	if (parsedSite.pathname !== '/') {
		throw new Error('PUBLIC_SITE_URL must contain only the public origin, without a page path.');
	}

	parsedSite.search = '';
	parsedSite.hash = '';
	parsedSite.pathname = '/';
	site = parsedSite.toString();
}

// https://astro.build/config
export default defineConfig({
	site,
	devToolbar: {
		enabled: false,
	},
	integrations: site
		? [sitemap({ filter: (page) => !['/404', '/404/'].includes(new URL(page).pathname) })]
		: [],
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
