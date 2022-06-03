// spread operator ...
const makanan = ['Seafood', 'Salad', 'Nugget', 'Soup'];

// console.log(...makanan); // spread operator ... >> mengubah array menjadi string

const lain = ['Cake', 'Pie', 'Donut'];
const allMakanan = [...makanan, ...lain]; // manggabungkan 2 array

console.log(allMakanan);


// object literals dgn spread operator ...
const object1 = {
    namaDepan: 'Riki',
    umur: 23
};
const object2 = {
    namaBelakang: 'Widiantoro',
    status: false
};

const allObject = {
    ...object1,
    ...object2
};

console.log(allObject);

console.log('----------------------------spread operator----------------------------');
console.log('');