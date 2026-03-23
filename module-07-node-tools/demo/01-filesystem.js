import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scratch = path.join(__dirname, 'scratch-fs-demo');

await mkdir(scratch, { recursive: true });
const logPath = path.join(scratch, 'sightings.ndjson');
await writeFile(logPath, '{"id":"1"}\n', { flag: 'a' });
const txt = await readFile(logPath, 'utf8');
const files = await readdir(scratch);

console.log('\n--- Filesystem demo ---');
console.log('log contents:', JSON.stringify(txt));
console.log('dir listing:', files);
