/**
 * Demo: Map for zone -> dinos, Set for unique species tags.
 */
const zoneToDinos = new Map();
const speciesTags = new Set();

function registerInZone(zone, dino) {
  if (!zoneToDinos.has(zone)) zoneToDinos.set(zone, []);
  zoneToDinos.get(zone).push(dino.name);
  speciesTags.add(dino.species);
}

registerInZone('Cretaceous Valley', { name: 'Rex', species: 'Tyrannosaurus' });
registerInZone('Cretaceous Valley', { name: 'Chomper', species: 'Allosaurus' });
registerInZone('Herbivore Meadow', { name: 'Tank', species: 'Triceratops' });

console.log('\n--- Map / Set demo ---');
console.log('Valley residents:', zoneToDinos.get('Cretaceous Valley'));
console.log('Unique species count:', speciesTags.size);
