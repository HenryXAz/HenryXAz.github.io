# Henry Xitimul — personal portfolio

Bilingual Astro portfolio focused on backend engineering, business applications, and software maintenance. English is served at `/` and Spanish at `/es/`.

On visits to `/`, an early browser script selects the first supported language (`en` or `es`) in `navigator.languages`, with `navigator.language` as a fallback. Regional variants such as `es-GT` use Spanish; unsupported preferences fall back to English. An explicit EN/ES selection is saved in `localStorage` as `portfolio-language` and takes precedence on later visits to `/`. Direct `/es/` links remain Spanish.

Language-switch links include `?lang=en` or `?lang=es` to make the choice explicit, including in new tabs or when storage is unavailable. Automatic redirects preserve query parameters and section anchors and use `location.replace` to avoid adding a redirect to browser history. Without JavaScript, both language links still work and `/` stays English. No geolocation service is used.

## Content and presentation

- `src/data/portfolio.ts` contains typed English and Spanish copy for the hero, six capability cards, professional experience, engineering principles, selected work, About, technical ecosystem, and contact section. Update both locales together.
- `src/components/Portfolio.astro` renders both languages with the same layout, icons, navigation, and interactions. The technical ecosystem shares the About section to keep the page compact.
- `src/config/site.ts` holds the personal identity and contact URLs. The existing GitHub profile is reused throughout.
- `src/components/SEO.astro` provides localized metadata and structured data using the Backend / Software Engineer identity.
- `src/styles/global.css` holds the light/dark palettes and reduced-motion behavior. Theme initialization lives in `Layout.astro`; the portfolio component handles theme and hero-image switching, persisted preferences, and the mobile menu.

Selected work currently describes private professional systems, not public demos. Keep client and provider details confidential. Add outcomes only when confirmed; the case-study renderer omits absent outcome fields. Public demos or planned projects must be labeled clearly and use verified links.

## Production SEO configuration

Set `PUBLIC_SITE_URL` in the production build environment to the public origin of the portfolio, with no page path. The GitHub Pages workflow already sets it to `https://henryxaz.github.io`; `.env.example` leaves it empty for local configuration.

When `PUBLIC_SITE_URL` is valid, Astro uses it as the single source for:

- canonical and absolute `hreflang` URLs;
- Open Graph and Twitter image URLs;
- `Person` and `WebSite` JSON-LD URLs;
- the sitemap integration and the sitemap declaration in `robots.txt`.

Builds reject localhost and loopback values. Without `PUBLIC_SITE_URL`, the site still builds, but absolute metadata and the sitemap are intentionally omitted so development URLs cannot leak into production metadata. Copy `.env.example` to the appropriate deployment environment; do not commit a real environment file.

### Future case studies

`src/components/SEO.astro` accepts page-specific title, description, path, locale, social image, robots directive, Open Graph type, alternate paths, and custom structured data. A future case study should only receive its own route after there is enough confirmed material for a useful page: project context, personal contribution, technical decisions, outcome, confidentiality wording, localized copy, and a share image. Empty or speculative case-study routes should not be published.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev -- --background` | Starts the background dev server             |
| `npm run astro -- dev status` | Shows the background server status           |
| `npm run astro -- dev logs` | Shows the background server logs               |
| `npm run astro -- dev stop` | Stops the background server                    |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `node --test tests/language-preference.test.mjs` | Checks language selection, saved choices, and redirects |

To validate the same absolute SEO metadata as GitHub Pages, run `PUBLIC_SITE_URL=https://henryxaz.github.io npm run build`.
