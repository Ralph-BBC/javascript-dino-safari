function memoize(fn) {
  const cache = new Map();
  return function memoized(arg) {
    if (cache.has(arg)) return cache.get(arg);
    const v = fn(arg);
    cache.set(arg, v);
    return v;
  };
}

let calls = 0;
const expensive = (id) => {
  calls++;
  return `route-${id}`;
};

const cached = memoize(expensive);
console.log('\n--- Memoization demo ---');
console.log(cached('TRX-001'), cached('TRX-001'), 'calls:', calls);
