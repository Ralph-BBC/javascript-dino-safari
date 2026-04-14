# Module 2 — Functions, Arrows, and Functional Loops

Functions are the fundamental unit of work in JavaScript. This module covers how to declare them, the compact arrow syntax you'll use constantly, and the trio of array methods — `map`, `filter`, `reduce` — that replace most hand-written loops.

By the end of this module you should be able to:

- **Declare functions** three ways: declaration, expression, and arrow.
- **Use default and rest parameters** to write flexible signatures.
- **Pass functions as values** — to other functions, into arrays, wherever.
- **Chain `.filter()`, `.map()`, `.reduce()`** into readable data pipelines.

---

## 1. Function basics

```bash
node module-02-functions/demo/01-function-basics
```

### Declarations, expressions, arrows

Three ways to create a function:

```js
// Declaration — hoisted, available anywhere in the scope
function greetRanger(name) {
  return `Welcome, Ranger ${name}.`;
}

// Expression — assigned to a const, not hoisted
const describeDino = function (dino) {
  return `${dino.name} — ${dino.species}`;
};

// Arrow — compact, no own `this`
const double = (n) => n * 2;
```

Arrows with a single expression return it implicitly — no `return` keyword needed. When the body needs multiple statements, use a block:

```js
const buildAlert = (zone, level) => {
  const tag = level >= 4 ? 'DANGER' : 'OK';
  return `[${tag}] Zone: ${zone}`;
};
```

### Default parameters

```js
function formatSighting(name, zone = 'Uncharted', risk = 0) {
  return `${name} @ ${zone} (risk ${risk})`;
}
formatSighting('Compy');  // "Compy @ Uncharted (risk 0)"
```

Defaults kick in when the argument is `undefined` (or not passed). They keep call sites clean.

### Rest parameters

```js
function logAll(label, ...items) {
  for (const item of items) console.log(`${label}: ${item}`);
}
logAll('Online', 'North Ridge', 'Valley', 'Paddock');
```

`...items` collects all remaining arguments into a real array. No more `arguments` object.

### Functions as values

Functions are values — you can store them in objects, pass them to other functions, return them from functions:

```js
function applyToEach(arr, fn) {
  const result = [];
  for (const item of arr) result.push(fn(item));
  return result;
}
applyToEach(['Rex', 'Stego'], (s) => s.length);  // [3, 5]
```

This "pass a function to a function" pattern is the foundation of `map`, `filter`, and `reduce`.

---

## 2. Pipelines — map, filter, reduce

```bash
node module-02-functions/demo/02-pipelines
```

The demo reads the park's dinosaur registry and builds a "carnivore pressure by zone" summary in a single chain.

### `filter` — keep what matches

```js
const carnivores = dinosaurs.filter((d) => d.diet === 'carnivore' && d.isActive);
```

Returns a new array with only the elements where the callback returns `true`. Original array untouched.

### `map` — transform each element

```js
const zones = carnivores.map((d) => ({ zone: d.zone, danger: d.dangerLevel }));
```

Returns a new array of the same length, each element transformed. Think of it as "for each item, produce a new shape."

### `reduce` — fold into one value

```js
const totals = zones.reduce((acc, row) => {
  acc[row.zone] = (acc[row.zone] ?? 0) + row.danger;
  return acc;
}, {});
```

`reduce` walks the array left to right, carrying an accumulator. The second argument (`{}` here) is the starting value. Use reduce for sums, group-bys, building objects from arrays — anything where "many items become one thing."

### Chaining

The real power is chaining them together:

```js
const report = dinosaurs
  .filter((d) => d.diet === 'carnivore' && d.isActive)
  .map((d) => ({ zone: d.zone, danger: d.dangerLevel }))
  .reduce((acc, row) => {
    acc[row.zone] = (acc[row.zone] ?? 0) + row.danger;
    return acc;
  }, {});
```

Read it top to bottom: filter the data, reshape each row, fold into a summary. No intermediate variables, no mutation.

---

## Exercises

| # | Folder | What you'll practice |
|---|--------|----------------------|
| 1 | [`01-map-filter-reduce`](exercises/01-map-filter-reduce/) | `filter` high-risk zones, `map` to log lines, `reduce` to zone counts, compose into a migration report. |

Run tests:

```bash
pnpm vitest run module-02-functions/exercises/
```

---

## Slides

Teaching deck: from repo root run `pnpm slides:02`, or `cd slides && pnpm dev`.

## Reference

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN: Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN: Array.prototype.filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [MDN: Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
