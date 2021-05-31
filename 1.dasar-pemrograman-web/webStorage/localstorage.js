const cacheKey = "NUMBER";
if( typeof(Storage) !== "undefined" ) {

    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if( localStorage.getItem(cacheKey) === "undefined" ) {

        // Jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey, 0);
    }

    const span = document.querySelector('.kali');
    const klik = document.querySelector('.klik');
    const hapus = document.querySelector('.hapus');

    klik.addEventListener('click', function(even) {
        let number = localStorage.getItem(cacheKey);
        number++;
        localStorage.setItem(cacheKey, number);
        span.innerText = localStorage.getItem(cacheKey);
    });

    hapus.addEventListener('click', function(even) {
        localStorage.removeItem(cacheKey);
    });

} else {
    alert("Browser tidak mendukung Web Storage!");
}