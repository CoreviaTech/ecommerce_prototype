# Repository Guidelines

## Purpose and Scope

This repository is a dependency-free UI/UX prototype for the HEDY ATELIER ceramics and gifting store. It exists to compare distinct visual directions before selecting a production design. It is not a production storefront: do not add frameworks, backend services, checkout logic, or dependencies unless requested.

Preserve completed directions and create new explorations separately for comparison.

## Project Structure

- `index.html`, `styles.css`, `script.js`: Direction 01, Quiet Ritual.
- `direction-2.html`, `direction-2.css`, `direction-2.js`: Direction 02, Earthen Modernism.
- `materials/`: source photography, logo, and palette references. Never overwrite these files.
- `.agents/skills/`: repository-scoped Codex workflows used for this project.
- `styleIdeas.md`: brand foundation, direction status, and future concepts.
- `README.md`: preview instructions.

Name future concepts `direction-N.html`, `direction-N.css`, and `direction-N.js`. Keep each direction self-contained until one is selected for production.

## Required Workflow

1. Read `styleIdeas.md` and inspect relevant assets before designing.
2. Confirm whether the task changes an existing direction or creates a new one.
3. Implement responsive layouts and interactions without altering unrelated directions.
4. Review desktop and mobile renders; validate behavior and assets.
5. Update `styleIdeas.md`, `README.md`, or this guide when decisions or structure change.

## Brand and Design Guardrails

Use **HEDY** in compact customer-facing contexts and **HEDY ATELIER** formally. The logo source is `materials/logo.jpg`; the palette reference is `materials/palatte.jpg`. Preserve the promise "Quiet Beauty, Lasting Meaning." Follow the colors and logo guidance in `styleIdeas.md`.

Product photography, storytelling, readable typography, intentional mobile composition, and gifting must remain central. Do not flatten different directions into one shared visual style.

## Development and Coding Conventions

Open HTML files directly or run `npx serve .`. There is no build step. Validate every script with:

```powershell
Get-ChildItem -Filter "*.js" | ForEach-Object { node --check $_.FullName }
```

Use two-space indentation, semantic HTML, descriptive kebab-case CSS classes, camelCase JavaScript names, CSS custom properties, and `const`/`let`. Every content image needs meaningful `alt` text; decorative images use `alt=""`.

## Definition of Done

Review at 1440px desktop and 390-500px mobile widths. Confirm navigation, search, filters, cart feedback, forms, keyboard Escape behavior, reduced motion, and horizontal overflow. Completion requires no missing assets, console errors, syntax failures, or unintended changes to other directions.

## Commits and Pull Requests

No Git convention exists yet. Use concise imperative commits such as `feat: add gift finder concept`. Pull requests should name the affected direction, explain design and behavior changes, list validation performed, and include desktop and mobile screenshots. Note new assets, dependencies, and related design decisions.
