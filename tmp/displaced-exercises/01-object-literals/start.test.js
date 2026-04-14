import { describe, expect, it } from 'vitest';
import {
  buildCoercedKeyExample,
  createPaddock,
  createTelemetryRow,
  forInKeysAreStrings,
  noteSighting,
  toBracketKeyString,
} from './start.js';

describe('01-object-literals', () => {
  it('createPaddock builds a literal with dot-friendly keys', () => {
    const paddock = createPaddock('CV-7', 'Triceratops', 4);
    expect(paddock).toEqual({
      code: 'CV-7',
      species: 'Triceratops',
      headcount: 4,
    });
    expect(paddock.code).toBe('CV-7');
    expect(paddock['code']).toBe('CV-7');
  });

  it('numeric literal keys stringify; same slot as string key', () => {
    const row = createTelemetryRow();
    expect(row[1]).toBe('motion');
    expect(row['1']).toBe('motion');
    expect(row[2]).toBe('heat');
    expect(Object.keys(row)).toEqual(['1', '2']);
  });

  it('toBracketKeyString matches bracket coercion for ordinary values', () => {
    expect(toBracketKeyString(1)).toBe('1');
    expect(toBracketKeyString(true)).toBe('true');
    expect(toBracketKeyString(null)).toBe('null');
    expect(toBracketKeyString(undefined)).toBe('undefined');
    expect(toBracketKeyString('north')).toBe('north');
  });

  it('buildCoercedKeyExample uses string keys after coercion', () => {
    const mixed = buildCoercedKeyExample();
    expect(mixed[true]).toBe(mixed['true']);
    expect(mixed[null]).toBe(mixed['null']);
    expect(Object.keys(mixed)).toEqual(['true', 'null', 'undefined']);
    expect(mixed['undefined']).toBe('undefined key');
  });

  it('noteSighting builds zone buckets on a plain object', () => {
    const zones = {};
    noteSighting(zones, 'north', 'Rex');
    noteSighting(zones, 'north', 'Blue');
    noteSighting(zones, 'south', 'Tank');
    expect(zones.north).toEqual(['Rex', 'Blue']);
    expect(zones['south']).toEqual(['Tank']);
  });

  it('for...in keys are always strings for plain objects', () => {
    expect(forInKeysAreStrings({})).toBe(true);
    expect(forInKeysAreStrings(createPaddock('A', 'B', 1))).toBe(true);
    expect(forInKeysAreStrings(buildCoercedKeyExample())).toBe(true);
  });
});
