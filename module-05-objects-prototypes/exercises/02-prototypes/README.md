# Exercise 02 - Prototype Safari (no `class`)

## The scenario

The park's legacy dinosaur registry was written before ES6 classes existed. It uses **constructor functions** and the **prototype chain** — the mechanism that `class` syntax is built on top of. Understanding how prototypes work under the hood is essential for debugging inherited code and grasping how JavaScript really resolves method calls.

You'll build `Dinosaur` and `FlyingDinosaur` constructors with proper prototype wiring so that instances have shared methods, inheritance works, and `instanceof` checks pass.

## What you will build

Both constructors live in [`starter/dinosaur.js`](starter/dinosaur.js).

### `Dinosaur(name, species, zone)`

A constructor function (called with `new`) that stores `name`, `species`, and `zone` as instance properties.

Add a `describe()` method **on the prototype** that returns:

```
"<name> - <species> @ <zone>"
```

```js
const tank = new Dinosaur('Tank', 'Triceratops', 'Herbivore Meadow');
tank.describe();  // "Tank - Triceratops @ Herbivore Meadow"
tank instanceof Dinosaur;  // true
```

### `FlyingDinosaur(name, species, zone, wingspanM)`

Inherits from `Dinosaur` and adds a `wingspanM` property. Overrides `describe()` to append ` - wingspan <wingspanM>m`.

```js
const skyler = new FlyingDinosaur('Skyler', 'Pteranodon', 'Aviary Ascent', 6);
skyler.describe();          // "Skyler - Pteranodon @ Aviary Ascent - wingspan 6m"
skyler instanceof Dinosaur; // true
skyler instanceof FlyingDinosaur; // true
```

## Getting started

Open [`starter/dinosaur.js`](starter/dinosaur.js). The exports are stubbed — replace them. Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The tests check `describe()` output, `instanceof` for both types, and that `wingspanM` is stored correctly.

## Hints

- In a constructor, assign properties with `this.name = name`.
- Add shared methods with `Dinosaur.prototype.describe = function() { ... }`.
- To inherit: call the parent constructor with `Dinosaur.call(this, name, species, zone)`, then wire the prototype chain with `FlyingDinosaur.prototype = Object.create(Dinosaur.prototype)` and fix the constructor reference with `FlyingDinosaur.prototype.constructor = FlyingDinosaur`.
- Override `describe` on `FlyingDinosaur.prototype` after wiring the chain.

## Reference solution

[`solution/dinosaur.js`](solution/dinosaur.js)
