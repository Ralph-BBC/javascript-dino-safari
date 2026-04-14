# Module 4 — JS Gotchas: the Weird Parts That Bite

JavaScript has opinions. Values silently coerce, equality has three flavours, `typeof null` returns `"object"`, and `0.1 + 0.2 !== 0.3`. This module is a guided tour of the traps that catch every team eventually — and the patterns that keep you safe.

## Learning goals

- Predict how `+`, `==`, and `if (…)` behave when types are mixed.
- List the eight falsy values and know why `[]` and `""` surprise people.
- Choose between `||` and `??` for defaults; know when each one bites.
- Use `===` by default, `== null` deliberately, and `Object.is` when you need it.
- Handle `NaN`, `Infinity`, `-0`, and IEEE float weirdness.
- Validate and convert numbers at the boundary — never trust raw input.

## Demos

```bash
node module-04-js-gotchas/demo/01-coercion-traps
node module-04-js-gotchas/demo/02-truthy-falsy
node module-04-js-gotchas/demo/03-number-gotchas
node module-04-js-gotchas/demo/04-edge-cases
```

| # | Demo | What it shows |
|---|------|---------------|
| 1 | Coercion traps | `"5" + 3`, `"5" - 3`, `[] == false`, `Number("")` |
| 2 | Truthy & falsy | The eight falsy values, `if ([])` trap, `!!`, `\|\|` vs `??` |
| 3 | Number gotchas | `0.1 + 0.2`, `NaN === NaN`, `BigInt`, float-to-cents |
| 4 | Edge cases | `typeof null`, `typeof NaN`, `typeof []`, `-0`, `Object.is` |

## Exercises — Bug Hunt

Each exercise is a set of small functions with **subtle bugs** caused by JS gotchas. The tests describe the correct behaviour. Run them, read the failures, and fix the code.

| # | Folder | Theme |
|---|--------|-------|
| 1 | [`exercises/01-bugfix-coercion`](exercises/01-bugfix-coercion/) | Coercion & truthiness: `!val` vs null check, `\|\|` vs `??`, `==` traps |
| 2 | [`exercises/02-bugfix-equality`](exercises/02-bugfix-equality/) | Equality & typeof: `=== null` vs `== null`, `typeof` quirks, `NaN`, `Object.is` |
| 3 | [`exercises/03-bugfix-numbers`](exercises/03-bugfix-numbers/) | Numbers & money: float drift, `parseInt` hazards, `isNaN` vs `Number.isNaN`, `.toFixed` |

```bash
pnpm vitest run module-04-js-gotchas/exercises/
```

## Slides

From repo root: `pnpm slides:04`, or `cd slides && pnpm dev`.
