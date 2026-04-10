export function countHighAlerts(pings, threshold) {
  return pings.filter((p) => p.level >= threshold).length;
}
