# Module 7 — Node.js Tools: Files, HTTP, Streams

**Park Operations** runs on logs, JSON APIs, and **streams** for multi-gigabyte telemetry dumps. Node’s standard library is your utility belt.

## Learning goals

- Read/write files with **`fs/promises`**, build paths with **`path`**, read **`process.env`** safely.
- Stand up a tiny **`http.createServer`** JSON API with sane status codes.
- **Pipe** streams and respect **backpressure** intuition (large files).

## Instructor Notes

- **`fs/promises`**: read/write/append; `mkdir({ recursive: true })` for log dirs — match exercise 1.
- **`path`**: `join` vs string concat; Windows vs POSIX (Node normalizes).
- **`process.env`**: configuration from the environment; never commit secrets; defaults for local dev.
- **`process.argv`**: optional CLI patterns if you extend the demos.
- **`http.createServer`**: method/path routing, status codes, `Content-Type: application/json`, parsing `req` bodies safely.
- **Errors on the wire**: malformed JSON, 404 vs 400 vs 500 — tie to dino API exercise.
- **Streams**: readable/writable/transform; why whole-file reads break at scale.
- **`readline` vs transform streams**: line-based CSV/NDJSON processing (exercise 3).
- **Backpressure**: `pipe` and “slow consumer” intuition; don’t load multi-GB files into a string.

## Demos

```bash
node module-07-node-tools/demo/01-filesystem
node module-07-node-tools/demo/02-http-server
node module-07-node-tools/demo/03-streams
```

Press `Ctrl+C` to stop the HTTP demo if it keeps running (or run with a short timeout in class).

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-sighting-logger`](exercises/01-sighting-logger/) | Append + read NDJSON logs. |
| [`exercises/02-dino-api`](exercises/02-dino-api/) | Minimal HTTP JSON server. |
| [`exercises/03-stream-processor`](exercises/03-stream-processor/) | Transform stream over CSV. |

```bash
pnpm vitest run module-07-node-tools/exercises/
```

## Slides

From repo root: `pnpm slides:07`, or `cd slides && pnpm dev`.
