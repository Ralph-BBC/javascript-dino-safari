# Exercise 02 - Minimal Dino HTTP API

## The scenario

The park needs a read-only API so the mobile ranger app can query dinosaur data. No frameworks — just Node's built-in `http` module. You'll build a tiny server factory that accepts a list of dinosaurs and exposes them over three routes, all returning JSON.

The factory returns an `http.Server` instance but does **not** call `.listen()` — the tests bind their own port so they can run in parallel without conflicts.

## What you will build

### `createDinoApiServer({ dinosaurs })` — in [`starter/server.js`](starter/server.js)

Returns an `http.Server` with the following routes:

| Method | Path | Response |
|---|---|---|
| GET | `/health` | **200** — `{ "ok": true }` |
| GET | `/dinosaurs` | **200** — JSON array of all dinosaurs |
| GET | `/dinosaurs/<trackingId>` | **200** — single dinosaur record if found |
| GET | `/dinosaurs/<trackingId>` | **404** — `{ "error": "not_found" }` if no match |
| *anything else* | *any path* | **404** — `{ "error": "not_found" }` |

All responses must have `Content-Type: application/json`.

Each dinosaur has at least a `trackingId` property used for the detail lookup.

```js
const dinosaurs = [
  { trackingId: 'TRX-001', name: 'Rexy', species: 'T-Rex' },
  { trackingId: 'VLR-042', name: 'Blue', species: 'Velociraptor' },
];
const server = createDinoApiServer({ dinosaurs });
```

## Getting started

Open [`starter/server.js`](starter/server.js). The stub returns a server that responds 500 to everything — replace the handler. Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The test starts the server on a random port, hits all four route cases, and checks status codes and JSON bodies.

## Hints

- Parse the URL with `new URL(req.url, 'http://127.0.0.1')`, then split `pathname` on `/` to get route segments.
- A helper function like `sendJson(res, status, body)` keeps the handler clean: `res.writeHead(status, { 'Content-Type': 'application/json' })` then `res.end(JSON.stringify(body))`.
- Use a `Map` keyed by `trackingId` for O(1) lookups on the detail route.
- Only use built-in modules (`node:http`, `node:url`).

## Reference solution

[`solution/server.js`](solution/server.js)
