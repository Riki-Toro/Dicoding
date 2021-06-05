function dropdown() {
    document.getElementById('dropKonten').classList.toggle('tampil');
}

window.onclick = function(event) {
    if(!event.target.matches('.tombolDrop')) {
        let dropdrop = document.getElementsByClassName('dropKonten');
        let i;
        for(i = 0; i < dropdowns.length; i++) {
            let bukaDropdown = dropdrop[i];
            if(bukaDropdown.classList.contains('tampil')) {
                bukaDropdown.classList.remove('tampil');
            }
        }
    }
}