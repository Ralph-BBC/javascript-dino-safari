# Module 8 — Code Organisation: Scaling a JS Codebase Without Chaos

**The park is franchising.** New teams mean more modules, more APIs between them, and more ways for errors and config to sprawl. This module is about **boundaries**.

## Learning goals

- Compare **feature folders** vs **layered** layouts; know when a **package / monorepo** helps.
- Design **module contracts**: what is exported, which direction dependencies flow.
- Centralize **errors**, **config**, and **logging** with clear ownership.

## Instructor Notes

- **Feature folders** vs **layered** (controllers/services/repos): when each helps; spotting “everything in one file” smells.
- **Monorepos / packages**: shared tooling at root, workspace boundaries — point at this repo as a concrete example.
- **Module contracts**: what is exported, what stays private, one-way dependencies (no cycles).
- **Refactoring under tests**: running Vitest before/while splitting the spaghetti file (exercise 1).
- **Custom error types**: `extends Error`, `name`, stable `code` or `type` fields for callers.
- **Config module**: validate required env vars at startup; fail fast with actionable messages (exercise 2).
- **Logging boundaries**: single `formatLogLine` (or similar) so structure stays consistent across modules.
- **Review checklist**: “Can a new teammate find where X lives?” and “What breaks if I rename this export?”

## Demos

```bash
node module-08-code-organisation/demo/01-project-structure
node module-08-code-organisation/demo/02-module-contracts
node module-08-code-organisation/demo/03-error-handling
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-split-modules`](exercises/01-split-modules/) | Split a monolith into cohesive modules. |
| [`exercises/02-error-config`](exercises/02-error-config/) | Typed errors + env config + log boundaries. |

```bash
pnpm vitest run module-08-code-organisation/exercises/
```

## Slides

From repo root: `pnpm slides:08`, or `cd slides && pnpm dev`.
