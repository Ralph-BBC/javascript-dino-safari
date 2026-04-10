/**
 * Demo: ESM workflow — default vs named exports, static JSON import.
 * Run: node module-01-modern-javascript/demo/04-esm-workflow
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dinosaurs = JSON.parse(
  readFileSync(path.join(__dirname, '../../../data/dinosaurs.json'), 'utf8'),
);

export const PARK_NAME = 'Dinosaur Safari Research Park';

export function countActiveCarnivores(dinos) {
  return dinos.filter((d) => d.isActive && d.diet === 'carnivore').length;
}

export default function printParkBriefing() {
  const activeCarnivores = countActiveCarnivores(dinosaurs);
  console.log('\n');
  console.log(`   ${PARK_NAME}`);
  console.log(`   Registered dinosaurs: ${dinosaurs.length}`);
  console.log(`   Active carnivores in field: ${activeCarnivores}`);
  console.log(`   Status: all zones nominal (probably).`);
  console.log('\n');
}

printParkBriefing();
