# Exercise 01 - Sighting fetcher with retry + timeout

## The scenario

Perimeter sensors are unreliable — network pings drop, connections hang, and endpoints go dark for seconds at a time. A single failed request shouldn't crash the whole monitoring loop. Instead, each request needs a **timeout** so it can't hang forever, and a **retry** wrapper so transient failures recover automatically.

You'll build two async primitives that the rest of the park's codebase can use: a timeout wrapper for any promise, and a retry loop that combines timeouts with multiple attempts.

## What you will build

### `withTimeout(promise, timeoutMs)` — in [`starter/with-timeout.js`](starter/with-timeout.js)

Wraps any promise with a time limit. If the promise settles (resolves or rejects) before the timeout, return that result. If it doesn't settle in time, reject with `Error('timeout')`.

```js
await withTimeout(fastOperation(), 200);   // resolves normally
await withTimeout(slowOperation(), 20);    // rejects with Error('timeout')
```

### `runWithRetry(task, { maxAttempts, timeoutMs })` — in [`starter/run-with-retry.js`](starter/run-with-retry.js)

`task` is a **zero-argument function** that returns a promise (call it fresh on each attempt). Try up to `maxAttempts` times, wrapping each attempt with `withTimeout`. If an attempt succeeds, return the result. If all attempts fail, throw the **last** error.

```js
let n = 0;
const flaky = () => new Promise((resolve, reject) => {
  n++;
  if (n < 3) reject(new Error('transient'));
  else resolve('data');
});

await runWithRetry(flaky, { maxAttempts: 5, timeoutMs: 200 });
// Fails twice, succeeds on attempt 3 → 'data'
```

## Getting started

Open both stub files in `starter/`. Each has the right signature — implement the logic. Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The tests use Vitest's fake timers. They check that fast promises resolve normally, slow promises are rejected as timeouts, retries recover after transient failures, and the last error is thrown when all attempts are exhausted.

## Hints

- `withTimeout`: race the original promise against a `setTimeout` that rejects. Use `Promise.race()` or manually wire `resolve`/`reject` in a `new Promise`.
- Remember to `clearTimeout` when the original promise settles first — otherwise the timer leaks.
- `runWithRetry`: a simple `for` loop with `try/catch` inside. Call `task()` fresh each iteration and wrap it with `withTimeout`.
- Store the caught error in a variable so you can `throw lastErr` after the loop.

## Reference solution

[`solution/with-timeout.js`](solution/with-timeout.js) | [`solution/run-with-retry.js`](solution/run-with-retry.js)
