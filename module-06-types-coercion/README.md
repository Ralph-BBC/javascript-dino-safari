# Module 6 — Types, Coercion, and “Weird JS” You Need to Know

**Sensor glitches** are indistinguishable from real pings until you understand **coercion**, **NaN**, and **equality** edge cases. This module keeps the herd safe from false alarms.

## Learning goals

- See how **object literals** and **bracket notation** coerce keys to **strings** (plain objects as associative maps).
- Choose `===` vs `==` deliberately; know when `Object.is` matters.
- Handle **numbers**, **NaN**, **BigInt**, and **money** safely.
- Reason about **truthiness** and `null` vs `undefined`.

## Instructor Notes

- **Object keys & coercion**: exercise `01-object-literals` — bracket notation and `String` keys; contrast with `Map` when you need non-string keys (Module 3 demos).
- **Coercion in practice**: string/number/boolean contexts; when `==` surprises teams vs when `===` is the default rule.
- **`Object.is`**: `NaN`, `-0`, and when it differs from `===`.
- **Numbers**: `Number()`, `parseInt` / `parseFloat`, `isFinite`, `Number.isNaN` vs global `isNaN`.
- **`BigInt`**: when integers overflow safe integer range (brief); interop caution with `Number`.
- **Money**: floating-point hazards; **integer minor units** (cents) as the pattern in `03-ticket-cents`.
- **Truthiness**: `0`, `''`, `[]` gotchas in conditionals; explicit checks for public APIs.
- **`null` vs `undefined`**: convention for “missing” vs “not set”; validating external input (sensors, JSON).

## Demos

```bash
node module-06-types-coercion/demo/01-coercion-traps
node module-06-types-coercion/demo/02-number-gotchas
node module-06-types-coercion/demo/03-edge-cases
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-object-literals`](exercises/01-object-literals/) | Object literals, string keys, bracket coercion, associative maps. |
| [`exercises/02-sensor-validator`](exercises/02-sensor-validator/) | Normalize messy sensor readings. |
| [`exercises/03-ticket-cents`](exercises/03-ticket-cents/) | Money math in integer cents. |
| [`exercises/04-equality-audit`](exercises/04-equality-audit/) | Predict and implement comparison helpers. |

```bash
pnpm vitest run module-06-types-coercion/exercises/
```

## Slides

From repo root: `pnpm slides:06`, or `cd slides && pnpm dev`.
