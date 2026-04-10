# Dinosaur Safari: JavaScript with Node

```
                    __
                   / _)
        _.----._/ /
       /         /
    __/ (  | (  |
   /__.-'|_|--|_|
   🦖 Welcome to Jurassic Node.js 🦕
```

**Mission:** Build rock-solid JavaScript skills while running everything in **Node.js** — from modern syntax and tooling to async patterns, streams, and scalable project structure. HQ has opened the park gates for two intensive days of hands-on tracking.

## Prerequisites

- **Node.js** v20 or newer (`node -v`)
- **pnpm** v10 or newer (`pnpm -v`) — install with `corepack enable && corepack prepare pnpm@latest --activate`
- A code editor (VS Code / Cursor recommended)
- Terminal comfort (`cd`, `pnpm`)

## Setup

```bash
cd javascript-with-node-course
pnpm install
pnpm test          # run all exercise tests (Vitest — many fail until you complete start.js)
pnpm lint          # ESLint
pnpm format        # Prettier
```

This project is a **pnpm monorepo** — each module is its own workspace package under `module-*/`. All shared tooling (Vitest, ESLint, Prettier) lives at the root.

Each **module** has its own `README.md`, **demo** scripts you can run with `node …`, and **exercises** with `start.js` (your work), `start.test.js` (Vitest), and `solution.js` (instructor reference — try the exercise first!).

Shared park data lives in [`data/dinosaurs.json`](data/dinosaurs.json).

## Slides (React + `slide-deck`)

Each module includes a Vite app under `slides/` that renders teaching decks with the workspace package [`slide-deck`](slide-deck/).

```bash
pnpm slides:01          # same pattern :02 … :08
# or
cd module-01-modern-javascript/slides && pnpm dev
```

Build for static hosting: `pnpm --filter @dino-safari/module-01-slides build` (output in `slides/dist/`).

## Schedule

### Day 1 — Foundations of the park

| Block | Module                                                        | Topic                                            |
| ----- | ------------------------------------------------------------- | ------------------------------------------------ |
| 1     | [module-01-modern-javascript](module-01-modern-javascript/)   | Modern JS: ESM, tooling, Vitest, lint, debugging |
| 2     | [module-02-functions](module-02-functions/)                   | Functions: scope, closures, `this`, modules      |
| 3     | [module-03-objects-prototypes](module-03-objects-prototypes/) | Objects & prototypes, Maps/Sets, composition     |
| 4     | [module-04-functional](module-04-functional/)                 | Immutability, composition, practical FP          |

### Day 2 — Operations & scale

| Block | Module                                                      | Topic                                            |
| ----- | ----------------------------------------------------------- | ------------------------------------------------ |
| 5     | [module-05-async](module-05-async/)                         | Promises, async/await, concurrency, event loop   |
| 6     | [module-06-types-coercion](module-06-types-coercion/)       | Types, coercion, numbers, edge cases             |
| 7     | [module-07-node-tools](module-07-node-tools/)               | Files, HTTP, streams                             |
| 8     | [module-08-code-organisation](module-08-code-organisation/) | Structure, APIs between modules, errors & config |

## Course outline

All **exercises** run in **Node.js** and are checked with **Vitest** (`start.js` / `start.test.js`). **Demos** are plain `node …` scripts. Optional **slides** under each module’s `slides/` folder are separate Vite + React apps for teaching only.

### Module 1 — [Modern JavaScript](module-01-modern-javascript/)

**Topics:** ESM in Node (`import` / `export`, `"type": "module"`), `package.json` scripts, Vitest, ESLint/Prettier, modern syntax (destructuring, spread/rest, optional chaining, nullish coalescing, template literals), debugging with `node --inspect`.

**Demos:** Variables, loops, `console.log`; ESM workflow with shared data; modern syntax on telemetry objects; intentional bug for stepping through.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Package scripts | [`exercises/01-package-scripts`](module-01-modern-javascript/exercises/01-package-scripts/) | `start`, `lint`, `test` scripts; wiring Node and Vitest from `package.json` |
| Modern syntax refactor | [`exercises/02-modern-syntax`](module-01-modern-javascript/exercises/02-modern-syntax/) | Refactor to `?.`, `??`, destructuring, templates, immutable merge with spread |
| First Vitest test | [`exercises/03-vitest-first-test`](module-01-modern-javascript/exercises/03-vitest-first-test/) | Implement `formatSighting`; contract-driven formatting and nullish defaults |

### Module 2 — [Functions deep dive](module-02-functions/)

**Topics:** Lexical scope, closures, factories and private state, partial application, `this` (methods vs callbacks), arrow vs `function`, `.bind`, ESM module boundaries.

**Demos:** Zone tracker factory; `Ranger` and `this` pitfalls; small registry module facade.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Zone tracker factory | [`exercises/01-zone-tracker-factory`](module-02-functions/exercises/01-zone-tracker-factory/) | Closure-held private state; `getSightings` returns a copy |
| Partial application | [`exercises/02-partial-application`](module-02-functions/exercises/02-partial-application/) | `createAlertFn`, `createTaggedLogger`; higher-order functions |
| Fix the `this` bugs | [`exercises/03-fix-this-bugs`](module-02-functions/exercises/03-fix-this-bugs/) | `setTimeout` and detached methods; `SafariTour` context |

### Module 3 — [Objects & prototypes](module-03-objects-prototypes/)

**Topics:** Prototype chain, property lookup, constructors vs `class` sugar, `Map` / `Set`, composition vs deep inheritance.

**Demos:** Prototype chain with constructors; zone registry with Map/Set; simple capability composition; composition with destructuring.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Prototype safari | [`exercises/01-prototype-safari`](module-03-objects-prototypes/exercises/01-prototype-safari/) | `Dinosaur` / `FlyingDinosaur` with prototypes only (no `class`) |
| Registry Map/Set | [`exercises/02-registry-map-set`](module-03-objects-prototypes/exercises/02-registry-map-set/) | `createDinoRegistry`: add, get, findByZone, sorted unique species |
| Compose a dinosaur | [`exercises/03-compose-dinosaur`](module-03-objects-prototypes/exercises/03-compose-dinosaur/) | Mixins `withSwim` / `withFly` / `withArmor`; spread, no mutation |

### Module 4 — [Functional patterns](module-04-functional/)

**Topics:** Immutability (spread, `structuredClone`), `map` / `filter` / `reduce`, pipelines, pure functions, currying, memoization, side-effect boundaries.

**Demos:** Shallow vs deep copy; carnivore pipeline over JSON data; memoization demo.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Immutable records | [`exercises/01-immutable-records`](module-04-functional/exercises/01-immutable-records/) | `bumpDangerLevel`, `renameZone` without mutating inputs |
| Migration pipeline | [`exercises/02-migration-pipeline`](module-04-functional/exercises/02-migration-pipeline/) | Filter high-risk events, log lines, counts, composed `buildMigrationReport` |
| Memoized tracker | [`exercises/03-memoized-tracker`](module-04-functional/exercises/03-memoized-tracker/) | Generic `memoize`; `makeRoutePreview` with call counting |

### Module 5 — [Async JavaScript](module-05-async/)

**Topics:** Promises (chain, errors), `async` / `await`, `Promise.all` / `allSettled` / `race`, timeouts and retries, `AbortController`, event loop intuition, unhandled rejections.

**Demos:** Chained delays; concurrency + race + abort sketch; ordering of timers vs microtasks.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Sighting fetcher | [`exercises/01-sighting-fetcher`](module-05-async/exercises/01-sighting-fetcher/) | `withTimeout`, `runWithRetry` |
| Batch sensors | [`exercises/02-batch-sensors`](module-05-async/exercises/02-batch-sensors/) | `Promise.allSettled` with uniform fulfilled/rejected summary |
| Cancellable search | [`exercises/03-cancellable-search`](module-05-async/exercises/03-cancellable-search/) | `createCancellableTask` with `AbortController` |

### Module 6 — [Types & coercion](module-06-types-coercion/)

**Topics:** Object literals and string property keys (bracket coercion), primitives vs objects, truthiness, `==` vs `===`, coercion traps, `Number` / `NaN` / `BigInt`, float vs money, `Object.is`, `null` vs `undefined`.

**Demos:** Coercion surprises; numeric gotchas; `-0`, `typeof null`, `NaN`.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Object literals | [`exercises/01-object-literals`](module-06-types-coercion/exercises/01-object-literals/) | String keys, bracket coercion, associative maps, `for...in` |
| Sensor validator | [`exercises/02-sensor-validator`](module-06-types-coercion/exercises/02-sensor-validator/) | `validateReading`: finite numbers vs `null` for bad input |
| Ticket cents | [`exercises/03-ticket-cents`](module-06-types-coercion/exercises/03-ticket-cents/) | `dollarsToCents`, `sumTicketPricesCents`; integer money |
| Equality audit | [`exercises/04-equality-audit`](module-06-types-coercion/exercises/04-equality-audit/) | `compareEquality`: loose, strict, `Object.is` |

### Module 7 — [Node.js tools](module-07-node-tools/)

**Topics:** `fs/promises`, `path`, `process.env` / `argv`, `http.createServer`, JSON request/response patterns, streams, `readline`, piping, backpressure intuition.

**Demos:** Scratch logs; small HTTP JSON server; streaming CSV through a transform.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Sighting logger | [`exercises/01-sighting-logger`](module-07-node-tools/exercises/01-sighting-logger/) | Append/read NDJSON; `mkdir` recursive |
| Dino API | [`exercises/02-dino-api`](module-07-node-tools/exercises/02-dino-api/) | `createDinoApiServer`: health, list, get by id, 404 JSON |
| Stream processor | [`exercises/03-stream-processor`](module-07-node-tools/exercises/03-stream-processor/) | Stream or readline over CSV; filter by danger level |

### Module 8 — [Code organisation](module-08-code-organisation/)

**Topics:** Feature vs layered layout, module contracts, dependency direction, custom errors, env-based config, logging shape.

**Demos:** Project structure patterns; module contracts and dependency direction; centralized error handling for config.

| Exercise | Folder | What you practice |
| -------- | ------ | ----------------- |
| Refactor spaghetti | [`exercises/01-refactor-spaghetti`](module-08-code-organisation/exercises/01-refactor-spaghetti/) | Split `compileDigest` from monolith into focused modules; keep tests green |
| Error & config | [`exercises/02-error-config`](module-08-code-organisation/exercises/02-error-config/) | `AppError`, `loadConfig`, `formatLogLine` |

## Running tests for a single module

```bash
pnpm --filter @dino-safari/module-01-modern-javascript test
```

Or from within a module directory:

```bash
cd module-01-modern-javascript
pnpm test
```

Or target a single exercise from the root:

```bash
pnpm vitest run module-01-modern-javascript/exercises/03-vitest-first-test/start.test.js
```

## Workspace commands

```bash
pnpm -r test                    # run test script in every module
pnpm --filter "module-*" test   # same, by glob
```

## Debugging demos

Use the Node inspector on any demo or exercise:

```bash
node --inspect module-01-modern-javascript/demo/06-debugging
```

Then attach your debugger (Chrome: `chrome://inspect`).

## License

Copyright (c) 2026 Nicholas Johnson. **All rights reserved.** This material is not licensed for use, copying, or distribution by others. See [LICENSE](LICENSE).
