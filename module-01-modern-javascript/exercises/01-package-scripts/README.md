# Exercise — Package scripts at Base Camp

**Mission briefing:** HQ needs a one-command way to boot the tracker console, lint the tracker file, and document how tests run in this monorepo.

## Tasks

Edit [`package.json`](package.json) in this folder and add:

1. **`start`** — runs `tracker.js` with Node (`node tracker.js`).
2. **`lint`** — runs ESLint on `tracker.js` (hint: `eslint tracker.js` works when ESLint is available on your `PATH`, e.g. from the repo root `node_modules`).
3. **`test`** — a script string that includes the word **`vitest`** (this documents that exercise tests are executed from the repo root with Vitest).

## Verify

From this directory:

```bash
pnpm start
```

You should see `DINO_SAFARI_TRACKER_ONLINE`.

From the **repo root**:

```bash
pnpm vitest run module-01-modern-javascript/exercises/01-package-scripts/start.test.js
```

## Hints

- Scripts are plain strings; you can chain commands with `&&` if needed.
- Instructor reference: see [`solution.js`](solution.js) (`referenceScripts`).
