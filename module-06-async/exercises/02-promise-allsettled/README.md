# Exercise 02 - Batch sensor read with `allSettled`

## The scenario

The park has dozens of zone sensors — temperature, humidity, motion. On any given read cycle, half of them might be offline. Using `Promise.all` would reject the entire batch if a single sensor fails. The dashboard needs every result — successes *and* failures — so it can show a status for each sensor.

You'll use `Promise.allSettled` to call every sensor, then normalise the results into a uniform shape the dashboard can render.

## What you will build

### `summarizeSensorBatch(sensorFns)` — in [`starter/summarize-batch.js`](starter/summarize-batch.js)

`sensorFns` is an array of **functions** that each return a promise (simulating a sensor read). Call every one, wait for all to settle, and return an array of summary objects:

- For successes: `{ status: 'fulfilled', value }`
- For failures: `{ status: 'rejected', reason }` where `reason` is a string (use `String(err?.message ?? err)`)

```js
const results = await summarizeSensorBatch([
  () => Promise.resolve('temperature: 22C'),
  () => Promise.reject(new Error('sensor offline')),
  () => Promise.resolve('humidity: 45%'),
]);
// [
//   { status: 'fulfilled', value: 'temperature: 22C' },
//   { status: 'rejected', reason: 'sensor offline' },
//   { status: 'fulfilled', value: 'humidity: 45%' },
// ]
```

Non-Error rejections (e.g. a plain string) should also be converted to a string reason.

## Getting started

Open [`starter/summarize-batch.js`](starter/summarize-batch.js). Implement the function. Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The tests check mixed fulfilled/rejected results and non-Error rejection values.

## Hints

- Call each function first to get promises: `sensorFns.map(fn => fn())`.
- `Promise.allSettled(promises)` returns an array of `{ status, value }` or `{ status, reason }` objects.
- Map over the settled results to normalise the `reason` to a string.
- `String(reason?.message ?? reason)` handles both `Error` objects and plain string rejections.

## Reference solution

[`solution/summarize-batch.js`](solution/summarize-batch.js)
