/**
 * Demo: Currying - transforming f(a, b) into f(a)(b).
 * Run: node module-03-closures/demo/03-currying
 */

console.log('\n--- Currying demo ---\n');

// --- 1. A simple curry helper ---
function curry(fn) {
  return (a) => (b) => fn(a, b);
}

const formatSighting = (zone, name) => `${name} spotted in ${zone}`;
const curriedSighting = curry(formatSighting);

const inValley = curriedSighting('Cretaceous Valley');
console.log(inValley('Rex'));
console.log(inValley('Compy'));
console.log(curriedSighting('Raptor Ridge')('Blue'));

// --- 2. Curried comparison helper ---
const gt = curry((threshold, value) => value > threshold);

const isDangerous = gt(3);
const isHeavy = gt(5000);

const dinos = [
  { name: 'Rex', dangerLevel: 5, weightKg: 8000 },
  { name: 'Compy', dangerLevel: 1, weightKg: 3 },
  { name: 'Raptor', dangerLevel: 4, weightKg: 80 },
];

console.log('\nDangerous dinos:', dinos.filter((d) => isDangerous(d.dangerLevel)).map((d) => d.name));
console.log('Heavy dinos:', dinos.filter((d) => isHeavy(d.weightKg)).map((d) => d.name));

// --- 3. Curried map transform ---
const prop = curry((key, obj) => obj[key]);
const getName = prop('name');

console.log('\nAll names:', dinos.map(getName));

console.log();
