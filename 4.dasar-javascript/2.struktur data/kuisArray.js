//  kuis array
/*
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

console.log('');
console.log('---------------------------- kuis array ----------------------------');
console.log('');

const eventNumber = [];

for(let i = 1; i <= 100; i++) {
    if(i % 2 == 0) {
        eventNumber.push(i);
    }
}

console.log(eventNumber);