export const slides = [
  {
    type: 'title',
    content: {
      title: 'Module 6 — Functional Patterns',
      subtitle: 'Migration pipelines: immutability, composition, memoization',
      icon: 'trending-up',
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Herds move; data should not surprise you',
      points: [
        'Accidental mutation causes ghost bugs in shared state.',
        '`map` / `filter` / `reduce` are your pipeline workhorses.',
        'Memoization pays off when GIS routes or summaries are expensive.',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Immutability in practice',
      icon: 'recycle',
      points: [
        'Shallow copy: spread `{ ...obj }`, `[...arr]`.',
        'Nested updates: spread each level you change, or `structuredClone`.',
        '`Object.freeze` is shallow — tests may use it as a tripwire.',
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
          'Some types not supported (functions, symbols in some cases)',
        ],
      },
    },
  },
  {
    type: 'standard',
    content: {
      title: 'map / filter / reduce',
      icon: 'sliders',
      points: [
        '`map` transforms each element — same length.',
        '`filter` keeps elements matching a predicate.',
        '`reduce` folds to one value — counts, group-bys, summaries.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Pipeline example',
      code: `const pressure = events
  .filter((e) => e.risk === 'high')
  .map((e) => \`\${e.zone}: \${e.headcount}\`)
  .length;`,
      highlights: [
        'Readable left-to-right story for migration logs',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Pure functions & boundaries',
      icon: 'target',
      points: [
        'Pure: same inputs → same output; no observable side effects.',
        'Push I/O, logging, and mutation to the edges of the pipeline.',
        'Easier tests: call the pure core with fixtures.',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Currying (when it helps)',
      icon: 'hook',
      points: [
        'Transform `f(a,b)` into `f(a)(b)` to partially apply config.',
        'Useful for reusable mappers with preset context.',
        'Do not currying-all-the-things — clarity beats golf.',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Memoize pattern',
      code: `function memoize(fn) {
  const cache = new Map();
  return (arg) => {
    if (cache.has(arg)) return cache.get(arg);
    const v = fn(arg);
    cache.set(arg, v);
    return v;
  };
}`,
      highlights: [
        'Cache key strategy matters for objects (reference equality)',
      ],
    },
  },
  {
    type: 'rules',
    content: {
      title: 'Field rules — Module 6',
      rules: [
        {
          rule: 'Copy before you change',
          example: 'Especially shared dino records from HQ.',
          icon: 'clipboard',
        },
        {
          rule: 'Name pipeline stages',
          example: 'Small functions > 40-line reduce bodies.',
          icon: 'file-code',
        },
        {
          rule: 'Memoize measured hot paths',
          example: 'Profile first; caches have memory cost.',
          icon: 'timer',
        },
      ],
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Exercises — migration desk',
      points: [
        '01 — Immutable record updates',
        '02 — Migration report pipeline',
        '03 — memoize + route preview counter',
      ],
    },
  },
  {
    type: 'title',
    content: {
      title: 'Pipeline green — Module 6',
      subtitle: 'Functional exercises live under module-06-functional',
      icon: 'sparkles',
    },
  },
];
