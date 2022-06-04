// WeakMap & WeakSet

// pakai map
let visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);                // Menambahkan user "Jonas"

jonas = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)
console.log('');
console.log('');


// pakai weekMap
import { inspect } from 'util';

let visitsCountMapp = new WeakMap(); // Menyimpan daftar user

function countUserr(user) {
    let count = visitsCountMapp.get(user) || 0;
    visitsCountMapp.set(user, count + 1);
}

let jonass = { name: "Jonass" };
countUserr(jonass);                // Menambahkan user "Jonas"

jonass = null;                    // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function() {
    console.log(inspect(visitsCountMapp, { showHidden: true }));
}, 10000);





console.log('---------------------------- WeakMap & WeakSet ----------------------------');
console.log('');