import { describe, expect, it } from 'vitest';
import { makeRoutePreview, memoize } from './start.js';

describe('03-memoized-tracker', () => {
  it('memoize caches per arg', () => {
    let calls = 0;
    const fn = memoize((x) => {
      calls++;
      return x * 2;
    });
    expect(fn(3)).toBe(6);
    expect(fn(3)).toBe(6);
    expect(fn(4)).toBe(8);
    expect(calls).toBe(2);
  });

  it('makeRoutePreview memoizes expensive work', () => {
    const { preview, getCallCount } = makeRoutePreview();
    expect(preview('A')).toBe('ROUTE:A');
    expect(preview('A')).toBe('ROUTE:A');
    expect(preview('B')).toBe('ROUTE:B');
    expect(getCallCount()).toBe(2);
  });
});
