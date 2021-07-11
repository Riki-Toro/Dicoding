const STORAGE_KEY = "TODO_APPS"; // Berfungsi untuk menyediakan key yang digunakan untuk mengakses data pada local storage

let todos = []; //Sebuah global variable yang digunakan untuk menyimpan data temporary dari TODO.


// Fungsi yang digunakan untuk mengecek dukungan web storage pada browser. Mengembalikan nilai false apabila tidak didukung.
function isStorageExist() {
    if( typeof(Storage) === "undefined" ) {
        alert("Browser kamu tidak mendukung local storage!");
        return false;
    }
    return true;
}


// Fungsi yang digunakan untuk menyimpan data TODO ke storage. Ia mengkonversikan data pada global variabel todo ke JSON-formatted string untuk disimpan. Setelah itu, fungsi ini mentrigger custom event ‘ondatasaved’
function saveData() {
    const parsed = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}


// Memuat data TODO dari web storage ke dalam variabel todos. Kemudian trigger custom event ‘ondataloaded’ agar kita bisa menggunakannya untuk load data pada aplikasi.
function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY);

    let data = JSON.parse(serializedData);

    if( data !== null ) {
        todos = data;
    }

    document.dispatchEvent(new Event("ondataloaded"));
}


// Fungsi yang digunakan sebagai perantara dalam menyimpan data, ia memastikan terlebih dahulu apakah web storage sudah didukung oleh browser sebelum memanggil saveData()
function updateDataToStorage() {
    if( isStorageExist() ) {
        saveData();
    }
}