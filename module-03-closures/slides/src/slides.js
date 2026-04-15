export const slides = [
  {
    type: 'title',
    content: {
      title: 'Module 3 - Closures & Currying',
      subtitle: 'Private state, partial application, and immutable data',
      icon: 'lock',
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'What we will cover',
      points: [
        'Closures - functions that remember their creation scope',
        'Partial application - pre-filling arguments to create specialised functions',
        'Currying - transforming f(a, b) into f(a)(b)',
        'Immutability - protecting data from accidental mutation',
      ],
    },
  },

  {
    type: 'code',
    content: {
      title: 'Closure',
      code: `function createZoneTracker(zoneName) {
  const sightings = [];
  const log = (id, note) => sightings.push({ id, note });
  const snapshot = () => [...sightings];
  
  return { log, snapshot };
}
  
const { log, snapshot } = createZoneTracker('A');`,
      highlights: [
        '`sightings` is private - callers cannot mutate it directly',
        'Each call creates a fresh scope with its own array',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Partial application',
      code: `function createAlertFn(severity) {
  return (message) =>
    \`[\${severity}] \${message}\`;
}

const warn  = createAlertFn('WARN');
const crit  = createAlertFn('CRITICAL');

warn('Fence voltage low');       // "[WARN] Fence voltage low"
crit('T-Rex in visitor area');   // "[CRITICAL] T-Rex in visitor area"`,
      highlights: [
        'The outer function "bakes in" the severity - callers only supply the message',
        'Each returned function is a lightweight, pre-configured tool',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Partial application - composing layers',
      code: `function createTaggedLogger(tag, alertFn) {
  return (message) =>
    console.log(alertFn(\`[\${tag}] \${message}\`));
}

const crit = createAlertFn('CRITICAL');
const lagoonLog = createTaggedLogger('LAGOON', crit);

lagoonLog('Mosasaurus breached');
// logs: "[CRITICAL] [LAGOON] Mosasaurus breached"`,
      highlights: [
        'Stack partial-application layers to build specific loggers from generic parts',
        'No classes, no inheritance - just functions returning functions',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Currying - one arg at a time',
      code: `const curry = (fn) => (a) => (b) => fn(a, b);

const sighting = curry((zone, name) =>
  \`\${name} spotted in \${zone}\`
);

const inValley = sighting('Cretaceous Valley');
inValley('Rex');    // "Rex spotted in Cretaceous Valley"
inValley('Blue');   // "Blue spotted in Cretaceous Valley"

// or call both args at once
sighting('Ridge')('Stego');  // "Stego spotted in Ridge"`,
      highlights: [
        'Currying transforms f(a, b) into f(a)(b) - each call returns a new function',
        'Use when the first argument is stable across many calls',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: 'Partial application vs currying',
      left: {
        label: 'Partial application',
        items: [
          'Fix some args, return a function for the rest',
          'Can fix any number of args at once',
          'createAlertFn("WARN") fixes 1 of 1',
        ],
      },
      right: {
        label: 'Currying',
        items: [
          'Transform f(a, b) into f(a)(b)',
          'Always one arg per call in the chain',
          'Useful for pipelines and composition',
        ],
      },
    },
  },
  {
    type: 'code',
    content: {
      title: 'Currying - practical uses',
      code: `const curry = (fn) => (a) => (b) => fn(a, b);

// Curried comparison - reusable threshold checkers
const gt = curry((threshold, value) => value > threshold);
const isDangerous = gt(3);
const isHeavy     = gt(5000);

dinos.filter(d => isDangerous(d.dangerLevel));
dinos.filter(d => isHeavy(d.weightKg));

// Curried property accessor
const prop    = curry((key, obj) => obj[key]);
const getName = prop('name');
dinos.map(getName);  // ['Rex', 'Compy', 'Raptor']`,
      highlights: [
        'Curried helpers slot straight into filter/map with no wrapper arrow needed',
        'Fix the "what" once, then apply it across many values',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'The mutation trap',
      code: `const rex = { name: 'Rex', zone: 'Valley', dangerLevel: 4 };

// Looks harmless - but it mutates the original
const updated = rex;
updated.dangerLevel = 5;

console.log(rex.dangerLevel);  // 5 - oops!
// Both variables point to the SAME object in memory`,
      highlights: [
        'Objects are passed by reference - assignment copies the pointer, not the data',
        'This is the #1 source of "spooky action-at-a-distance" bugs',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Immutable updates with spread',
      code: `const rex = { name: 'Rex', zone: 'Valley', dangerLevel: 4 };

// Spread creates a shallow copy, then override one field
const promoted = { ...rex, dangerLevel: 5 };

console.log(rex.dangerLevel);      // 4 - untouched
console.log(promoted.dangerLevel); // 5 - new object

// Works for arrays too
const dinos = ['Rex', 'Blue'];
const more  = [...dinos, 'Echo'];  // new array`,
      highlights: [
        'Spread (`...`) copies all properties into a new object',
        'Properties listed after the spread override the copied values',
      ],
    },
  },

  {
    type: 'welcome',
    content: {
      title: 'Exercises',
      points: [
        '01 - Zone tracker factory (closures)',
        '02 - Partial application for alert loggers',
        '03 - Curried utility helpers (currying)',
        '04 - Immutable record updates',
      ],
    },
  },
  {
    type: 'title',
    content: {
      title: 'Scope locked - Module 3',
      subtitle: 'Run demos, then exercises under module-03-closures',
      icon: 'check-circle',
    },
  },
];
