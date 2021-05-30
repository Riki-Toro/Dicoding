// console.log('Selamat Anda berhasil menggunakan JavaScript pada Website!');

// // statment
// alert('terimakasih!');



// PROGRAM MENGUCAPKAN SELAMAT PAGI
const namaDepan = prompt('Tuliskan nama depan Anda: ');
const namaBelakang = prompt('Tuliskan nama belakang Anda: ');
const bahasa = prompt('Anda bisa berbahasa apa: ');

const program = {
    nama : {
        namaDepan,
        namaBelakang
    },
    language : bahasa
}

// console.log(program.nama.namaDepan);
// console.log(program.nama.namaBelakang);
// console.log(program.language);

if( program.language == "indonesia" ) {
    console.log("Halo, Selamat Pagi " + program.nama.namaDepan + " " + program.nama.namaBelakang + "!");
} else if( program.language == "jepang" ) {
    console.log("mosi mosi, Ohayo " + program.nama.namaDepan + " " + program.nama.namaBelakang + "!");
} else if( program.language == "inggris" ) {
    console.log("Hallo, Good Morning " + program.nama.namaDepan + " " + program.nama.namaBelakang + "!");
} else {
    console.log("Hallo " + program.nama.namaDepan + " " + program.nama.namaBelakang + "!");
}