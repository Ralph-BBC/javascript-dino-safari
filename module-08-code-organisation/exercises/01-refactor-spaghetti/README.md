# Exercise — Refactor the spaghetti digest

**Mission briefing:** `compileDigest` works, but everything lives in one tangled file. Split responsibilities without changing behaviour.

## Starting point

- [`spaghetti.js`](spaghetti.js) — messy but **correct** implementation.
- [`start.js`](start.js) — currently re-exports `compileDigest` from `spaghetti.js`.

## Tasks

1. Extract **zone normalization / dedupe / sorting** into its own module (e.g. `zones.js`).
2. Extract **high-alert counting** into another module (e.g. `alerts.js`).
3. Add a small **composer** (could be `compile-digest.js` or `index.js`) that wires the pieces.
4. Update [`start.js`](start.js) to export `compileDigest` from your new structure and **delete or stop using** the monolith import.

## Rules

- **Do not change** the public signature or output shape of `compileDigest`.
- Keep tests green:

```bash
pnpm vitest run module-08-code-organisation/exercises/01-refactor-spaghetti/start.test.js
```

## Reference layout

See the [`solution/`](solution/) folder for one possible factoring (and `solution.js` re-export for a quick peek).
