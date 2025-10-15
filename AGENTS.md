# Repository Guidelines

## Documentation Reference

Always review `llms.txt` before starting any coding work to align on the Svelte 5 core feature set. If the answer is not available there, consult `llms-full.txt` for comprehensive documentation after confirming `llms.txt` first.

## Project Structure & Module Organization

Source lives in `src`, with route-driven pages under `src/routes` and reusable UI or utilities in `src/lib`. Global scaffolding (`app.html`, `app.css`, `app.d.ts`) configures the SvelteKit shell. Static assets (favicons, public files) belong in `static` and are served verbatim. Tooling and build configuration sit at the project root—`vite.config.ts`, `svelte.config.js`, `tsconfig.json`, and `eslint.config.js`. Treat `node_modules` as generated; anything reproducible should be tracked under `src` or `static`.

## Build, Test, and Development Commands

`npm run dev` starts the Vite-powered SvelteKit dev server (auto reloads on file save). `npm run build` generates an optimized production bundle in `.svelte-kit/output`. `npm run preview` serves that build to exercise deployment parity. `npm run check` runs `svelte-check` against `tsconfig.json` to catch type and accessibility issues. `npm run lint` enforces Prettier formatting and the ESLint Svelte ruleset; use it before pushing. `npm run format` rewrites files with Prettier—prefer staging changes after running it.

## Coding Style & Naming Conventions

Follow Prettier defaults (2-space indentation, single quotes in JS/TS when auto-formatted). Components in `src/lib` should use PascalCase filenames (`ActionCard.svelte`), while helper modules use camelCase (`formatDate.ts`). Tailwind utility classes are preferred for styling; colocate shared design tokens in a dedicated module under `src/lib`. Keep Svelte files lean—extract heavy logic into TypeScript modules to preserve template clarity.

## Testing Guidelines

There is no full unit-test harness yet, but `npm run check` and `npm run lint` act as the regression gate. Add integration or component tests with your preferred runner (Vitest + Playwright pair well with SvelteKit). When adding tests, mirror the route or component path (e.g., `src/routes/profile/+page.spec.ts`). Aim for meaningful coverage on critical flows (auth, data mutations) and document gaps in the pull request.

## Commit & Pull Request Guidelines

This workspace ships without visible Git history; adopt Conventional Commits (`feat: add onboarding wizard`, `fix: guard empty sessions`) to keep logs greppable. Group related changes per commit and ensure `npm run check` and `npm run lint` pass beforehand. Pull requests should include a concise summary, screenshots or GIFs for UI tweaks, reproduction steps for fixes, and cross-links to tracking issues. Highlight any configuration or schema changes so reviewers can validate their setup.
