/**
 * @param {(a: any, b: any) => any} fn
 * @returns {(a: any) => (b: any) => any}
 */
export function curry(_fn) {
  void _fn;
  // TODO
  return () => () => undefined;
}
