# Module 3 — Objects & Prototypes: How JavaScript Really Does OOP

**The Dinosaur Registry** went live before `class` was cool. Under the hood, **prototypes** still power inheritance — and often **composition** is the safer path through the jungle.

## Learning goals

- Trace the **prototype chain** and property lookup.
- Use **`Map`** / **`Set`** when object keys or uniqueness semantics matter.
- Prefer **composition** for mixed capabilities vs deep inheritance trees.

## Instructor Notes

- **Prototype chain**: `[[Prototype]]`, property lookup, shadowing — draw a short diagram on the board.
- **`Object.create` / constructors** vs `class` sugar: what `class` desugars to, and why the exercise stays prototype-only.
- **When inheritance gets deep**: maintenance cost; pivot to composition early.
- **`Map` vs plain objects**: non-string keys, intentional key semantics, frequent add/remove — object string-key rules live in **Module 6 / exercise `01-object-literals`**.
- **`Set`**: uniqueness, deduping IDs or tags — tie to registry exercises.
- **Composition / mixins**: demo `03-composition` (spread only); demo `05-composition-destructuring` (factory args, defaults, nested destructure); tie to exercise `withSwim` / `withFly`.

## Demos

```bash
node module-03-objects-prototypes/demo/01-prototype-chain
node module-03-objects-prototypes/demo/02-maps-and-sets
node module-03-objects-prototypes/demo/03-composition
node module-03-objects-prototypes/demo/05-composition-destructuring
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
