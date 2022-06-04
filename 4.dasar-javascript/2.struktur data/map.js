// map = adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.

// Apabila ingin menetapkan nilai dari Map secara langsung, gunakan array multi dimensi [[]] array didalam array
const myMap = new Map([
    ['1', 'a string key'],
    [1, 'a number key'],
    [true, true]
]);
console.log(myMap);
console.log('');

// mendapatkan nilainya berdasarkan key tertentu dengan metode get()
// menambahkan pasangan key-value baru gunakan metode set()
const capital = new Map([
    ['Jakarta', 'Indonesia'],
    ['London', 'Inggris'],
    ['Tokyo', 'Japan'],
]);
console.log(capital.size);
console.log(capital.get('Tokyo'));
capital.set('New Delhi', 'India')
console.log(capital.size);
console.log(capital.get('New Delhi'));

console.log('');
console.log(capital.has('New Delhi'));
console.log(capital.delete('Jakarta'));
console.log(capital);

console.log('---------------------------- map ----------------------------');
console.log('');


// set
// Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.
const numberSet = new Set([1, 4, 6, 4, 1]);
console.log(numberSet);

// Untuk menambahkan data ke dalam Set kita bisa memanfaatkan fungsi add().
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);
console.log(numberSet);

numberSet.delete(4);
console.log(numberSet);

console.log('---------------------------- set ----------------------------');
console.log('');