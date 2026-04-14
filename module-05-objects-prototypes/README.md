# Module 5 — Objects & Prototypes: How JavaScript Really Does OOP

**The Dinosaur Registry** went live before `class` was cool. Under the hood, **prototypes** still power inheritance — and often **composition** is the safer path through the jungle.

## Learning goals

- Trace the **prototype chain** and property lookup.
- Use **`class`** syntax as sugar over prototypes — `extends`, `super`, getters, statics.
- Use **`Map`** / **`Set`** when object keys or uniqueness semantics matter.
- Prefer **composition** for mixed capabilities vs deep inheritance trees.

## Instructor Notes

- **Prototype chain**: `[[Prototype]]`, property lookup, shadowing — draw a short diagram on the board.
- **`class` syntax (demo 02)**: same `Dinosaur`/`FlyingDinosaur` hierarchy from demo 01 rewritten with `class`, `extends`, `super()`, getters, private fields (`#`), and static methods. Point out that `typeof Dinosaur` is still `"function"`.
- **`Object.create` / constructors** vs `class` sugar: what `class` desugars to, and why exercise 01 stays prototype-only (to cement the mental model).
- **When inheritance gets deep**: maintenance cost; pivot to composition early.
- **`Map` vs plain objects**: non-string keys, intentional key semantics, frequent add/remove — object string-key rules live in **Module 6 / exercise `01-object-literals`**.
- **`Set`**: uniqueness, deduping IDs or tags — tie to registry exercises.
- **Composition / mixins**: demo `04-composition` (spread only); demo `05-composition-destructuring` (factory args, defaults, nested destructure); tie to exercise `withSwim` / `withFly`.

## Demos

```bash
node module-05-objects-prototypes/demo/01-prototype-chain
node module-05-objects-prototypes/demo/02-classes
node module-05-objects-prototypes/demo/03-maps-and-sets
node module-05-objects-prototypes/demo/04-composition
node module-05-objects-prototypes/demo/05-composition-destructuring
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-prototypes`](exercises/01-prototypes/) | Prototypal `Dinosaur` / `FlyingDinosaur` (no `class`). |
| [`exercises/02-map-and-set`](exercises/02-map-and-set/) | `DinoRegistry` with `Map` + `Set`. |
| [`exercises/03-mixin-composition`](exercises/03-mixin-composition/) | Capability mixins instead of subclasses. |

```bash
pnpm vitest run module-05-objects-prototypes/exercises/
```

## Slides

From repo root: `pnpm slides:05`, or `cd slides && pnpm dev`.
