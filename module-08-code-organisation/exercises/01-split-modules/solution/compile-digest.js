import { countHighAlertsByZone } from './count-alerts.js';
import { uniqueZonesUpperSorted } from './normalize-zones.js';

export function compileDigest(zonesRaw, pings) {
  return {
    zones: uniqueZonesUpperSorted(zonesRaw),
    alertsByZone: countHighAlertsByZone(pings),
  };
}
