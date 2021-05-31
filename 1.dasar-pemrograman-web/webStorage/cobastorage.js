const cacheKey = "NUMBER";
if( typeof(Storage) !== "undefined" ) {

    // pengecekkan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if( sessionStorage.getItem(cacheKey) === "undefined" ) {

        // Jika belum maka akan atur dengan nilai awal yakni 0
        sessionStorage.setItem(cacheKey, 0);
    }

    const span = document.querySelector('.kali');
    const klik = document.querySelector('.klik');

    klik.addEventListener('click', function(even) {
        let number = sessionStorage.getItem(cacheKey);
        number++;
        sessionStorage.setItem(cacheKey, number);
        span.innerText = sessionStorage.getItem(cacheKey);
    });
} else {
    alert("Browser tidak mendukung Web Storage!");
}