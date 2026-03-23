import { describe, expect, it } from 'vitest';
import { dollarsToCents, sumTicketPricesCents } from './start.js';

describe('02-ticket-cents', () => {
  it('dollarsToCents rounds', () => {
    expect(dollarsToCents(12.34)).toBe(1234);
    expect(dollarsToCents(0.01)).toBe(1);
    expect(dollarsToCents(10)).toBe(1000);
  });

  it('sumTicketPricesCents parses strings', () => {
    expect(sumTicketPricesCents(['12.34', '0.66'])).toBe(1300);
    expect(sumTicketPricesCents(['10', 'bad', '5.00'])).toBe(1500);
  });
});
