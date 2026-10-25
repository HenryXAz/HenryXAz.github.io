# Astro Starter Kit: Basics

## Production SEO configuration

Set `PUBLIC_SITE_URL` in the production build environment to the public origin of the portfolio, for example the final `https://` domain with no page path. The repository intentionally leaves this value empty because no production domain is currently documented.

When `PUBLIC_SITE_URL` is valid, Astro uses it as the single source for:

- canonical and absolute `hreflang` URLs;
- Open Graph and Twitter image URLs;
- `Person` and `WebSite` JSON-LD URLs;
- the sitemap integration and the sitemap declaration in `robots.txt`.

Builds reject localhost and loopback values. Without `PUBLIC_SITE_URL`, the site still builds, but absolute metadata and the sitemap are intentionally omitted so development URLs cannot leak into production metadata. Copy `.env.example` to the appropriate deployment environment; do not commit a real environment file.

### Future case studies

`src/components/SEO.astro` accepts page-specific title, description, path, locale, social image, robots directive, Open Graph type, alternate paths, and custom structured data. A future case study should only receive its own route after there is enough confirmed material for a useful page: project context, personal contribution, technical decisions, outcome, confidentiality wording, localized copy, and a share image. Empty or speculative case-study routes should not be published.

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
