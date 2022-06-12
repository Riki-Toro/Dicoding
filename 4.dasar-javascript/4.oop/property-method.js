// Property adalah atribut dari sebuah objek, property sendiri dapat berupa tipe data primitive--seperti yang sebelumnya dibahas-- bahkan bisa juga berbentuk object dan fungsi. Misalkan isi pesan, list penerima, data pengirim, perintah kirim, dll. Sebagai contoh:

// cara 1
// class Mail {
//     constructor() {
//         this.from = 'pengirim@dicoding.com';
//         this.contacts = [];
//         this.yourOtherProperty = 'the values';
//     }
//     sendMessage(msg, to) {
//         console.log(`you send: ${msg} to ${to} from ${this.from}`);
//         this.contacts.push(to); // menyimpan kontak baru
//     };
// }
 
// // cara 2
// function Mail() {
//     this.from = 'pengirim@dicoding.com';
//     this.contacts = [];
//     this.yourOtherPrototype = 'the values';
// };
 
// Mail.prototype.sendMessage = function (msg, to) {
//     console.log(`you send: ${msg} to  ${to} from ${this.from}`);
//     this.contacts.push(to); // menyimpan kontak baru
// };




// const mail1 = new Mail();
// mail1.from; // 'pengirim@dicoding.com'
// mail1.contacts; // ['penerima@dicoding.com']
// mail1.sendMessage('hallo', 'penerima@dicoding.com'); // method mengirim pesan


// bagaimana jika kita ingin mengubah attribute contacts pada class Mail menjadi tidak bisa diakses di luar class atau oleh objek yang menjadi instansiasi class tersebut?

/** 
cara 1, menggunakan var (hanya dapat digunakan pada penulisan kelas menggunakan statement `function`)
**/
// var contacts = [];
// // contoh
// function Mail() {
//     this.from = 'pengirim@dicoding.com';
//     var contacts = [];
// }
 
/**
cara 2, cara ini dapat digunakan pada penulisan kelas menggunakan statement `function` dan `class`
**/
// this._contacts = []
// // contoh
// class Mail {
//     constructor() {
//         this._contacts = [];
//         this.from = 'pengirim@dicoding.com';
//     }
// }
 
/** 
cara 3, menambahkan prefix # , cara ini dapat digunakan pada penulisan kelas menggunakan statement `class` saja 
  **/
// #contacts = [];
// // contoh
// class Mail {
//     #contacts = [];
//     constructor() {
//         this.from = 'pengirim@dicoding.com';
//     }
// }


console.log('-------------------------------- Property & Method --------------------------------');
console.log('');