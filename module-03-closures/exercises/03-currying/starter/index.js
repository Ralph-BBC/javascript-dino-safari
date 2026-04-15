import { gt } from './gt.js';
import { prop } from './prop.js';

const dinos = [
  { name: 'Rex', dangerLevel: 5, weightKg: 8000 },
  { name: 'Compy', dangerLevel: 1, weightKg: 3 },
  { name: 'Raptor', dangerLevel: 4, weightKg: 80 },
];

const isDangerous = gt(3);
console.log('Dangerous:', dinos.filter((d) => isDangerous(d.dangerLevel)));

const getName = prop('name');
console.log('Names:', dinos.map(getName));
