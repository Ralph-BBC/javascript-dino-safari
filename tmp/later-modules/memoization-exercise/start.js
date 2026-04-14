/**
 * @template T
 * @param {(arg: any) => T} fn
 */
export function memoize(_fn) {
  void _fn;
  // TODO
  return () => {};
}

export function makeRoutePreview() {
  // TODO
  return {
    preview() {
      return '';
    },
    getCallCount() {
      return 0;
    },
  };
}
