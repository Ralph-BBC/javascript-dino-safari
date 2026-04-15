# Exercise 01 - Bug Hunt: Coercion & Truthiness

## The scenario

A previous developer shipped six utility functions for the park's sensor system. They all *look* correct at first glance, but each one hides a subtle bug caused by JavaScript's automatic type coercion or its unusual truthiness rules. Zero gets rejected as "not a reading", empty strings vanish when they shouldn't, and string numbers get concatenated instead of added.

These are the exact bugs that slip through code review and surface at 2 a.m. when the fence sensors report nonsense. Your job is to find and fix each one.

## How it works

1. **Run the tests** — they will fail.
2. **Read each failure message** to understand what the test expects vs what the code actually does.
3. **Fix the bug** in [`starter/coercion.js`](starter/coercion.js). Each function has exactly one bug.

## The bugs you are hunting

| Function | What it does | The bug |
|---|---|---|
| `isUsableReading(reading)` | Accept any value except `null`/`undefined` | Rejects `0` because `!0` is `true` |
| `getZoneName(zone)` | Return the zone, or `'Unknown'` for `null`/`undefined` | Replaces `""` with `'Unknown'` because `"" \|\| 'Unknown'` treats empty string as falsy |
| `addReadings(a, b)` | Add two numeric readings (sometimes passed as strings from CSV) | Concatenates `"5" + "3"` → `"53"` instead of adding |
| `countTruthy(flags)` | Count truthy values in a mixed array | Uses `== true` (loose equality), which miscounts `1` and `"yes"` |
| `hasItems(arr)` | Return `true` if the array has elements | Uses `== false`, and `[] == false` is `true` in JavaScript |
| `getTimeout(config)` | Return `config.timeout`, defaulting to `5000` | Uses `\|\|` which treats `0` as falsy — a timeout of `0` gets replaced |

## Getting started

Open [`starter/coercion.js`](starter/coercion.js). Run `starter/index.js` first to see the buggy output, then look at the tests to understand the expected behaviour:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

## Hints

- `??` (nullish coalescing) only triggers on `null`/`undefined` — unlike `||` which triggers on any falsy value.
- `Number(x)` converts a string to a number explicitly.
- `if (flag)` is the idiomatic truthiness check — `== true` has surprising loose-equality behaviour.
- `arr.length > 0` is the reliable way to check if an array has items.

## Reference solution

[`solution/coercion.js`](solution/coercion.js)
