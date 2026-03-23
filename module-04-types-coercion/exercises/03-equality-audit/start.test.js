import { describe, expect, it } from 'vitest';
import { compareEquality } from './start.js';

describe('03-equality-audit', () => {
  it('null vs undefined', () => {
    expect(compareEquality(null, undefined)).toEqual({
      loose: true,
      strict: false,
      objectIs: false,
    });
  });

  it('NaN', () => {
    expect(compareEquality(NaN, NaN)).toEqual({
      loose: false,
      strict: false,
      objectIs: true,
    });
  });

  it('zero vs negative zero', () => {
    expect(compareEquality(0, -0)).toEqual({
      loose: true,
      strict: true,
      objectIs: false,
    });
  });
});
