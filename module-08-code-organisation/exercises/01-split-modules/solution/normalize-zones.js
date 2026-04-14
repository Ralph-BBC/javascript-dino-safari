export function normalizeZoneKey(raw) {
  return String(raw).trim().toLowerCase();
}

export function uniqueZonesUpperSorted(zonesRaw) {
  const seen = new Set();
  for (const raw of zonesRaw) {
    const key = normalizeZoneKey(raw);
    if (key) seen.add(key);
  }
  return [...seen].map((z) => z.toUpperCase()).sort();
}
