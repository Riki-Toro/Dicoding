function dropdown() {
    document.getElementById('dropKonten').classList.toggle('tampil');
}

window.onclick = function(event) {
    if(!event.target.matches('.tombolDrop')) {
        let dropdowns = document.getElementsByClassName('dropKonten');
        var i;
        for(i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('tampil')) {
                openDropdown.classList.remove('tampil');
            }
        }
    }
}