export const slides = [
  {
    type: 'title',
    content: {
      title: 'Module 2 — Functions Deep Dive',
      subtitle: 'Tracking stations, ranger gear, and clean module boundaries',
      icon: 'radio',
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Each station has its own logbook',
      points: [
        'Lexical scope: variables live where they are declared.',
        'Closures: inner functions remember outer variables — like a locked supply crate.',
        '`this` is not magic — it is call-site rules + pitfalls in callbacks.',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Lexical scope & closures',
      icon: 'layers',
      points: [
        'Blocks, functions, and modules create scope boundaries.',
        'A closure keeps outer variables alive after the outer function returns.',
        'Use closures for private state instead of global “park secrets”.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Factory: zone tracker with private sightings',
      code: `function createZoneTracker(zoneName) {
  const sightings = [];
  return {
    log(id, note) { sightings.push({ id, note }); },
    snapshot() { return [...sightings]; },
  };
}`,
      highlights: [
        '`sightings` is private — callers cannot mutate the array directly',
        'Each call to createZoneTracker gets a fresh backpack',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Partial application',
      icon: 'sliders',
      points: [
        'Bake in repeated arguments once — e.g. severity for alerts.',
        'Returns a narrower function: fewer parameters at the call site.',
        'Pairs well with logging, fetch wrappers, and event handlers.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Pre-configured alert channel',
      code: `const warn = (msg) => \`[WARN] \${msg}\`;
const lagoonWarn = (msg) => \`LAGOON: \${warn(msg)}\`;`,
      highlights: [
        'Same shape everywhere; only the prefix changes',
        'Exercise: generalize with createAlertFn(severity)',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: '`this` — method vs callback',
      left: {
        label: 'Object method',
        code: `const ranger = {
  callsign: 'Kai',
  hail() { return this.callsign; },
};
ranger.hail(); // "Kai"`,
      },
      right: {
        label: 'Lost in setTimeout',
        code: `setTimeout(ranger.hail, 0);
// strict: this is undefined

// fix: arrow, bind, or wrapper`,
      },
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Fixing context bugs',
      icon: 'anchor',
      points: [
        'Arrow functions inherit lexical `this` from enclosing scope.',
        '`fn.bind(obj)` freezes `this` for later invocation.',
        'Class fields with arrows are a common React pattern (mental model: same idea).',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: 'Arrow vs function keyword',
      left: {
        label: 'function',
        items: [
          'Has own `this`, `arguments`, `new`',
          'Good for methods that need dynamic `this`',
        ],
      },
      right: {
        label: 'arrow =>',
        items: [
          'No own `this` — captures lexical',
          'Great for short callbacks and array methods',
        ],
      },
    },
  },
  {
    type: 'standard',
    content: {
      title: 'ESM module design',
      icon: 'package',
      points: [
        'Narrow public API: export what consumers need, hide internals.',
        'Named exports for utilities; default export for the main facade (optional).',
        'Avoid deep import paths into someone else’s `internal/` folder.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Clean boundary sketch',
      code: `// registry.js — only exports
export function register(dino) { /* ... */ }
export function get(id) { /* ... */ }

// internals stay file-private
const cache = new Map();`,
      highlights: [
        'Consumers depend on stable names, not your file layout',
      ],
    },
  },
  {
    type: 'rules',
    content: {
      title: 'Field rules — Module 2',
      rules: [
        {
          rule: 'Know where `this` comes from',
          example: 'If it is a callback, assume it is wrong until proven.',
          icon: 'crosshair',
        },
        {
          rule: 'Prefer factories for private state',
          example: 'Closures beat stuffing everything on `global`.',
          icon: 'lock',
        },
        {
          rule: 'Design module surfaces',
          example: 'Small exports = fewer coupling teeth marks.',
          icon: 'puzzle',
        },
      ],
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Exercises — Ranger drills',
      points: [
        '01 — Zone tracker factory with private state',
        '02 — Partial application for alert loggers',
        '03 — Fix `this` bugs in SafariTour',
      ],
    },
  },
  {
    type: 'title',
    content: {
      title: 'Clear channel — Module 2 complete',
      subtitle: 'Run demos, then exercises under module-02-functions',
      icon: 'check-circle',
    },
  },
];
