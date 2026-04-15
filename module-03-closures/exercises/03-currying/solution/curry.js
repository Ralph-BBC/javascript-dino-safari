export function curry(fn) {
  return (a) => (b) => fn(a, b);
}
