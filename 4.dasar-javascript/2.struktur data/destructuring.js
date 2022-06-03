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
console.log(localNamaDepan, localBelakang , localUmur);

console.log('----------------------------destructuring object----------------------------');
console.log('');

// destructuring array





console.log('----------------------------destructuring array----------------------------');
console.log('');