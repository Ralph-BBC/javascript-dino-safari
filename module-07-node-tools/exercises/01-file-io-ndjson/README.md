# Exercise 01 - Sighting logger (filesystem)

## The scenario

Every time a ranger spots a dinosaur, the sighting needs to be persisted to disk so nothing is lost if the system restarts. The park uses **NDJSON** (Newline-Delimited JSON) — one JSON object per line — because it's append-friendly, easy to parse, and works well with streaming.

You'll build two functions using Node's `fs/promises` module: one to append a record to the file, and one to read all records back.

## What you will build

Both functions live in [`starter/sightings-io.js`](starter/sightings-io.js).

### `appendSighting(filePath, record)`

Append `JSON.stringify(record) + '\n'` to the file at `filePath`. If the parent directory doesn't exist, create it (using `mkdir` with `{ recursive: true }`).

```js
await appendSighting('data/sightings.ndjson', { id: '1', species: 'T-Rex', zone: 'CV' });
// File now contains: {"id":"1","species":"T-Rex","zone":"CV"}\n
```

### `readSightings(filePath)`

Read the file as UTF-8, split on newlines, filter out empty lines, and `JSON.parse` each remaining line. Return an array of objects.

```js
const sightings = await readSightings('data/sightings.ndjson');
// [{ id: '1', species: 'T-Rex', zone: 'CV' }]
```

## Getting started

Open [`starter/sightings-io.js`](starter/sightings-io.js). Replace the stubs. Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The tests write to a temp directory, append multiple records, read them back, and verify the roundtrip produces the same data. They also test that nested directories are created automatically.

## Hints

- Import from `node:fs/promises`: `appendFile`, `readFile`, `mkdir`.
- Import `path` from `node:path` for `path.dirname(filePath)`.
- `await mkdir(path.dirname(filePath), { recursive: true })` creates any missing parent directories.
- `raw.split('\n').filter(Boolean)` removes empty trailing lines after the split.

## Reference solution

[`solution/sightings-io.js`](solution/sightings-io.js)
