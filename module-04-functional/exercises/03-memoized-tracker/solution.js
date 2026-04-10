export function memoize(fn) {
  const cache = new Map();
  return (arg) => {
    if (cache.has(arg)) return cache.get(arg);
    const v = fn(arg);
    cache.set(arg, v);
    return v;
  };
}

export function makeRoutePreview() {
  let callCount = 0;
  const core = (id) => {
    callCount++;
    return `ROUTE:${id}`;
  };
  const preview = memoize(core);
  return {
    preview,
    getCallCount() {
      return callCount;
    },
  };
}
