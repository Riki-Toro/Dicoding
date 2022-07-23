// Throwing Errors
console.log('-------------------------------- Throwing Errors --------------------------------');
console.log('');

// let json = '{ "name": "Yoda", "age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// let json = '{ bad json }';
// let json = '{ "age": 20 }';

// try {
//     let user = JSON.parse(json);
 
//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }



// mengimplementasikan throw untuk menimbulkan eror kita sendiri
// let json = '{ "age": 20 }';
 
// try {
//     let user = JSON.parse(json);
 
//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }
 
//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }


// Sekarang anggaplah json sudah sesuai, tetapi ternyata ada eror lain yang terjadi, misalnya karena variabel yang belum terdefinisi.
let json = '{ "name": "Yoda", "age": 20 }';
 
try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Yoda
    console.log(user.age);  // 20
} catch (error) {
    // Eror berhasil ditangani, tetapi konsol tetap menampilkan pesan “JSON Error”, lantas bagaimana kita bisa menampilkan pesan eror sesuai eror yang muncul?

    // Jawabannya adalah dengan if statement.
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}
