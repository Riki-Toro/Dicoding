let a = -100;
setInterval(function() {
    if(a!=0) {
        slide = document.getElementById('slider');
        slide.style = "margin-left:"+a+"%;transition: 1s ease-in;";

        if(a== -300) {
            a = 0;
        } else {
            a = a+ -100;
        }
        return a;

    } else {
        slide = document.getElementById('slider');
        slide.style = "margin-left:"+a+"%;";

        if(a== -300) {
            a=0;
        } else {
            a = a+ -100;
        }
        return a;
    }
}, 2000)