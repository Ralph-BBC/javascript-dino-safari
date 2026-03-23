export function compareEquality(a, b) {
  return {
    loose: a == b,
    strict: a === b,
    objectIs: Object.is(a, b),
  };
}
