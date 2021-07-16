const UNCOMPLETED_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_BOOK_ID = "completeBookshelfList";


function buatKotak(judul, penulis, tahun) {
    const textJudul = document.createElement('h3');
    textJudul.innerText = judul;
    const textPenulis = document.createElement('p');
    textPenulis.innerText = "Penulis : " + penulis ;
    const textTahun = document.createElement('p');
    textTahun.innerText = "Tahun : " + tahun;

    const divTombol = document.createElement('div');

    // memanggil fungsi cekTombol()
    divTombol.append(cekTombol());

    const kontainer = document.createElement('div');
    // kontainer.classList.add(book_shelf);
    kontainer.append(textJudul, textPenulis, textTahun, divTombol /*,cekTombol() */);



    return kontainer;
}




function tambahBuku() {

    const uncompleted = document.getElementById(UNCOMPLETED_BOOK_ID);

    const judul = document.getElementById('inputBookTitle').value;
    const penulis = document.getElementById('inputBookAuthor').value;
    const tahun = document.getElementById('inputBookYear').value;


    const book = buatKotak(judul, penulis, tahun);
    uncompleted.append(book);

}


// membuat tombol
function buatTombol(green, eventListener) {
    const tombol = document.createElement("button");
    tombol.innerText = "Selesai dibaca";
    tombol.classList.add(green);
    tombol.addEventListener('click', function(event) {
        eventListener(event);
    });
    return tombol;
}


// untuk menampilkan todo yang sudah ditandai sebagai todo yang telah selesai
function tambahToSelesai(taskElement) { // addtasktocompleted

    const taskJudul = taskElement.querySelector('.book_list > h3');
    const taskPenulis = taskElement.querySelector('.book_list > p');
    const taskTahun = taskElement.querySelector('.book_list > p');

    const newBook = buatKotak(taskJudul, taskPenulis, taskTahun);
    const listCompleted = document.getElementById(COMPLETED_BOOK_ID);

    listCompleted.append(newBook);

    taskElement.remove(); //untuk menghapus todo yang belum selesai.
}


function cekTombol() {
    return buatTombol('green', function(event) {
        tambahToSelesai(event.target.parentElement.parentElement);
    });
}


