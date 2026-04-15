import { describe, expect, it } from 'vitest';
import { curry } from './curry.js';
import { gt } from './gt.js';
import { prop } from './prop.js';

describe('03-currying', () => {
  describe('curry', () => {
    it('transforms a two-arg function into f(a)(b)', () => {
      const add = curry((a, b) => a + b);
      expect(add(1)(2)).toBe(3);
    });

    it('returns a function after the first call', () => {
      const add = curry((a, b) => a + b);
      expect(typeof add(1)).toBe('function');
    });
  });

  describe('gt', () => {
    it('returns true when value exceeds threshold', () => {
      expect(gt(3)(5)).toBe(true);
    });

    it('returns false when value equals threshold', () => {
      expect(gt(3)(3)).toBe(false);
    });

    it('returns false when value is below threshold', () => {
      expect(gt(3)(1)).toBe(false);
    });

    it('works with filter to find dangerous dinos', () => {
      const levels = [1, 2, 4, 5];
      expect(levels.filter(gt(3))).toEqual([4, 5]);
    });
  });

  describe('prop', () => {
    it('extracts a named property', () => {
      expect(prop('name')({ name: 'Rex' })).toBe('Rex');
    });

    it('works with map to extract values', () => {
      const dinos = [{ name: 'Rex' }, { name: 'Blue' }];
      expect(dinos.map(prop('name'))).toEqual(['Rex', 'Blue']);
    });
  });
});
