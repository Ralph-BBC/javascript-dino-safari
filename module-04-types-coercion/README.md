# Module 4 — Types, Coercion, and “Weird JS” You Need to Know

**Sensor glitches** are indistinguishable from real pings until you understand **coercion**, **NaN**, and **equality** edge cases. This module keeps the herd safe from false alarms.

## Learning goals

- Choose `===` vs `==` deliberately; know when `Object.is` matters.
- Handle **numbers**, **NaN**, **BigInt**, and **money** safely.
- Reason about **truthiness** and `null` vs `undefined`.

## Demos

```bash
node module-04-types-coercion/demo/01-coercion-traps.js
node module-04-types-coercion/demo/02-number-gotchas.js
node module-04-types-coercion/demo/03-edge-cases.js
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-sensor-validator`](exercises/01-sensor-validator/) | Normalize messy sensor readings. |
| [`exercises/02-ticket-cents`](exercises/02-ticket-cents/) | Money math in integer cents. |
| [`exercises/03-equality-audit`](exercises/03-equality-audit/) | Predict and implement comparison helpers. |

```bash
pnpm vitest run module-04-types-coercion/exercises/
```

## Slides

From repo root: `pnpm slides:04`, or `cd slides && pnpm dev`.
