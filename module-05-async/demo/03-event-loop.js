console.log('\n--- Event loop ordering (approximate) ---\n');
console.log('sync 1');

setTimeout(() => console.log('timeout'), 0);
setImmediate?.(() => console.log('setImmediate'));

Promise.resolve().then(() => console.log('promise microtask'));

queueMicrotask(() => console.log('queueMicrotask'));

process.nextTick(() => console.log('nextTick'));

console.log('sync 2');

await new Promise((r) => setTimeout(r, 50));
console.log('after tick');
