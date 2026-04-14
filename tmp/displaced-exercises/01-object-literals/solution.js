/**
 * @param {string} code
 * @param {string} species
 * @param {number} headcount
 */
export function createPaddock(code, species, headcount) {
  return { code, species, headcount };
}

/** @returns {{ 1: string; 2: string }} */
export function createTelemetryRow() {
  return { 1: 'motion', 2: 'heat' };
}

/**
 * @param {unknown} value
 * @returns {string}
 */
export function toBracketKeyString(value) {
  return String(value);
}

/** @returns {Record<string, string>} */
export function buildCoercedKeyExample() {
  const o = {};
  o[true] = 'bool key';
  o[null] = 'null key';
  o[undefined] = 'undefined key';
  return o;
}

/**
 * @param {Record<string, string[]>} sightingsByZone
 * @param {string} zoneId
 * @param {string} label
 */
export function noteSighting(sightingsByZone, zoneId, label) {
  if (!sightingsByZone[zoneId]) sightingsByZone[zoneId] = [];
  sightingsByZone[zoneId].push(label);
}

/**
 * @param {object} obj
 * @returns {boolean}
 */
export function forInKeysAreStrings(obj) {
  for (const k in obj) {
    if (typeof k !== 'string') return false;
  }
  return true;
}
