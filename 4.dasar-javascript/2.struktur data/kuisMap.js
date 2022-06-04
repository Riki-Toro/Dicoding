//  kuis array
/*
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

console.log('');
console.log('---------------------------- kuis map ----------------------------');
console.log('');

const currency = new Map([
    ['USD', 14000],
    ['JPY', 131],
    ['SGD', 11000],
    ['MYR', 3500]
]);
const priceInJPY = 5000;
console.log(currency);
let priceInIDR =  priceInJPY * currency.get('JPY');
console.log(priceInIDR);