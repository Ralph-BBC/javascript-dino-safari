export function dollarsToCents(dollars) {
  return Math.round(dollars * 100);
}

export function sumTicketPricesCents(items) {
  return items.reduce((sum, item) => {
    const n = Number(item);
    if (!Number.isFinite(n)) return sum;
    return sum + Math.round(n * 100);
  }, 0);
}
