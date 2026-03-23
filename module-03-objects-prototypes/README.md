# Module 3 — Objects & Prototypes: How JavaScript Really Does OOP

**The Dinosaur Registry** went live before `class` was cool. Under the hood, **prototypes** still power inheritance — and often **composition** is the safer path through the jungle.

## Learning goals

- Trace the **prototype chain** and property lookup.
- Use **`Map`** / **`Set`** when object keys or uniqueness semantics matter.
- Prefer **composition** for mixed capabilities vs deep inheritance trees.

## Demos

```bash
node module-03-objects-prototypes/demo/01-prototype-chain.js
node module-03-objects-prototypes/demo/02-maps-and-sets.js
node module-03-objects-prototypes/demo/03-composition.js
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-prototype-safari`](exercises/01-prototype-safari/) | Prototypal `Dinosaur` / `FlyingDinosaur` (no `class`). |
| [`exercises/02-registry-map-set`](exercises/02-registry-map-set/) | `DinoRegistry` with `Map` + `Set`. |
| [`exercises/03-compose-dinosaur`](exercises/03-compose-dinosaur/) | Capability mixins instead of subclasses. |

```bash
pnpm vitest run module-03-objects-prototypes/exercises/
```

## Slides

From repo root: `pnpm slides:03`, or `cd slides && pnpm dev`.
