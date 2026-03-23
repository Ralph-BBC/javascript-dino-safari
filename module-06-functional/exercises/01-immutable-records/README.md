# Exercise — Immutable dino records

**Mission briefing:** Incident reports must never mutate archived records. Refactor mutating helpers to return **new objects** (nested fields included).

## Tasks

Edit [`start.js`](start.js):

1. **`bumpDangerLevel(dino, delta)`** — return a **new** dino object with `dangerLevel` increased by `delta`. Do **not** change `dino`.
2. **`renameZone(dino, newZone)`** — return a new object with `zone: newZone`, same other fields.

Assume `dino` is a plain data object like `{ name, zone, dangerLevel, tags: string[] }`.

## Verify

```bash
pnpm vitest run module-06-functional/exercises/01-immutable-records/start.test.js
```

Reference: [`solution.js`](solution.js).
