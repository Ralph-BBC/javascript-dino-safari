import http from 'node:http';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dinosaurs = JSON.parse(
  readFileSync(path.join(__dirname, '../../../data/dinosaurs.json'), 'utf8'),
);

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/dinosaurs') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(dinosaurs.slice(0, 3)));
    return;
  }
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'not_found' }));
});

server.listen(3456, () => {
  console.log('\nHTTP demo on http://127.0.0.1:3456/dinosaurs (Ctrl+C to exit)\n');
});
