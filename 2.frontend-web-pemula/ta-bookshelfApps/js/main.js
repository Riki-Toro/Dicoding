const UNCOMPLETED_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_BOOK_ID = "completeBookshelfList";


function buatKotak( judul, penulis, tahun) {
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
    kontainer.append(textJudul, textPenulis, textTahun, divTombol);



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
function buatTombol(red, eventListener) {
    const tombol = document.createElement("button");
    tombol.innerText = "Hapus buku";
    tombol.classList.add(red);
    tombol.addEventListener('click', function(event) {
        eventListener(event);
    });
    return tombol;
}


function tambahToSelesai(taskElement) {
    taskElement.remove(); //untuk menghapus todo yang belum selesai.
}


function cekTombol() {
    return buatTombol('red', function(event) {
        tambahToSelesai(event.target.parentElement.parentElement);
    });
}