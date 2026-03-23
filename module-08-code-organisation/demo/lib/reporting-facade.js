import { countHighAlerts } from './tracking-stats.js';

export function buildShiftSummary(pings) {
  return {
    generatedAt: new Date().toISOString(),
    highAlerts: countHighAlerts(pings, 4),
  };
}
