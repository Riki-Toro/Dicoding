// object

const objek = {key1:'value1', key2:'value2'};

console.log(objek);

const user = {
    firstName: 'Riki',
    lastName: 'Widiantoro',
    age: 23,
    isMarried: false,
    'home world': 'Tatooline'
};

console.log(`Hallo, nama saya ${user.firstName} ${user.lastName}`); // dot operator
console.log(`Saya berumur ${user.age} tahun`);
console.log(`Saya tinggal di ${user['home world']}`); // bracket


// mengubah nilai properti di dalam object
const spaceship = {
    name: 'Millenium Falcon',
    manufacturer: 'Corellian Engineering Corporation',
    maxSpeed: 1200,
    color: 'Light gray'
};
spaceship.color = 'Glossy red';
spaceship['maxSpeed'] = 1400;

// jika properti baru tidak ada didalam object maka akan otomatis menambahkan
spaceship.class = 'Light freighter';

// menghapus property pada object menggunakan keyword delete
delete spaceship.manufacturer

console.log(spaceship);


console.log('----------------------------object----------------------------');
console.log('');