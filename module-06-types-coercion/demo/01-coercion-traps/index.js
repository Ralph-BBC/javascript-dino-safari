const nullish = null;
const undef = undefined;
const emptyArr = [];

console.log('\n--- Coercion traps (safari sensors) ---\n');
console.log('"5" + 3        =>', '5' + 3);
console.log('"5" - 3        =>', '5' - 3);
console.log('null == undefined =>', nullish == undef);
console.log('null === undefined =>', nullish === undef);
console.log('[] == false    =>', emptyArr == false);
console.log('Boolean([])    =>', Boolean(emptyArr));
console.log('Number("")     =>', Number(''));
console.log('Number("  ")   =>', Number('  '));
