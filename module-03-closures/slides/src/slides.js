export const slides = [
  {
    type: 'title',
    content: {
      title: 'Module 3 — Closures & Currying',
      subtitle: 'Private state, partial application, and immutable data',
      icon: 'lock',
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Functions that remember',
      points: [
        'A closure captures variables from its creation scope.',
        'Use closures for private state, factories, and pre-configured functions.',
        'Immutability protects shared data from action-at-a-distance bugs.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Closure: zone tracker with private state',
      code: `function createZoneTracker(zoneName) {
  const sightings = [];
  return {
    log(id, note) { sightings.push({ id, note }); },
    snapshot() { return [...sightings]; },
  };
}`,
      highlights: [
        '`sightings` is private — callers cannot mutate it directly',
        'Each call creates a fresh scope with its own array',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Partial application',
      icon: 'sliders',
      points: [
        'Bake in repeated arguments once — severity, tag, zone.',
        'Returns a simpler function: fewer params at the call site.',
        'Composes naturally: `createTaggedLogger(tag, alertFn)`.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Currying',
      code: `const curry = (fn) => (a) => (b) => fn(a, b);

const sighting = curry((zone, name) =>
  \`\${name} spotted in \${zone}\`
);
const inValley = sighting('Cretaceous Valley');
inValley('Rex');  // "Rex spotted in Cretaceous Valley"`,
      highlights: [
        'Transform f(a, b) into f(a)(b) for reuse',
        'Use when the first arg is stable across many calls',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: 'Spread vs structuredClone',
      left: {
        label: 'Spread',
        items: [
          'Fast for flat records',
          'Shares nested references — danger',
        ],
      },
      right: {
        label: 'structuredClone',
        items: [
          'Deep clone data shapes',
          'Some types not supported (functions)',
        ],
      },
    },
  },
  {
    type: 'rules',
    content: {
      title: 'Field rules — Module 3',
      rules: [
        {
          rule: 'Prefer factories for private state',
          example: 'Closures beat global variables every time.',
          icon: 'lock',
        },
        {
          rule: 'Copy before you change',
          example: 'Especially shared dino records from HQ.',
          icon: 'clipboard',
        },
        {
          rule: 'Curry measured, not dogmatic',
          example: 'If both args are always known, just pass them.',
          icon: 'target',
        },
      ],
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Exercises',
      points: [
        '01 — Zone tracker factory (closures)',
        '02 — Partial application for alert loggers',
        '03 — Immutable record updates',
      ],
    },
  },
  {
    type: 'title',
    content: {
      title: 'Scope locked — Module 3',
      subtitle: 'Run demos, then exercises under module-03-closures',
      icon: 'check-circle',
    },
  },
];
