const UNCOMPLETED_BOOK_ID = "incompleteBookshelfList";


function buatKotak( judul, penulis, tahun) {
    const textJudul = document.createElement('h3');
    textJudul.innerText = judul;
    const textPenulis = document.createElement('p');
    textPenulis.innerText = "Penulis : " + penulis ;
    const textTahun = document.createElement('p');
    textTahun.innerText = "Tahun : " + tahun;

    const kontainer = document.createElement('div');
    kontainer.append(textJudul, textPenulis, textTahun);

    return kontainer;
}




function tambahBuku() {

    const uncompleted = document.getElementById(UNCOMPLETED_BOOK_ID);

    const judul = document.getElementById('inputBookTitle').value;
    const penulis = document.getElementById('inputBookAuthor').value;
    const tahun = document.getElementById('inputBookYear').value;
    console.log("judul : " + judul);
    console.log("penulis : " + penulis);
    console.log("tahun : " + tahun);


    const book = buatKotak(judul, penulis, tahun);
    uncompleted.append(book);

}