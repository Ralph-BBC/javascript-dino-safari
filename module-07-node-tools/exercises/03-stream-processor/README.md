# Exercise 03 - Stream dangerous sightings from CSV

## The scenario

Field teams export sighting data as CSV files that can grow to hundreds of megabytes. Loading the entire file into memory with `readFile` would spike the process and risk an out-of-memory crash. Instead, the park's tooling reads CSV data as a **stream** — processing one line at a time so memory stays flat regardless of file size.

You'll build a stream-based CSV filter that reads a `trackingId,dangerLevel,zone` file line by line, skips the header, parses each row, and collects only the rows above a danger threshold.

## What you will build

### `streamFilterDangerous(filePath, minDanger)` — in [`starter/stream-filter.js`](starter/stream-filter.js)

- Use `fs.createReadStream` plus `readline.createInterface` to read the file line by line.
- **Skip the first line** (the CSV header).
- For each data row, split on commas, parse `dangerLevel` as an integer, and keep rows where `dangerLevel >= minDanger`.
- Return a **Promise** that resolves to an array of matching objects:

```js
[
  { trackingId: 'TRX-001', dangerLevel: 5, zone: 'Cretaceous Valley' },
  { trackingId: 'VLR-042', dangerLevel: 4, zone: 'Raptor Ridge' },
]
```

The test fixture CSV looks like:

```
trackingId,dangerLevel,zone
TRX-001,5,Cretaceous Valley
BNT-003,2,Herbivore Plains
VLR-042,4,Raptor Ridge
```

## Getting started

Open [`starter/stream-filter.js`](starter/stream-filter.js). Replace the stub. There's a `fixture.csv` in the starter directory for testing. Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The test reads the fixture with `minDanger: 4` and expects exactly two rows.

## Hints

- `readline.createInterface({ input: createReadStream(filePath) })` gives you an async iterable of lines.
- Use `for await (const line of rl)` to process each line.
- Skip the first line with a boolean flag.
- `const [trackingId, dangerRaw, zone] = line.split(',')` destructures each CSV row.
- `Number(dangerRaw)` converts the string; check `Number.isFinite()` to reject garbage.

## Reference solution

[`solution/stream-filter.js`](solution/stream-filter.js)
