# Module 5 — Async JavaScript: Promises, async/await, Events, and Concurrency

**Live tracking** means pings arrive out of order, some sensors fail, and rangers cancel searches mid-flight. **Promises**, **async/await**, and **AbortController** keep the control room sane.

## Learning goals

- Chain promises and centralize errors with `try/catch` + `async/await`.
- Use `Promise.all`, `allSettled`, and `race` for realistic concurrency.
- Model **timeouts** and **cancellation** with `AbortSignal`.
- Picture the **event loop**: microtasks vs macrotasks.

## Instructor Notes

- **Promises**: states (pending/fulfilled/rejected), chaining, and errors propagating down the chain.
- **`async` / `await`**: sugar over promises; `try` / `catch` vs `.catch()`; returning values from `async` functions.
- **`Promise.all`**: fail-fast when every result is required.
- **`Promise.allSettled`**: mixed success/failure (sensors, batch jobs) — tie to exercise 2.
- **`Promise.race`**: timeouts and first-wins patterns (conceptually; link to timeout wrapper).
- **Retries and backoff**: when to retry idempotent reads; cap attempts and surface final failure clearly.
- **`AbortController` / `AbortSignal`**: cancelling in-flight work; passing `signal` through async helpers.
- **Event loop**: microtask queue (promise callbacks) vs macrotasks (`setTimeout`); order-of-logging demos that confuse beginners.
- **Unhandled rejections**: why they matter in Node and in tests.

## Demos

```bash
node module-05-async/demo/01-promise-fundamentals
node module-05-async/demo/02-concurrency-patterns
node module-05-async/demo/03-event-loop
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-sighting-fetcher`](exercises/01-sighting-fetcher/) | Retry + timeout wrapper. |
| [`exercises/02-batch-sensors`](exercises/02-batch-sensors/) | `Promise.allSettled` aggregation. |
| [`exercises/03-cancellable-search`](exercises/03-cancellable-search/) | `AbortController` pattern. |

```bash
pnpm vitest run module-05-async/exercises/
```

## Slides

From repo root: `pnpm slides:05`, or `cd slides && pnpm dev`.
