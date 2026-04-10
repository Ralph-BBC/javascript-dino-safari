# Module 2 — Functions Deep Dive: Scope, Closures, `this`, and Modules

**Ranger stations** each keep their own logbooks, but supply crates are shared from Base Camp. This module maps that to **lexical scope**, **closures**, **factories**, **`this`** rules, and **ESM** boundaries.

## Learning goals

- Predict **lexical scope** and what closures capture.
- Build **factories** with private state (WeakMap or closures).
- Use **partial application** for configurable loggers/alerts.
- Know when **`this`** is lost (callbacks) and fix with arrows, wrappers, or `bind`.
- Design **clean module APIs** with named vs default exports.

## Instructor Notes

- **Lexical scope**: blocks, functions, and what inner functions “see” — contrast with no block scope in `var` if the room needs the history.
- **Closures**: captured variables, factories, and why each closure instance has its own state (link to zone tracker / ranger logbook metaphor).
- **Private state**: closure-held fields vs `WeakMap` (mention as alternative; exercises use closures).
- **Partial application**: fixing the first arguments of a function, relation to currying (light — avoid FP rabbit hole unless asked).
- **`this` rules**: method call vs bare function vs callback; where `this` is `undefined` (strict) or the global object (legacy).
- **Fixing `this`**: arrow functions, lexical `self`, `.bind`, wrapping in a method — trade-offs for readability and testability.
- **ESM API design**: named vs default exports, keeping module surfaces small and intention-revealing (demo `03-module-design`).

## Demos

```bash
node module-02-functions/demo/01-closures
node module-02-functions/demo/02-this-rules
node module-02-functions/demo/03-module-design
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-zone-tracker-factory`](exercises/01-zone-tracker-factory/) | Private sightings via a factory closure. |
| [`exercises/02-partial-application`](exercises/02-partial-application/) | Pre-configured alert loggers. |
| [`exercises/03-fix-this-bugs`](exercises/03-fix-this-bugs/) | Repair `SafariTour` callback bugs. |

```bash
pnpm vitest run module-02-functions/exercises/
```

## Slides

From repo root: `pnpm slides:02`, or `cd slides && pnpm dev`.
