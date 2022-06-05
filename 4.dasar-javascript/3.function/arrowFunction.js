// Arrow Function
console.log('---------------------------- arrow function ----------------------------');
// Apabila fungsi hanya memiliki satu parameter, maka kita bisa menghapuskan tanda kurung
const sayName = name => console.log(`nama saya ${name}`);
sayName('riki');


// jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong
const sayHello = () => console.log(`Selamat pagi semuanya!`);
sayHello();
console.log('');


// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
const multi = (a,b) => a * b;
console.log(multi(10, 2));

console.log('');
console.log('');