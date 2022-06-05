// Closure
console.log('---------------------------- closure ----------------------------');
// Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure. Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel di lingkup induknya.
function init() {
    var names = 'Obi Wan';

    function greet() {
        console.log(`Hallo, ${names}`);
    }
    greet();
}
init();
// Fungsi init() memiliki variabel lokal name dan fungsi greet(). Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name. Itulah yang dimaksud dengan lexical scope.
console.log('');

function initt() {
    var nam = 'Obi Wan';
    function greett() {
        console.log(`Hallo, ${nam}`);
    }
    return greett;
}
let myFun = initt();
myFun();
// Kode di atas akan menghasilkan output yang sama. Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variabel name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di atas fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. Variabel pada mekanisme di atas telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.
console.log('');


let counter = 0;
let add = () => {
    return ++counter;
}
console.log(add());
console.log(add());
counter = 23;
console.log(add());
console.log('');


// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure:
let adt = () => {
    let coun = 0;
    return () => {
        return ++coun;
    }
}

let addd = adt();
console.log(addd());
console.log(addd());
console.log(addd());
console.log(addd());


console.log('');
console.log('');