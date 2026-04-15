# Exercise 03 - Compose a dinosaur

## The scenario

The genetics lab keeps creating hybrids with mix-and-match abilities — one can swim, another can fly, some have armour plating, and the latest prototype does all three. Building a class hierarchy for every possible combination would create an explosion of subclasses (`FlyingSwimmer`, `ArmoredFlyer`, `ArmoredFlyingSwimmer`, ...).

Instead, you'll use **mixin functions** that take a plain object and return a new object with extra capabilities layered on. Stack them in any order to compose exactly the creature you need — no classes, no inheritance, just functions and the spread operator.

## What you will build

Three mixin functions in [`starter/mixins.js`](starter/mixins.js). Each takes a `dino` object and returns a **new** object (never mutate the input).

### `withSwim(dino)`

Adds a `swim()` method returning `"<name> cuts through the water"`.

```js
const splash = withSwim({ name: 'Splash' });
splash.swim();  // "Splash cuts through the water"
```

### `withFly(dino)`

Adds a `fly()` method returning `"<name> circles above the canopy"`.

### `withArmor(dino)`

Adds `armorRating` (defaulting to `8` if the dino doesn't already have one) and a `bash()` method returning `"<name> slams with armor <armorRating>"`.

```js
const anky = withArmor({ name: 'Anky' });
anky.armorRating;  // 8 (default)
anky.bash();       // "Anky slams with armor 8"

const custom = withArmor({ name: 'Tank', armorRating: 10 });
custom.armorRating;  // 10 (preserved)
```

### Stacking them

```js
const mega = withFly(withArmor(withSwim({ name: 'Mega', armorRating: 10 })));
mega.swim();  // "Mega cuts through the water"
mega.fly();   // "Mega circles above the canopy"
mega.bash();  // "Mega slams with armor 10"
```

## Getting started

Open [`starter/mixins.js`](starter/mixins.js). Replace the stubs. Each function is a single `return { ...dino, ... }` with the new method(s). Then run:

```bash
node starter/index.js
```

## Verify

```bash
cd starter && pnpm install && pnpm test
```

The tests verify that the original dino is never mutated, that capabilities stack, and that `withArmor` applies the default rating correctly.

## Hints

- `return { ...dino, swim() { ... } }` spreads all existing properties and adds the new method.
- For `withArmor`, use `dino.armorRating ?? 8` to preserve an existing rating or default to 8.
- The `name` property comes from the original `dino` object — the spread copies it into the new object automatically.

## Reference solution

[`solution/mixins.js`](solution/mixins.js)
