// Paradigma Functional Programming
console.log('-------------------------------- Paradigma Functional Programming --------------------------------');
console.log('');


// cara imperatif
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for( let i = 0; i < names.length; i++ ) {
    newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);



// cara deklaratif
const namas = ['Riki', 'Widi', 'Anto', 'Toro'];

const pembungkusNama = namas.map((nama) => `${nama}`);

console.log(pembungkusNama);