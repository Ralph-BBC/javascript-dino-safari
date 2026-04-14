export const slides = [
  {
    type: 'title',
    content: {
      title: 'Module 2 — Functions & Functional Loops',
      subtitle: 'Declarations, arrows, and the filter/map/reduce pipeline',
      icon: 'zap',
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Functions are the building block',
      points: [
        'Three ways to declare: declaration, expression, arrow.',
        'Default and rest parameters for flexible signatures.',
        'Functions as values — pass them, store them, return them.',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: 'Declaration vs expression vs arrow',
      left: {
        label: 'Declaration',
        code: `function greet(name) {
  return \`Hello, \${name}\`;
}`,
      },
      right: {
        label: 'Arrow',
        code: `const greet = (name) =>
  \`Hello, \${name}\`;`,
      },
    },
  },
  {
    type: 'code',
    content: {
      title: 'Defaults and rest',
      code: `function log(zone = 'Uncharted', ...ids) {
  for (const id of ids) {
    console.log(\`[\${zone}] \${id}\`);
  }
}
log('Ridge', 'TRX-001', 'STG-014');`,
      highlights: [
        'Defaults fill in for undefined — keep call sites clean',
        '...rest collects remaining args into a real array',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'map / filter / reduce',
      icon: 'sliders',
      points: [
        '`filter` — keep elements matching a predicate.',
        '`map` — transform each element, same length out.',
        '`reduce` — fold many values into one (sum, group-by, object).',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Pipeline example',
      code: `const report = dinosaurs
  .filter(d => d.diet === 'carnivore')
  .map(d => ({ zone: d.zone, danger: d.dangerLevel }))
  .reduce((acc, row) => {
    acc[row.zone] = (acc[row.zone] ?? 0) + row.danger;
    return acc;
  }, {});`,
      highlights: [
        'Read top to bottom: filter, reshape, fold',
        'Each step returns a new value — no mutation',
      ],
    },
  },
  {
    type: 'rules',
    content: {
      title: 'Field rules — Module 2',
      rules: [
        {
          rule: 'Prefer arrows for callbacks',
          example: 'Short, no own `this` — perfect for array methods.',
          icon: 'zap',
        },
        {
          rule: 'Always pass an initial value to reduce',
          example: 'Empty arrays throw without one.',
          icon: 'shield',
        },
        {
          rule: 'Name your pipeline stages',
          example: 'Small functions > 40-line chains.',
          icon: 'file-code',
        },
      ],
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Exercises',
      points: [
        '01 — Migration pipeline: filter, map, reduce, compose',
      ],
    },
  },
  {
    type: 'title',
    content: {
      title: 'Pipeline green — Module 2',
      subtitle: 'Run demos, then exercises under module-02-functions',
      icon: 'check-circle',
    },
  },
];
