// destructuring object
const profil = {
    namaDepan: 'Riki',
    namaBelakang: 'Widiantoro',
    umur: 23
};
console.log(profil);

const {namaDepan, namaBelakang, umur} = profil; // destructuring object -> Dalam destructuring object, kita bisa menentukan salah satu nilai yang ingin kita desktrukturisasikan. Sehingga kita tidak perlu membuat variabel sebanyak properti yang dimiliki objeknya
console.log(namaDepan, namaBelakang, umur);
console.log('');



// destructuring assignment ({code destructuring object})
const makanann = {
    nama: 'soto',
    belakang: 'enak',
    harga: 20000
}; 

let nama = 'uwuu';
let harga = 1000;

({nama, harga} = makanann); // yg ditampilkan di console

console.log(nama, harga);
console.log('');



// default values -> nilai undefined jika tidak diberi nilai default
const obj = {
    namee: 'Kaneki',
    namae: 'Ken',
    umuru: 23
};

const {namee, namae, umuru, kawin = false} = obj;
console.log(namee, namae, umuru, kawin);
console.log('');



// Assigning to Different Local Variable Names
const objj = {
    nameee: 'Kaneki',
    namaee: 'Ken',
    umuruu: 23
};

const {nameee: localNamaDepan, namaee: localBelakang, umuruu: localUmur} = objj;
console.log(localNamaDepan, localBelakang , localUmur); // harus ada kata local diikuti nama nya

console.log('----------------------------destructuring object----------------------------');
console.log('');
console.log('');





// destructuring array
const favorite = ['Seafood', 'Salad', 'Nugget', 'Soup'];

const[firstFood, secondFood, thirdFood, fourthFood] = favorite;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);
console.log('');


// memilih nilai pada index tertentu untuk destrukturisasi pada array
const anime = ['snk', 'jujutsu', 'one piece', 'bnh'];

const[ , ,ketiga ] = anime;
console.log(ketiga);
console.log('');


// Destructuring Assignment
let myFood = 'Ice Cream';
let herFood = 'Noodles';

[myFood, herFood] = favorite;
console.log(myFood);
console.log(herFood);
console.log('');


// sebelum ada es6
var a = 1;
var b = 2;
var temp;

console.log("sebelum ada es6");
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
console.log('');

// setelah ada es6
let c = 1;
let d = 2;

console.log("setelah ada es6");
console.log("Sebelum swap");
console.log("Nilai a: " + c);
console.log("Nilai b: " + d);

[c, d] = [d, c]

console.log("Setelah swap");
console.log("Nilai a: " + c);
console.log("Nilai b: " + d);
console.log('');


// Default Values
const fav = ['rujak'];
const[pertama, kedua = 'mie ayam'] = fav; // memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.

console.log(pertama);
console.log(kedua);


console.log('----------------------------destructuring array----------------------------');
console.log('');