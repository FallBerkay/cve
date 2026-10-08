# CVE Motors

CVE Motors website built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 22 LTS
- npm

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
