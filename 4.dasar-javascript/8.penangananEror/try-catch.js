// Try and Catch
console.log('-------------------------------- Try and Catch --------------------------------');
console.log('');


try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Tidak terjadi eror, maka kode ini diabaikan");
}
console.log('');


try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log("Terjadi error!");  // (4)
}
console.log('');
// (Cobalah untuk menghapus sintaks try-catch dan melihat bagaimana aplikasi akan crash)
// console.log("Awal blok try");   // (1)
// errorCode;                      // (2)
// console.log("Akhir blok try");  // (3)
// console.log("Terjadi error!");  // (4)


try {
    console.log("Awal blok try");   // (1)
    errorCode;                      // (2)
    console.log("Akhir blok try");  // (3)
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log('');


try {
    console.log("Awal blok try");
    console.log("Akhir blok try");
} catch (error) {
    console.log("Baris ini diabaikan");
} finally {
    console.log("Akan tetap dieksekusi");
}