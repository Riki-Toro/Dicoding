// function parameter
console.log('---------------------------- function parameter ----------------------------');
// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
const user = {
    id: 1,
    displayName: 'Kren',
    fullName: 'Kylo Ren'
};
function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`);
}
introduce(user);
console.log('');


// Default Parameters => ketika argumen lebih sedikit dari parameternya, maka parameter yang tidak terdefinisi akan bernilai undefined
console.log('---------------------------- default parameter ----------------------------');
function exponentFormula(baseNumber, exponent = 5) {
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}
exponentFormula(2);
console.log('');

// Rest Parameter
console.log('---------------------------- rest parameter ----------------------------');
function sum(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}
// console.log(sum(1, 2, 3, 4, 5, 6));
let hasilnya = sum(1, 2, 3, 4, 5, 6);
console.log(hasilnya);

console.log('');
console.log('');