// const {coffeStock, isCoffeeMachineReady} = require('./state');

// const makeCoffe = (type, miligrams) => {
//     if(coffeStock[type] >= miligrams) {
//         console.log('Kopi berhasil dibuat!');
//     } else {
//         console.log('Biji kopi habis!');
//     }
// }

// makeCoffe('robusta', 80);
// console.log(isCoffeeMachineReady);

import {coffeStock as stock, isCoffeeMachineReady} from "./state.js";

// const displayStock = stock => {
//     for(const type in stock) {
//         console.log(type);
//     }
// }

// displayStock(coffeStock);

console.log(stock);
console.log(isCoffeeMachineReady);