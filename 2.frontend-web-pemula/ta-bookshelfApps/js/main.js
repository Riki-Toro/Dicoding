const UNCOMPLETED_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_BOOK_ID = "completeBookshelfList";


function buatKotak(judul, penulis, tahun, isComplete) {
    const textJudul = document.createElement('h3');
    textJudul.innerText = judul;
    // const textPenulis = document.createElement('p');
    // textPenulis.innerText = "Penulis : " + penulis;
    // const textTahun = document.createElement('p');
    // textTahun.innerText = "Tahun : " + tahun;

    const textPenulis = document.createElement('p');
    textPenulis.innerHTML = "Penulis : <span>" + penulis + "</span>";
    const textTahun = document.createElement('p');
    textTahun.innerHTML = "Tahun : <span>" + tahun + "</span>";


    textPenulis.classList.add('penulis');
    textTahun.classList.add('tahun');


    const divTombol = document.createElement('div');

    // memanggil fungsi cekTombol()
    // divTombol.append(cekTombol());

    const kontainer = document.createElement('div');
    // kontainer.classList.add(book_shelf);
    kontainer.append(textJudul, textPenulis, textTahun, divTombol /*,cekTombol() */);

    if( isComplete ) {
        divTombol.append(
            kembaliBelumSelesai(),
            tambahTrashTombol()
            );
    } else {
        divTombol.append(
            cekTombol(), 
            tambahTrashTombol());
    }


    return kontainer;
}

function cekTombol() { //createCheckButton()
    return buatTombolSelesai('green', function(event) {
        tambahToSelesai(event.target.parentElement.parentElement);
    });
}


function tambahTrashTombol() { //createTrashButton()
    return buatTombolHapus('red', function(event) {
        hapusSetelahSelesai(event.target.parentElement.parentElement);
    });
}

function kembaliBelumSelesai() { // createUndoButton()
    return buatTombolKembali('green', function(event) {
        belumSelesaiToKembali(event.target.parentElement.parentElement);
    });
}


function tambahBuku() {

    const uncompleted = document.getElementById(UNCOMPLETED_BOOK_ID);

    const judul = document.getElementById('inputBookTitle').value;
    const penulis = document.getElementById('inputBookAuthor').value;
    const tahun = document.getElementById('inputBookYear').value;


    const book = buatKotak(judul, penulis, tahun, false);
    uncompleted.append(book);

}


// membuat tombol
function buatTombolSelesai(buttonTypeClass, eventListener) {
    const tombol = document.createElement("input");
    tombol.setAttribute('type', 'submit');
    tombol.setAttribute('value', 'Selesai dibaca');
    tombol.classList.add(buttonTypeClass);
    tombol.addEventListener('click', function(event) {
        eventListener(event);
    });
    return tombol;
}
function buatTombolHapus(buttonTypeClass, eventListener) {
    const tombol = document.createElement("input");
    tombol.setAttribute('type', 'submit');
    tombol.setAttribute('value', 'Hapus Buku');
    tombol.classList.add(buttonTypeClass);
    tombol.addEventListener('click', function(event) {
        eventListener(event);
    });
    return tombol;
}
function buatTombolKembali(buttonTypeClass, eventListener) {
    const tombol = document.createElement("input");
    tombol.setAttribute('type', 'submit');
    tombol.setAttribute('value', 'Belum Selesai dibaca');
    tombol.classList.add(buttonTypeClass);
    tombol.addEventListener('click', function(event) {
        eventListener(event);
    });
    return tombol;
}


// untuk menampilkan todo yang sudah ditandai sebagai todo yang telah selesai
function tambahToSelesai(taskElement) { // addtasktocompleted

    const taskJudul = taskElement.querySelector('h3').innerText;
    const taskPenulis = taskElement.querySelector('.penulis > span').innerText;
    const taskTahun = taskElement.querySelector('.tahun > span').innerText;

    console.log(taskJudul, taskPenulis, taskTahun);

    const newBook = buatKotak(taskJudul, taskPenulis, taskTahun, true);
    const listCompleted = document.getElementById(COMPLETED_BOOK_ID);

    listCompleted.append(newBook);

    taskElement.remove(); //untuk menghapus todo yang belum selesai.
}

function belumSelesaiToKembali(taskElement) { //undoTaskFromCompleted()
    const listUncompleted = document.getElementById(UNCOMPLETED_BOOK_ID);
    const taskJudul = taskElement.querySelector('h3').innerText;
    const taskPenulis = taskElement.querySelector('.penulis > span').innerText;
    const taskTahun = taskElement.querySelector('.tahun > span').innerText;

    console.log(taskJudul, taskPenulis, taskTahun);

    const newBook = buatKotak(taskJudul, taskPenulis, taskTahun, false);

    listUncompleted.append(newBook);

    taskElement.remove();
}



function hapusSetelahSelesai(taskElement) { //removeTaskFromCompleted()
    taskElement.remove();
}



