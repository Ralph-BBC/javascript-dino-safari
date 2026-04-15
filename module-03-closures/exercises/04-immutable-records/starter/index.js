import { bumpDangerLevel, renameZone } from './record-transforms.js';

const rex = { name: 'Rex', zone: 'CV', dangerLevel: 4, tags: ['apex'] };

const bumped = bumpDangerLevel(rex, 1);
console.log('Original:', rex);
console.log('After bump:', bumped);

const moved = renameZone(rex, 'Quarantine Bay');
console.log('After rename:', moved);
