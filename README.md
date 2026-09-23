# Airbnb UI Clone

A front-end recreation of an Airbnb property listing page. The project is built with Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui primitives. It is a local, data-in-code interface: there is no backend, database, authentication flow, or booking integration in this repository.

## What is included

The default page presents a complete property listing experience with:

- A responsive header, listing hero, property overview, highlights, host information, location, reviews, house rules, and other stays.
- A sticky section navigation bar for Photos, Amenities, Reviews, and Location.
- Local photo assets for the listing and related stays.
- A photo tour at `/?view=photos`, grouped by room or area.
- A full-screen photo lightbox with previous/next controls and keyboard support (`ArrowLeft`, `ArrowRight`, and `Escape`).
- An amenities modal that closes with its close button, backdrop, or `Escape`.
- Client-side save, share, reserve, and similar controls represented by local state or toast messages. These controls do not call an external service.

## Requirements

- Bun, using the checked-in `bun.lock` lockfile.
- A modern browser with JavaScript enabled.

The repository does not declare environment variables or external services.

## Getting started

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Open the local URL printed by Next.js, normally `http://localhost:3000`.

## Scripts

| Command             | Purpose                                               |
| ------------------- | ----------------------------------------------------- |
| `bun run dev`       | Start the Next.js development server.                 |
| `bun run build`     | Create a production build.                            |
| `bun run start`     | Start the production server after a successful build. |
| `bun run lint`      | Run ESLint.                                           |
| `bun run format`    | Format TypeScript and TSX files with Prettier.        |
| `bun run typecheck` | Run TypeScript without emitting files.                |

## Project structure

```text
app/
	page.tsx             Main listing page and photo-tour route switch.
	layout.tsx           Root layout, metadata, fonts, theme, and toast providers.
	globals.css          Tailwind imports, theme tokens, and Airbnb Cereal font setup.
components/
	layout/              Listing sections, header, hero, reviews, host, and related stays.
	photo-tour/          Room/category photo-tour view.
	lightbox.tsx         Full-screen photo viewer.
	amenity-modal.tsx    Amenities dialog.
	toast/               Local toast context and provider.
	ui/                  Reusable UI components.
lib/
	photo-data.ts        Room metadata and photo paths used by the tour and lightbox.
public/
	fonts/               Local font files.
	images/              Listing, avatar, header, review, stay, and tour images.
architecture/          Project or implementation notes.
```

The `@/*` import alias points to the repository root, as configured in `tsconfig.json`.

## Photo tour URLs

- `/?view=photos` opens the photo-tour page.
- `/?view=photos&photo=1` opens the first image in the lightbox.

The photo index is generated from `lib/photo-data.ts`; changing that data changes the tour and lightbox contents.

## Styling and conventions

- Tailwind CSS v4 is imported from `app/globals.css`.
- The app uses the local Airbnb Cereal variable font from `public/fonts`.
- The root theme is forced to light mode through `components/theme-provider.tsx`.
- Components use the `@/` path alias and are split by page section under `components/layout`.

## Verification

Before submitting changes, run:

```bash
bun run lint
bun run typecheck
bun run build
```

The app is intentionally a UI clone and does not persist changes made through save, reserve, share, or other interactive controls.
