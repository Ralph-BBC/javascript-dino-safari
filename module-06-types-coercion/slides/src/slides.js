export const slides = [
  {
    type: 'title',
    content: {
      title: 'Module 6 — Types & Coercion',
      subtitle: 'Sensor glitches: the weird JS that bites production',
      icon: 'alert-triangle',
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'The park sensors lie (on purpose)',
      points: [
        'Strings that look like numbers, empty strings, NaN, null vs undefined.',
        'Money and floats will betray you — think in integer cents.',
        'Equality is three games: `==`, `===`, `Object.is`.',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Primitives vs objects',
      icon: 'disc',
      points: [
        'Primitives: string, number, bigint, boolean, symbol, undefined, null.',
        'Objects: arrays, functions, dates — mutable by default.',
        '`typeof null` is `"object"` (historic bug) — use strict checks when it matters.',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: '`==` vs `===`',
      left: {
        label: '== (loose)',
        items: [
          'Allows coercion — `null == undefined` is true',
          'Use rarely, with intent',
        ],
      },
      right: {
        label: '=== (strict)',
        items: [
          'No coercion — compare type + value',
          'Default for almost all ranger code',
        ],
      },
    },
  },
  {
    type: 'code',
    content: {
      title: 'Coercion traps in telemetry',
      code: `"5" + 3     // "53" (string concat)
"5" - 3     // 2
[] == false // true (!)
Boolean([]) // true`,
      highlights: [
        'The same value can “mean” different things in different operators',
      ],
    },
  },
  {
    type: 'standard',
    content: {
      title: 'Numbers that stampede',
      icon: 'calculator',
      points: [
        '`0.1 + 0.2 !== 0.3` — IEEE floats',
        '`NaN !== NaN` — use `Number.isNaN`',
        '`BigInt` for integer overflow frontiers (careful mixing with Number)',
      ],
    },
  },
  {
    type: 'code',
    content: {
      title: 'Money: work in cents',
      code: `function dollarsToCents(n) {
  return Math.round(n * 100);
}`,
      highlights: [
        'Parse ticket strings, sum integers, format back to dollars at the edge',
      ],
    },
  },
  {
    type: 'comparison',
    content: {
      title: '0 vs -0',
      left: {
        label: '=== says equal',
        code: `0 === -0 // true`,
      },
      right: {
        label: 'Object.is disagrees',
        code: `Object.is(0, -0) // false`,
      },
    },
  },
  {
    type: 'standard',
    content: {
      title: '`Object.is` hits',
      icon: 'scale',
      points: [
        '`Object.is(NaN, NaN)` is true',
        'Distinguishes +0 and -0',
        'Use when you are debugging “impossible” math',
      ],
    },
  },
  {
    type: 'rules',
    content: {
      title: 'Field rules — Module 4',
      rules: [
        {
          rule: 'Validate at the boundary',
          example: 'Sensors → finite number or null — explicit.',
          icon: 'search',
        },
        {
          rule: 'Never float currency',
          example: 'Cents are integers; display is formatting.',
          icon: 'hash',
        },
        {
          rule: 'Pick the right equality tool',
          example: 'Default `===`; know when `Object.is` wins.',
          icon: 'check-circle',
        },
      ],
    },
  },
  {
    type: 'welcome',
    content: {
      title: 'Exercises — glitch hunting',
      points: [
        '01 — Sensor reading validator',
        '02 — Ticket totals in cents',
        '03 — Equality audit triple',
      ],
    },
  },
  {
    type: 'title',
    content: {
      title: 'Sensors calibrated — Module 6',
      subtitle: 'Trust nothing from the wire until you parse it',
      icon: 'check-circle',
    },
  },
];
