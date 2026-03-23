# Module 1 — Modern JavaScript: Syntax, Tooling, Runtime

**Base Camp is live.** Perimeter sensors in Cretaceous Valley are streaming IDs faster than HQ can parse them. Before we track a single theropod, we need a modern JavaScript workflow: **ES modules**, **npm scripts**, **Vitest**, **linting**, and a **debugging** setup that works in Node.

## Learning goals

- Use **ESM** (`import` / `export`) in Node with `"type": "module"`.
- Wire **package scripts** for run, test, and lint workflows.
- Run **Vitest** from the repo and interpret failures.
- Apply **modern syntax**: destructuring, spread/rest, optional chaining, nullish coalescing, template literals.
- Debug Node with **`node --inspect`** and your editor.

## Demos

From the repo root:

```bash
node module-01-modern-javascript/demo/01-esm-workflow.js
node module-01-modern-javascript/demo/02-modern-syntax.js
node module-01-modern-javascript/demo/03-debugging.js
```

Try debugging demo 3:

```bash
node --inspect module-01-modern-javascript/demo/03-debugging.js
```

## Exercises

| Folder | Mission |
| ------ | ------- |
| [`exercises/01-package-scripts`](exercises/01-package-scripts/) | Configure `package.json` scripts for the mini tracker. |
| [`exercises/02-modern-syntax`](exercises/02-modern-syntax/) | Refactor legacy-style code to modern syntax. |
| [`exercises/03-vitest-first-test`](exercises/03-vitest-first-test/) | Implement `formatSighting` and cover it with Vitest. |

Run tests for this module:

```bash
pnpm vitest run module-01-modern-javascript/exercises/
```

## Slides

Teaching deck (Vite + [`slide-deck`](../slide-deck/)): from repo root run `pnpm slides:01`, or `cd slides && pnpm dev`.

## Reference

- [Node.js ESM](https://nodejs.org/api/esm.html)
- [Vitest](https://vitest.dev/)
- [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
