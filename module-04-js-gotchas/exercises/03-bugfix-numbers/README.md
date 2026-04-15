# Exercise 03 - Bug Hunt: Numbers & Money

## The scenario

Five utility functions for the park's financial and sensor systems have number-handling bugs. IEEE 754 floating point makes `0.1 + 0.2 !== 0.3`, `parseInt` silently ignores trailing garbage, the global `isNaN` lies about strings, division by zero produces `Infinity` instead of an error, and `.toFixed()` returns a string that looks like a number but concatenates instead of adding.

These bugs are responsible for more production incidents than most people realise. You'll fix each one using the correct numeric tools.

## How it works

1. **Run the tests** — they will fail.
2. **Read each failure** to understand the expected behaviour.
3. **Fix the bug** in [`starter/numbers.js`](starter/numbers.js). Each function has exactly one bug.

## The bugs you are hunting

| Function | What it does | The bug |
|---|---|---|
| `totalPriceCents(prices)` | Sum an array of dollar prices and return the total in cents | Sums dollars first then converts — accumulates IEEE float errors. Should convert each price to cents first |
| `parseAge(input)` | Parse a string to an integer age, return `null` for invalid input | `parseInt("12abc")` returns `12` — should reject strings that aren't purely numeric |
| `isStrictlyNaN(val)` | Return `true` only for `NaN` | Uses global `isNaN()` which coerces — `isNaN(undefined)` and `isNaN("hello")` wrongly return `true` |
| `safeDivide(a, b)` | Divide `a` by `b`, return `null` if `b` is zero | Returns `Infinity` or `NaN` on division by zero instead of `null` |
| `roundTo2(n)` | Round to 2 decimal places and return a **number** | `.toFixed(2)` returns a string — arithmetic on the result silently concatenates |

## Getting started

Open [`starter/numbers.js`](starter/numbers.js). Run `starter/index.js` to see the broken output:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

## Hints

- For money: work in cents (integers) to avoid float precision issues. `Math.round(price * 100)` converts each dollar amount to cents safely.
- `Number(input)` is stricter than `parseInt` — `Number("12abc")` gives `NaN`.
- `Number.isNaN(val)` is the non-coercing version of `isNaN()`.
- Check `b === 0` before dividing.
- Wrap `.toFixed(2)` in `Number(...)` or use `parseFloat(...)` to get back to a number.

## Reference solution

[`solution/numbers.js`](solution/numbers.js)
