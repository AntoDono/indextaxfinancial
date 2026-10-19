# Index Tax & Financial — Website

Public marketing site for Index Tax & Financial Inc (https://indextaxfinancials.com).
Nuxt 4 + Tailwind, static output, deployed on Netlify. English and Chinese.

## Develop

```bash
bun install
bun run dev        # http://localhost:3000
```

## Build / deploy

Netlify runs `bun run generate` and publishes the static output (see `netlify.toml`).
Pushing to the deployed branch publishes the site.

```bash
bun run generate   # static site in .output/public
npx serve .output/public
```

## Structure

| Path | What |
|---|---|
| `pages/` | `index` (home), `privacy`, `terms`, `sitemap` |
| `components/index/` | Home page sections (hero, services, about, team, map, …) |
| `components/Navbar.vue` | Top bar: section links, **Client Login** button, language switch |
| `components/Footer.vue` | **Client Portal** sign-up / log-in call to action, links, contact details |
| `i18n/locales/` | `en.json`, `zh.json` — every visible string lives here, keep both in sync |
| `tailwind.config.ts` | Brand colors (`copper`, `autumn-ember`, `coffee-bean`, `charcoal`) and fonts |

## Client portal links

The navbar and footer link to the client portal (ClientPortal app):

- Sign up: `<portalUrl>/auth/signup`
- Log in: `<portalUrl>/auth/login`

`portalUrl` defaults to `https://app.indextaxfinancials.com` (`nuxt.config.ts` →
`runtimeConfig.public.portalUrl`). Override with the `NUXT_PUBLIC_PORTAL_URL` environment
variable at build time, e.g. to point a preview build at a staging portal.
