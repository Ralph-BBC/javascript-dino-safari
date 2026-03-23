# Exercise — Sighting logger (filesystem)

**Mission briefing:** Persist sightings as **NDJSON** (one JSON object per line) under a file path you control.

## Tasks

Implement in [`start.js`](start.js):

1. **`appendSighting(filePath, record)`** — append `JSON.stringify(record) + '\n'` using **`fs/promises`** (`appendFile`). Create parent directories if needed (`mkdir` with `{ recursive: true }`).
2. **`readSightings(filePath)`** — read the file as UTF-8, split on newlines, filter empties, `JSON.parse` each line, return an array of objects.

## Verify

```bash
pnpm vitest run module-07-node-tools/exercises/01-sighting-logger/start.test.js
```

Reference: [`solution.js`](solution.js).
