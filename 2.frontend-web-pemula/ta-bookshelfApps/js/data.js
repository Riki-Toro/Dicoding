const STORAGE_KEY = 'RIKIBOOK_APPS';

let books = [];

function cekStorage() {
    if( typeof(Storage) === "undefined" ) {
        alert('browser anda tidak mendukung web storage!');
        return false;
    }
    return true;
}
// console.log(books);

function simpanData() { //saveData()
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("datadisimpan"));
}


function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);

    let data = JSON.parse(serializedData);

    if( data !== null ) {
        books = data;
    }

    document.dispatchEvent(new Event("dataloaded"));
}


function updateDataToStorage() {
    if( cekStorage() ) {
        simpanData();
    }
}

function composeBookObjek(judul, penulis, tahun, isCompleted) {
    return {
        id : +new Date(),
        judul,
        penulis,
        tahun,
        isCompleted
    };
}