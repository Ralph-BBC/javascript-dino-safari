# Module 8 — Code Organisation: Scaling a JS Codebase Without Chaos

**The park is franchising.** New teams mean more modules, more APIs between them, and more ways for errors and config to sprawl. This module is about **boundaries**.

## Learning goals

- Compare **feature folders** vs **layered** layouts; know when a **package / monorepo** helps.
- Design **module contracts**: what is exported, which direction dependencies flow.
- Centralize **errors**, **config**, and **logging** with clear ownership.

## Demos

```bash
node module-08-code-organisation/demo/01-project-structure.js
node module-08-code-organisation/demo/02-module-contracts.js
node module-08-code-organisation/demo/03-error-handling.js
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-refactor-spaghetti`](exercises/01-refactor-spaghetti/) | Split a monolith into cohesive modules. |
| [`exercises/02-error-config`](exercises/02-error-config/) | Typed errors + env config + log boundaries. |

```bash
pnpm vitest run module-08-code-organisation/exercises/
```

## Slides

From repo root: `pnpm slides:08`, or `cd slides && pnpm dev`.
