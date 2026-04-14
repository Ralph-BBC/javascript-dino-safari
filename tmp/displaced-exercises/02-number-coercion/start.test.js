import { describe, expect, it } from 'vitest';
import { validateReading } from './start.js';

describe('02-number-coercion', () => {
  it('passes through finite numbers', () => {
    expect(validateReading(0)).toBe(0);
    expect(validateReading(-3.5)).toBe(-3.5);
  });

  it('parses numeric strings', () => {
    expect(validateReading('42')).toBe(42);
    expect(validateReading('  12.5 \n')).toBe(12.5);
  });

  it('rejects nullish, empty, NaN, non-finite', () => {
    expect(validateReading(undefined)).toBeNull();
    expect(validateReading(null)).toBeNull();
    expect(validateReading('')).toBeNull();
    expect(validateReading('   ')).toBeNull();
    expect(validateReading('oops')).toBeNull();
    expect(validateReading(NaN)).toBeNull();
    expect(validateReading(Infinity)).toBeNull();
    expect(validateReading(-Infinity)).toBeNull();
  });
});
