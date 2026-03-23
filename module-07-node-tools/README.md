# Module 7 — Node.js Tools: Files, HTTP, Streams

**Park Operations** runs on logs, JSON APIs, and **streams** for multi-gigabyte telemetry dumps. Node’s standard library is your utility belt.

## Learning goals

- Read/write files with **`fs/promises`**, build paths with **`path`**, read **`process.env`** safely.
- Stand up a tiny **`http.createServer`** JSON API with sane status codes.
- **Pipe** streams and respect **backpressure** intuition (large files).

## Demos

```bash
node module-07-node-tools/demo/01-filesystem.js
node module-07-node-tools/demo/02-http-server.js
node module-07-node-tools/demo/03-streams.js
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
