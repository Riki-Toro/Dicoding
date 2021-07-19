const STORAGE_KEY = 'BOOK_APPS';

let books = [];

function cekStorage() {
    if( typeof(Storage) === "undefined" ) {
        alert('browser anda tidak mendukung web storage!');
        return false;
    }
    return true;
}
console.log(cekStorage());