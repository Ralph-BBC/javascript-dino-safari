# Module 6 — Functional JS Patterns: Immutability, Composition, and Practical FP

**Migration analytics** at the park are a pipeline: filter herds, map to summaries, reduce to zone pressure scores. Side effects stay at the edges; the core stays **pure** where possible.

## Learning goals

- Copy objects/arrays safely; know **spread** vs **`structuredClone`** trade-offs.
- Build **pipelines** with `map` / `filter` / `reduce`.
- Apply **currying** / **memoization** when they reduce real complexity — not dogma.

## Demos

```bash
node module-06-functional/demo/01-immutability.js
node module-06-functional/demo/02-pipelines.js
node module-06-functional/demo/03-memoization.js
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-immutable-records`](exercises/01-immutable-records/) | Refactor mutating updates to immutable style. |
| [`exercises/02-migration-pipeline`](exercises/02-migration-pipeline/) | `map` / `filter` / `reduce` over migration events. |
| [`exercises/03-memoized-tracker`](exercises/03-memoized-tracker/) | Generic `memoize` + expensive route stub. |

```bash
pnpm vitest run module-06-functional/exercises/
```

## Slides

From repo root: `pnpm slides:06`, or `cd slides && pnpm dev`.
