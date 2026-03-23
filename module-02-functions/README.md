# Module 2 — Functions Deep Dive: Scope, Closures, `this`, and Modules

**Ranger stations** each keep their own logbooks, but supply crates are shared from Base Camp. This module maps that to **lexical scope**, **closures**, **factories**, **`this`** rules, and **ESM** boundaries.

## Learning goals

- Predict **lexical scope** and what closures capture.
- Build **factories** with private state (WeakMap or closures).
- Use **partial application** for configurable loggers/alerts.
- Know when **`this`** is lost (callbacks) and fix with arrows, wrappers, or `bind`.
- Design **clean module APIs** with named vs default exports.

## Demos

```bash
node module-02-functions/demo/01-closures.js
node module-02-functions/demo/02-this-rules.js
node module-02-functions/demo/03-module-design.js
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
