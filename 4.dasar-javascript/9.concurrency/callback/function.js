const orderCoffe = callback => {
    let coffe = null;
    console.log('Sedang membuat kopi, silakan tunggu...');
    setTimeout(() => {
        coffe = 'Kopi sudah jadi!';
        callback(coffe);
    }, 3000);
    // return coffe;
}

// const coffe = orderCoffe();
// console.log(coffe);

orderCoffe(coffe => {
    console.log(coffe);
});