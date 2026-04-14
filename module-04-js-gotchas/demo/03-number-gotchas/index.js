console.log('\n--- Number gotchas ---\n');
console.log('0.1 + 0.2 === 0.3 ?', 0.1 + 0.2 === 0.3);
// eslint-disable-next-line use-isnan -- intentional classroom demo
console.log('NaN === NaN ?', NaN === NaN);
console.log('Number.isNaN(NaN) ?', Number.isNaN(NaN));
const big = BigInt('9007199254740993');
console.log('BigInt sample:', big.toString());
const cents = (2.51 * 100).toFixed(0);
console.log('Bad cents from float 2.51*100:', cents);
