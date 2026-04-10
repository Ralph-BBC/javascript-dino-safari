# Module 1 — Modern JavaScript: Syntax, Tooling, Runtime

**Base Camp is live.** Perimeter sensors in Cretaceous Valley are streaming IDs faster than HQ can parse them. Before we track a single theropod, we need a modern JavaScript workflow: **ES modules**, **npm scripts**, **Vitest**, **linting**, and a **debugging** setup that works in Node.

## Learning goals

- Use **ESM** (`import` / `export`) in Node with `"type": "module"`.
- Wire **package scripts** for run, test, and lint workflows.
- Run **Vitest** from the repo and interpret failures.
- Apply **modern syntax**: destructuring, spread/rest, optional chaining, nullish coalescing, template literals.
- Debug Node with **`node --inspect`** and your editor.

## Instructor Notes

- Why **ESM** in Node: `"type": "module"`, `import` / `export` forms, and how the repo root + workspace packages fit together.
- **`package.json` scripts**: what `pnpm run` executes, passing args, and wiring `test` / `lint` for a small package.
- **Vitest basics**: `describe` / `it` / `expect`, reading failures, running one test file vs a whole `exercises/` folder.
- **Syntax fundamentals** (demo `02-syntax-fundamentals`): `const` / `let`, `for...of`, `for`, `while`, `console.log` — optional warm-up before ESM demos.
- **Package scripts** (demo `03-package-scripts`): `npm init`, adding scripts, `pnpm run`, why `start` / `test` are special.
- **Modern syntax** (tie to demo `05-modern-syntax`): destructuring, rest/spread, optional chaining, nullish coalescing, template literals — when each reduces bugs vs noise.
- **Debugging**: `node --inspect`, attaching from the editor or Chrome (`chrome://inspect`), breakpoints vs `console.log`.
- **ESLint / Prettier** (if you cover tooling live): flat config at repo root, why CI and local lint stay aligned.

## Demos

From the repo root:

```bash
node module-01-modern-javascript/demo/01-hello-world
node module-01-modern-javascript/demo/02-syntax-fundamentals
node module-01-modern-javascript/demo/03-package-scripts
node module-01-modern-javascript/demo/04-esm-workflow
node module-01-modern-javascript/demo/05-modern-syntax
node module-01-modern-javascript/demo/06-debugging
```

Try debugging demo 6:

```bash
node --inspect module-01-modern-javascript/demo/06-debugging
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
