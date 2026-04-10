/**
 * Demo: explicit facades vs reaching into internals.
 */

import { buildShiftSummary } from './lib/reporting-facade.js';

const pings = [
  { zone: 'ridge', level: 2 },
  { zone: 'ridge', level: 5 },
  { zone: 'valley', level: 1 },
];

console.log('\n--- Module contracts demo ---');
console.log(buildShiftSummary(pings));
