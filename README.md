# CVE Motors

CVE Motors website built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 22 LTS
- npm

With nvm installed, run `nvm use` to select the version in `.nvmrc`.

## Local Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production

```sh
npm ci
npm run build
npm start
```

## Project Structure

- `app/`: pages, metadata, and styles.
- `src/components/`: shared UI and homepage sections.
- `public/`: original images, logos, and battery animation frames.
- `package-lock.json`: dependency versions for reproducible installation.
- `index.html`, `script.js`, `styles.css`, and `assets/`: retained earlier static version.

The active website is the Next.js application. Build output, dependencies,
temporary screenshots, and local environment files are excluded from Git.
Original media files are committed without recompression.

## Validation

`npm run build` compiles the production application, validates TypeScript,
and generates the pages. GitHub Actions runs this command after a clean
`npm ci` installation on pushes to `main` and on pull requests.

For a quicker type-only check after Next.js has generated its route types
through `npm run dev` or `npm run build`, run `npm run typecheck`.

There is currently no automated browser test suite. A successful build
does not verify form delivery or external services.

## Integration Status

- The website includes product pages, pricing, FAQ interactions, model
  selectors, and a scroll-driven battery animation.
- The dealer application form currently handles submission in local UI
  state only. It does not store or send applications to a backend.
- The homepage contact form is not connected to a submission endpoint.
- Search and profile buttons are not connected to functional views.
- Model color selectors update selection state; they do not change the
  product images.
- Some campaign images use external Honda CDN URLs. The remaining site
  images are stored locally under `public/`.

Connect the form endpoints and implement the remaining controls before
using this frontend to collect real customer applications.
