# Bug Hunt: Coercion & Truthiness

**Mission briefing:** Six utility functions shipped with subtle coercion and truthiness bugs. The tests describe the correct behaviour — run them, read the failures, and fix each function.

## How it works

1. Run the tests — they will fail.
2. Read each failure message to understand the expected vs actual behaviour.
3. Fix the bug in `start.js`. Each function has exactly one bug.

## The bugs you are hunting

| Function | Symptom |
| -------- | ------- |
| `isUsableReading` | Rejects `0` even though zero is a valid sensor reading |
| `getZoneName` | Replaces `""` with `"Unknown"` — empty string is a valid zone name |
| `addReadings` | Concatenates strings instead of adding numbers |
| `countTruthy` | Miscounts because of loose equality with `true` |
| `hasItems` | Thinks an empty array has items (or vice versa) |
| `getTimeout` | Ignores a timeout of `0` |

## Verify

```bash
pnpm vitest run module-04-js-gotchas/exercises/01-bugfix-coercion/start.test.js
```

Reference: [`solution.js`](solution.js).
