import { normalizeZoneKey } from './normalize-zones.js';

export function countHighAlertsByZone(pings, threshold = 4) {
  const alertsByZone = {};
  for (const p of pings) {
    const key = normalizeZoneKey(p.zone);
    if (!key) continue;
    if (p.level >= threshold) {
      alertsByZone[key] = (alertsByZone[key] ?? 0) + 1;
    }
  }
  return alertsByZone;
}
