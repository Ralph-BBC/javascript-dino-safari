# Module 5 — Async JavaScript: Promises, async/await, Events, and Concurrency

**Live tracking** means pings arrive out of order, some sensors fail, and rangers cancel searches mid-flight. **Promises**, **async/await**, and **AbortController** keep the control room sane.

## Learning goals

- Chain promises and centralize errors with `try/catch` + `async/await`.
- Use `Promise.all`, `allSettled`, and `race` for realistic concurrency.
- Model **timeouts** and **cancellation** with `AbortSignal`.
- Picture the **event loop**: microtasks vs macrotasks.

## Demos

```bash
node module-05-async/demo/01-promise-fundamentals.js
node module-05-async/demo/02-concurrency-patterns.js
node module-05-async/demo/03-event-loop.js
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
