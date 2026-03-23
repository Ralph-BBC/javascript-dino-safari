# Exercise — Partial application: alert channel

**Mission briefing:** The control room uses the same logger shape everywhere, but **severity** should be baked in once.

## Tasks

Implement `createAlertFn(severity)` in [`start.js`](start.js).

- Returns a function `alert(message: string)` that **returns** a string (does not need to `console.log`).
- Format: `[SEVERITY] message` (uppercase severity in brackets).
- `severity` may be any string (e.g. `INFO`, `WARN`, `CRITICAL`).

Also implement `createTaggedLogger(tag, baseAlertFn)`:

- Returns `log(message)` where output is `${tag}: ${baseAlertFn(message)}`.

## Verify

```bash
pnpm vitest run module-02-functions/exercises/02-partial-application/start.test.js
```

Reference: [`solution.js`](solution.js).
