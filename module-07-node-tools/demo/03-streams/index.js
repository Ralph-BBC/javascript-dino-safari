import { createReadStream } from 'node:fs';
import path from 'node:path';
import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';
import { fileURLToPath } from 'node:url';
import { Writable } from 'node:stream';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const fixture = path.join(__dirname, '../exercises/03-stream-processor/fixture.csv');

const loud = new Transform({
  transform(chunk, _enc, cb) {
    cb(null, chunk.toString('utf8').toUpperCase());
  },
});

const sink = new Writable({
  write(chunk, _enc, cb) {
    process.stdout.write(chunk, cb);
  },
});

console.log('\n--- Streams demo (CSV uppercased to stdout) ---\n');
await pipeline(createReadStream(fixture), loud, sink);
