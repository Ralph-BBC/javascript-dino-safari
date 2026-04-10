# Module 4 — Functional JS Patterns: Immutability, Composition, and Practical FP

**Migration analytics** at the park are a pipeline: filter herds, map to summaries, reduce to zone pressure scores. Side effects stay at the edges; the core stays **pure** where possible.

## Learning goals

- Copy objects/arrays safely; know **spread** vs **`structuredClone`** trade-offs.
- Build **pipelines** with `map` / `filter` / `reduce`.
- Apply **currying** / **memoization** when they reduce real complexity — not dogma.

## Instructor Notes

- **Immutability goal**: avoid shared mutable state across functions; predictability in tests and concurrent-ish Node code.
- **Shallow copy**: spread/`Object.assign` — nested objects still alias unless cloned deeply.
- **`structuredClone`**: when it fits; what it does not clone (functions, some builtins).
- **`map` / `filter` / `reduce`**: readability vs one giant `reduce`; prefer small named steps in pipelines.
- **Pure functions**: same input → same output, no observable side effects — push I/O and logging to the edges.
- **Composition**: building `buildMigrationReport` from smaller helpers (exercise 2 narrative).
- **Memoization**: caching by arguments; cache key limits (primitive args vs object identity) — connect to exercise 3.
- **Anti-pattern**: forcing FP style where a simple loop is clearer — pragmatism over dogma.

## Demos

```bash
node module-04-functional/demo/01-immutability
node module-04-functional/demo/02-pipelines
node module-04-functional/demo/03-memoization
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-immutable-records`](exercises/01-immutable-records/) | Refactor mutating updates to immutable style. |
| [`exercises/02-migration-pipeline`](exercises/02-migration-pipeline/) | `map` / `filter` / `reduce` over migration events. |
| [`exercises/03-memoized-tracker`](exercises/03-memoized-tracker/) | Generic `memoize` + expensive route stub. |

```bash
pnpm vitest run module-04-functional/exercises/
```

## Slides

From repo root: `pnpm slides:04`, or `cd slides && pnpm dev`.
