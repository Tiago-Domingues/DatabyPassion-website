# DatabyPassion website

Next.js 16 site. Visual system cloned from growthprotocol.ai. Canonical URL: https://databy-passion-website.vercel.app (www.databypaixao.com later).

## Commands

```bash
npm ci
npm run dev -- -H 127.0.0.1 -p 3000
npm run build
```

## Cursor Cloud specific instructions

- Node 20+ and npm. After `npm ci`, `npm run build` must succeed.
- Do not add Growth Protocol logos, Nestlé/Unilever/etc. client logos, or Jhonny Surf Store to the public site.
- Mercer / EY-Parthenon belong on `/about` only, never the homepage.
- Form is UI-only (no email send). Cookie banner stores consent in `localStorage` key `dbp_consent`.
- English only. Language switcher stays visible showing EN.
- Routes: `/` `/about` `/analytics` `/engineering` `/ai` `/products` `/security` `/careers` `/privacy` `/terms`.
