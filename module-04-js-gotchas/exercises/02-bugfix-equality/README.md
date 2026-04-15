# Exercise 02 - Bug Hunt: Equality & typeof

## The scenario

Five more utility functions shipped with bugs — this time caused by JavaScript's equality quirks and the unreliable `typeof` operator. `null` is an `"object"`, arrays are `"object"`, `NaN !== NaN` is `true`, and `0 === -0` even though they're mathematically different.

These aren't obscure trivia — they cause real bugs in type-checking code, validation logic, and comparison functions. You'll fix each one using the right tool for the job.

## How it works

1. **Run the tests** — they will fail.
2. **Read each failure** to understand the expected behaviour.
3. **Fix the bug** in [`starter/equality.js`](starter/equality.js). Each function has exactly one bug.

## The bugs you are hunting

| Function | What it does | The bug |
|---|---|---|
| `isNullish(val)` | Return `true` for `null` or `undefined` | Only checks `=== null` — misses `undefined` |
| `betterTypeof(val)` | Return `"null"` for null, `"array"` for arrays, otherwise `typeof` | Just returns `typeof val`, which gives `"object"` for both null and arrays |
| `isActuallyNaN(val)` | Return `true` only for `NaN` | Uses global `isNaN()` which coerces first — `isNaN("hello")` returns `true` |
| `isArray(val)` | Return `true` for arrays | Uses `typeof val === 'array'` — but `typeof` never returns `"array"` |
| `areSameValue(a, b)` | True same-value comparison | Uses `===` which fails for `NaN === NaN` (false) and `0 === -0` (true) |

## Getting started

Open [`starter/equality.js`](starter/equality.js). Run `starter/index.js` to see the buggy results:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

## Hints

- `val == null` is one of the few good uses of loose equality — it matches both `null` and `undefined` (and nothing else).
- `Array.isArray(val)` is the reliable array check.
- `Number.isNaN(val)` does **not** coerce — unlike the global `isNaN()`.
- `Object.is(a, b)` handles the `NaN`/`-0` edge cases that `===` gets wrong.

## Reference solution

[`solution/equality.js`](solution/equality.js)
