const sensors = [
  () => new Promise((r) => setTimeout(() => r('ridge-ok'), 30)),
  () => new Promise((_, rej) => setTimeout(() => rej(new Error('lagoon-offline')), 20)),
  () => new Promise((r) => setTimeout(() => r('valley-ok'), 10)),
];

const results = await Promise.allSettled(sensors.map((s) => s()));
console.log('\n--- allSettled ---');
console.log(results);

const winner = await Promise.race([
  new Promise((r) => setTimeout(() => r('slow'), 200)),
  new Promise((r) => setTimeout(() => r('fast'), 50)),
]);
console.log('race winner:', winner);

const c = new AbortController();
setTimeout(() => c.abort(), 25);
try {
  await new Promise((resolve, reject) => {
    c.signal.addEventListener('abort', () => reject(new Error('aborted')));
    setTimeout(resolve, 1000);
  });
} catch (e) {
  console.log('aborted flow:', e.message);
}
