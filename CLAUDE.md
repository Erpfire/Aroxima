# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aroxima Lifesciences is a pharmaceutical company website built with **SvelteKit** and **Svelte 5**, using Tailwind CSS v4 for styling. The site showcases pharmaceutical product divisions (Cardiac, General, Diabetic, Ophthalmic), company information, careers, and contact details.

## Essential Commands

### Development
- `npm run dev` — Start Vite dev server with hot reload
- `npm run build` — Build production bundle to `.svelte-kit/output`
- `npm run preview` — Serve production build locally

### Quality Checks
- `npm run check` — Run `svelte-check` for type and accessibility issues
- `npm run check:watch` — Watch mode for continuous type checking
- `npm run lint` — Run Prettier format check and ESLint
- `npm run format` — Auto-format with Prettier (stage changes after)

## Architecture & Code Organization

### Project Structure
- **`src/routes/`** — File-based routing with SvelteKit conventions
  - `+layout.svelte` — Shared header navigation and layout wrapper
  - `+page.svelte` — Page components using route folders (about, careers, products, contact)
- **`src/lib/`** — Reusable components and utilities
  - Feature-organized folders: `aboutus/`, `careers/`, `contact/`, `products/`, `sections/`
  - `index.ts` — Central export file for easy imports
  - `products/catalog.ts` — Product and division data models (TypeScript types and data)
  - `theme/tokens.css` — CSS custom properties for brand colors and design tokens
  - `assets/` — Logo SVGs and brand imagery
- **`src/app.css`** — Global styles with Tailwind imports
- **`static/`** — Public assets served verbatim (images, robots.txt)

### Component Pattern
Pages are composed of **section components** that accept a `data` prop conforming to TypeScript interfaces. This keeps pages declarative with all content defined inline:

```svelte
// In +page.svelte
<script lang="ts">
  import HeroSection from '$lib/sections/HeroSection.svelte';

  const heroContent = {
    title: '...',
    lead: '...',
    backgroundImage: '/images/...'
  };
</script>

<HeroSection data={heroContent} />
```

Components define their own TypeScript interfaces in `<script lang="ts">` blocks and use Svelte 5 runes (`$props`, `$state`) for reactivity.

### Svelte 5 Conventions
**Always consult `llms.txt` before implementing Svelte features.** Key patterns:
- Use runes for reactivity: `$props`, `$state`, `$derived`, `$effect`
- Component props: `let { data } = $props<{ data: HeroContent }>()`
- Two-way binding: `bind:value={variable}`
- Conditional rendering: `{#if condition}...{/if}`
- Iteration: `{#each items as item}...{/each}`
- Render children: `{@render children?.()}`

### Styling System
- **Tailwind v4** with utility-first classes throughout components
- **Design tokens** in `src/lib/theme/tokens.css` as CSS custom properties:
  - Colors: `--life` (green), `--rust` (orange), `--sun` (yellow), `--ink`, `--muted`, `--border`
  - Layout: `--bg-base`, `--bg-elev`, `--shadow`, `--radius`, `--blur`
- **Typography**: Inter (body), Cinzel (display headings via `.font-display` class)
- Use `var(--token-name)` in Tailwind arbitrary values: `bg-[var(--life)]`

### Product Catalog Data
Product and division data live in **`src/lib/products/catalog.ts`** with exported TypeScript types:
- `ProductDivision` interface with fields: `id`, `name`, `summary`, `description`, `bulletPoints`, `image`, `accent`
- `ProductItem` interface for individual products
- `divisions` array (Cardiac, General, Diabetic, Ophthalmic)
- `catalog` array (individual products mapped to division IDs)

### Routing & Navigation
- Use `$app/paths` `resolve()` for type-safe internal links
- Cast path strings: `resolve('/about' as ResolveParam)` where `type ResolveParam = Parameters<typeof resolve>[0]`
- Navigation links defined in `+layout.svelte` with sticky header

## Deployment Configuration

- **Adapter**: `@sveltejs/adapter-node` (standalone Node server)
- **Docker**: `Dockerfile` present at root (check before deploying)
- **Nixpacks**: `nixpacks.toml` configures build for Railway/Render-style platforms

## Important Files Reference

| File | Purpose |
|------|---------|
| `AGENTS.md` | Repository coding guidelines (read before significant changes) |
| `llms.txt` | Svelte 5 documentation reference (check first for Svelte features) |
| `llms-full.txt` | Comprehensive docs (consult if `llms.txt` insufficient) |
| `src/lib/products/catalog.ts` | All product and division data + types |
| `src/lib/theme/tokens.css` | Brand color palette and design system |
| `svelte.config.js` | SvelteKit adapter configuration |

## Code Style

- **Formatting**: Prettier with 2-space indentation, single quotes (auto-formatted)
- **Components**: PascalCase filenames (`HeroSection.svelte`)
- **Utilities/modules**: camelCase filenames (`catalog.ts`)
- **Svelte files**: Keep lean—extract heavy logic to `.ts` modules
- **Imports**: Use `$lib/` alias for library imports

## Pre-commit Checklist

1. Run `npm run check` to catch type/accessibility issues
2. Run `npm run lint` and fix any violations
3. Ensure `npm run build` succeeds without errors
