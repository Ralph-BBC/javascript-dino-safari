# Module 2 — Trainer Notes

## Goal

Students should leave this module comfortable declaring functions in all three forms, using default/rest parameters, and building data pipelines with `filter`, `map`, `reduce`.

## Demo walkthrough

### 01 — Function basics

- Walk through declaration vs expression vs arrow side by side.
- Ask: "What happens if you call a function expression before its `const` declaration?" (TDZ error.)
- Show implicit return with arrows: `(n) => n * 2`. Then show block body when you need multiple statements.
- Default params: call `formatSighting('Compy')` and show the defaults filling in.
- Rest params: show how `...items` collects extras into a real array.
- Functions as values: `applyToEach` is a manual `map` — use it to motivate demo 02.

### 02 — Pipelines

- Run the demo — it reads `data/dinosaurs.json` and builds a carnivore pressure summary.
- Walk through the chain: filter → map → reduce. Ask: "What does each step produce?"
- Emphasise: each method returns a **new** array (or value). No mutation.
- Show `reduce` step by step — accumulator starts as `{}`, each iteration adds a key.
- For groups struggling with `reduce`: draw the accumulator state on a whiteboard after each iteration.

## Exercises

| # | Folder | Key skills | Notes |
|---|--------|-----------|-------|
| 1 | `01-map-filter-reduce` | `filter`, `map`, `reduce`, composition | Students build `filterHighRiskZones`, `toLogLines`, `countByZone`, then compose them into `buildMigrationReport`. |

## Timing

- Demo 01 (function basics): ~20 min.
- Demo 02 (pipelines): ~15 min.
- Exercise: ~20–30 min.
- Total: ~1 hour.

## Common issues

- **Arrow vs block body**: students forget `return` inside `{ }`. `(x) => { x * 2 }` returns `undefined`.
- **`reduce` accumulator**: forgetting to return `acc` from the callback. The next iteration gets `undefined`.
- **Empty array edge case**: `reduce` on an empty array with no initial value throws. Always pass an initial value.
