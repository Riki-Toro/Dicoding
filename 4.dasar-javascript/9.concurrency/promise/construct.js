// const coffe = new Promise();

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if(isCoffeeMakerReady) {
        resolve('Kopi berhasil dibuat');
    } else {
        reject('Mesin kopi tidak bisa digunakan');
    }
}

const makeCoffe = () => {
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffe();
console.log(coffeePromise);