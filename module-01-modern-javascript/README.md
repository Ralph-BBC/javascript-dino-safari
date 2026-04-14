# Module 1 — Setting Up Base Camp

This module is the on-ramp. By the end of it every student should be able to:

- **Run a script** with `node` and see output in the terminal.
- **Use modern syntax** — `const`, `let`, `for...of`, template literals.
- **Split code into modules** — `export` from one file, `import` in another.
- **Scaffold a project** with `pnpm init`, add scripts to `package.json`, and install an npm package.
- **Run and read Vitest tests** — every exercise from here on ships with a `.test.js` file.
- **Attach a debugger** when `console.log` isn't enough.

Everything runs in **Node.js**. No browser, no bundler, no magic.

---

## 1. Hello World

```bash
node module-01-modern-javascript/demo/01-hello-world
```

Open `demo/01-hello-world/index.js`. One line:

```js
console.log('Hello World');
```

`console.log` writes to **stdout** — the terminal. `node path/to/file` executes that file. If `Hello World` appears, Node is installed and working. That's your first Node.js program.

---

## 2. Syntax fundamentals

```bash
node module-01-modern-javascript/demo/02-syntax-fundamentals
```

The building blocks you'll use in every file.

### `const` and `let`

```js
const sectorName = 'Cretaceous Valley';   // won't be reassigned
let checkInsLogged = 0;                    // will be incremented
```

Use `const` by default. Reach for `let` only when the binding *must* change. There is no `var` in modern JavaScript — forget it exists.

### Loops

```js
for (const name of rangersOnDuty) {       // for...of — iterate values
  console.log(name, '— present');
}

for (let pass = 1; pass <= 3; pass += 1) { // classic for — when you need an index
  console.log('Pass', pass, 'of 3');
}

while (pingsRemaining > 0) {              // while — condition-based
  pingsRemaining -= 1;
}
```

`for...of` is the workhorse. Classic `for` is for counters. `while` is for conditions that aren't about a collection.

Edit the demo, change some values, run it again. Breaking things on purpose is the fastest way to learn syntax.

---

## 3. Modules — splitting code across files

```bash
node module-01-modern-javascript/demo/03-esm-basics
```

A single file doesn't scale. As soon as you need more than a hundred lines you split code into **modules** — files that export things other files can import.

This demo has two files. Open them side by side.

### Exporting

`park-info.js` makes things available:

```js
export const PARK_NAME = 'Dinosaur Safari Research Park';
export const SECTOR_COUNT = 6;

export function formatWelcome(rangerName) {
  return `Welcome to ${PARK_NAME}, Ranger ${rangerName}. ${SECTOR_COUNT} sectors online.`;
}

export default function printStatus() {
  console.log(`[${PARK_NAME}] All systems operational.`);
}
```

`export` in front of a declaration shares it. `export default` marks one thing as the "main" export.

### Importing

`index.js` pulls them in:

```js
import printStatus, { PARK_NAME, SECTOR_COUNT, formatWelcome } from './park-info.js';
```

**Named exports** go in `{ braces }` — names must match exactly. Typo `PARK_NAME` as `PAARK_NAME` and you get `undefined`, not an error. Silent bugs.

**Default exports** can use any name on the import side. That flexibility is why many teams prefer named exports — the name stays consistent everywhere.

### Enabling ESM

This works because `package.json` contains `"type": "module"`. Without it, Node treats `.js` files as the older CommonJS format (`require` / `module.exports`). Every package in this course has it set.

---

## 4. Package scripts and npm

```bash
node module-01-modern-javascript/demo/04-package-scripts
```

A project with no documented commands is a project where someone forgets how to run the tests. `package.json` is your operations manual.

### Scaffolding a project

```bash
pnpm init
```

This gives you a minimal `package.json` with a name, version, and an empty `scripts` section.

### Installing an npm package

The demo imports **picocolors**, a tiny library for coloured terminal output. Install it:

```bash
pnpm add picocolors
```

Now there's a `node_modules/` folder and `picocolors` is listed in `dependencies`. Any file in the project can `import pc from 'picocolors'` — same `import` syntax we used for local files, just without the `./` path.

### Adding scripts

Look at the module's `package.json`:

```json
{
  "scripts": {
    "test": "vitest run --root .",
    "demo:scripts": "node demo/04-package-scripts",
    "demo:esm": "node demo/03-esm-basics"
  }
}
```

Each key is a command name. Each value is the shell command that runs. Instead of remembering the full path, anyone can type:

```bash
pnpm demo:scripts
```

Two script names are special — `start` and `test` don't need `run`:

```bash
pnpm test         # same as: pnpm run test
```

### Passing arguments

Everything after `--` gets forwarded. The demo reads `process.argv` to pick up flags:

```bash
pnpm demo:scripts -- --sector=ridge --verbose
```

Run it both ways — with `node` directly and via `pnpm demo:scripts`. Notice that `process.env.npm_lifecycle_event` tells you which script triggered it, and that `node_modules/.bin` is automatically on your PATH inside a script. That's how tools like `vitest` and `eslint` work without a global install.

---

## 5. Vitest — running and reading tests

```bash
node module-01-modern-javascript/demo/05-vitest-intro
```

Every exercise in this course ships with a `start.test.js` file. When you complete an exercise, the tests go green. Learning to run and read tests *now* means you'll be self-sufficient for the rest of the course.

The demo has three files: `alert.js` (the code under test), `alert.test.js` (the tests), and `index.js` (runs the functions so you can see output).

### Running tests

```bash
pnpm vitest run module-01-modern-javascript/demo/05-vitest-intro/alert.test.js
```

Seven green checks. Now let's look at what makes them tick.

### Anatomy of a test file

```js
import { describe, it, expect } from 'vitest';
import { formatAlert, isHighRisk } from './alert.js';

describe('formatAlert', () => {
  it('tags high-danger sightings', () => {
    const result = formatAlert({ name: 'Rex', zone: 'Valley', dangerLevel: 5 });
    expect(result).toBe('[DANGER] Rex spotted in Valley');
  });

  it('uses defaults for missing fields', () => {
    expect(formatAlert({})).toBe('[OK] Unknown spotted in Uncharted');
  });
});
```

`describe` groups related tests. `it` defines one assertion. `expect(value).toBe(expected)` is the check — if they don't match, Vitest shows a diff.

### Reading a failure

Change an expected string to something wrong and run again. Vitest highlights exactly what it got vs what you expected. Learning to read these diffs quickly is one of the most useful skills in the course.

### The testing loop

Write a function. Write a test. Run it. **Red** means something is wrong. Fix it. **Green** means the contract holds. Refactor freely — the tests catch regressions. This is the loop you'll follow in every exercise.

---

## 6. Debugging

```bash
node module-01-modern-javascript/demo/06-debugging
```

The demo has an intentional bug — the reported average weight is wrong. Rather than staring at the code, attach a debugger:

```bash
node --inspect module-01-modern-javascript/demo/06-debugging
```

- **Chrome**: `chrome://inspect` → "Open dedicated DevTools for Node"
- **VS Code / Cursor**: "Attach to Node Process" or the debug icon in the terminal

Set a breakpoint inside the `for` loop. Step through iteration by iteration. Watch `i`, `list[i]`, and `total`. The loop uses `<=` instead of `<` — one iteration too many. `list[i]` is `undefined` on the last pass, and `undefined?.weightKg ?? 0` silently adds zero instead of crashing. The average is wrong but nothing throws.

This is the kind of bug `console.log` misses but a breakpoint catches in seconds.

---

## Exercises

Each exercise has a `start.js` (your work), a `start.test.js` (Vitest tests that judge success), and a `solution.js` (instructor reference — try first).

| # | Folder | What you'll practice |
|---|--------|----------------------|
| 1 | [`01-package-scripts`](exercises/01-package-scripts/) | Wire up `start`, `lint`, and `test` scripts in a `package.json`. |
| 2 | [`02-vitest-contract`](exercises/02-vitest-contract/) | Implement `formatSighting` — template literals and `??` defaults, with Vitest guarding the contract. |
| 3 | [`03-esm-imports`](exercises/03-esm-imports/) | Import from a Node built-in (`node:path`), an npm package (`picocolors`), and a local module. |

Run all module tests:

```bash
pnpm vitest run module-01-modern-javascript/exercises/
```

Single exercise:

```bash
pnpm vitest run module-01-modern-javascript/exercises/01-package-scripts/start.test.js
```

---

## Slides

Teaching deck (Vite + [`slide-deck`](../slide-deck/)): from repo root run `pnpm slides:01`, or `cd slides && pnpm dev`.

## Reference

- [Node.js ESM](https://nodejs.org/api/esm.html)
- [Vitest](https://vitest.dev/)
- [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
