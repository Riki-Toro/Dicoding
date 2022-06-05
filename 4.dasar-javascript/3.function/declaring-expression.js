// function declaring
console.log('---------------------------- function declaring ----------------------------');
function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4));


// function yg lebih fungsional
function greeting(name, language) {
    if(language === 'English') {
        console.log(`Good Morning ${name}!`);
    } else if(language === 'French') {
        console.log(`Bonjour ${name}!`);
    } else {
        console.log(`Selamat Pagi ${name}!`);
    }
}
greeting('Riki', 'English');


// function dapat menghasilkan output atau mengembalikan sebuah nilai
function multiply2(c, d) {
    return c + d;
}
let hasil = multiply2(5, 6);
console.log(hasil);

function greetingg(name, language) {
    if(language === 'English') {
        return `Good Morning ${name}!`;
    } else if(language === 'French') {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}
let ucapanSelamat = greetingg('Toro', 'French');
console.log(ucapanSelamat);


console.log('');
// function expression
console.log('---------------------------- function expression ----------------------------');

const greetinggg = function(name, language) {
    if(language === 'English') {
        return `Good Morning ${name}!`;
    } else if(language === 'French') {
        return `Bonjour ${name}!`;
    } else {
        return `Selamat Pagi ${name}!`;
    }
}
console.log(greetinggg('Widian', ''));
console.log('');
console.log('');