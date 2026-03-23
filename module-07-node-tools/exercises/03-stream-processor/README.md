# Exercise — Stream dangerous sightings from CSV

**Mission briefing:** Large CSV exports should be processed as a **stream** so memory stays flat. Parse our simple `trackingId,dangerLevel,zone` format and keep rows where `dangerLevel >= minDanger`.

## Tasks

Implement `streamFilterDangerous(filePath, minDanger)` in [`start.js`](start.js):

- Use **`fs.createReadStream`** plus **`readline.createInterface`** (or a `Transform` stream if you prefer).
- Skip the header row.
- For each data row, parse integers safely; emit objects `{ trackingId, dangerLevel, zone }`.
- Return a **Promise** resolving to the **array** of matching rows (tests keep I/O small).

## Verify

```bash
pnpm vitest run module-07-node-tools/exercises/03-stream-processor/start.test.js
```

Reference: [`solution.js`](solution.js).
