# Enis Shala Gartenbau

A three-page landscaping site built with Nuxt 4, Vue 3, TypeScript, Nuxt UI, and Tailwind CSS.

## Run locally

Use Node.js 24 (see `.nvmrc`).

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If a previous dev server is still running, stop it with Ctrl+C and start it again to load newly installed packages.

```bash
npm run typecheck
npm run build
npm run preview
```

## Brevo SMTP contact form

The contact form posts to `server/api/contact.post.ts`. It sends a branded HTML email with an embedded logo and a plain-text fallback to `info@enisshala-gartenbau.de` through Brevo SMTP. The visitor's email is used as `Reply-To`, so replies go directly to them. SMTP credentials are kept in private Nuxt runtime config and are never sent to the browser.

1. In Brevo, authenticate your domain and verify the sender address you want to use.
2. In **SMTP & API → SMTP**, copy your **SMTP login** and create an **SMTP key**. An API key or Brevo account password will not work for SMTP.
3. Copy `.env.example` to `.env` and fill in `NUXT_BREVO_SMTP_USER`, `NUXT_BREVO_SMTP_KEY`, and `NUXT_BREVO_SENDER_EMAIL`. The sender address must match one verified in Brevo. Set `NUXT_CONTACT_RECIPIENT` if enquiries should go to a different inbox.
4. Restart `npm run dev`. Submit a test enquiry on `/contact` and check the recipient inbox and spam folder.

The default Brevo relay is `smtp-relay.brevo.com` on port `587` with STARTTLS. If your hosting provider blocks that port, set `NUXT_BREVO_SMTP_PORT=2525` or `465`. For a production Node server, set the same `NUXT_...` variables in your host's secret/environment settings. A static `npm run generate` deployment cannot run this server endpoint.

Until the SMTP login, key, and verified sender are configured, the form displays an unavailable message instead of claiming that an email was sent. The endpoint validates fields, has a hidden spam field, and limits successful submissions from one IP to one every 30 seconds per server instance.

## Deploy on Hostinger

This site needs a Node.js web app because the contact form runs on the Nuxt server. Hostinger supports Node.js apps on Business Web Hosting and Cloud plans. A domain alone or a static/PHP website slot does not run the contact endpoint.

1. Push the `main` branch to the GitHub repository. Keep `.env` out of Git.
2. In Hostinger hPanel, open **Websites → Create site → Web App → Import Git Repository** and select this repository. If available, use a temporary domain first so the existing domain is not changed until the new site is checked.
3. Select **Nuxt.js** and **Node.js 24**. Use `npm run build` for the build command and `npm run start` (or `node .output/server/index.mjs`) for the start command if Hostinger asks. Keep SSR enabled.
4. Add the variables from `.env.example` in the app's **Environment variables** settings. Enter the Brevo SMTP key in Hostinger's secret field, never in GitHub or a public file. Use the verified sender address. Restart or redeploy after changing runtime variables.
5. Test the temporary URL, including `/`, `/projects`, `/contact`, and a real contact form submission. Then use **Connect domain** for `enisshala-gartenbau.de` and check HTTPS and both `www` and non-`www` addresses.

If **Web App** is unavailable in hPanel, check the exact hosting tier: Hostinger's managed Node.js deployment requires Business Web Hosting or Cloud. Its ordinary Git integration for PHP/HTML websites does not run this Nuxt server.

## Update site content

- Business phone, email, and address are kept in `app/config/company.ts`. They appear in the contact page and footer.
- Replace `public/enis-shala-logo.png` to update the header, footer, and browser icon. Copy the same file to `server/assets/enis-shala-logo.png` to update the embedded email logo.
- The Projects page and home featured cards use 14 supplied photographs in `public/images/projects/`, grouped and described in `app/data/projects.ts`. Update that file to change project titles, descriptions, image order, or photo captions.
- The home hero rotates through real project photos selected in `app/components/HeroSlider.vue`. The image in the lower home section also uses a supplied project photo.
- Edit the page text and metadata in `app/pages/index.vue`, `app/pages/projects.vue`, and `app/pages/contact.vue`.
- Update the contact form recipient through `NUXT_CONTACT_RECIPIENT` (default: `info@enisshala-gartenbau.de`).

## Search visibility

The site uses German page titles and descriptions, canonical URLs, Open Graph metadata, and `LocalBusiness` structured data. `/sitemap.xml` lists the three public routes and `/robots.txt` points crawlers to it. The canonical domain is set in `nuxt.config.ts` as `public.siteUrl`.

After deploying the Nuxt app to `https://enisshala-gartenbau.de`, verify that the Hostinger coming-soon page has been replaced, then add the domain to Google Search Console and submit `https://enisshala-gartenbau.de/sitemap.xml`. Complete and verify the Google Business Profile using the same name, address, phone number, and website shown here. Keep project photos and descriptions current. Do not add service areas, opening hours, ratings, or reviews that are not verified.
