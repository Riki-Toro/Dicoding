// Konsep-Konsep Functional Programming
console.log('-------------------------------- Konsep-Konsep Functional Programming --------------------------------');
console.log('');


// Pure Function

// impure function (lawan dari pure function)
let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}
console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah
console.log(hitungLuasLingkaran(4)); // 80
console.log('');


// pure function
const luasLingkaran = (jariJari) => {
    return 3.14 * (jariJari * jariJari); 
}

console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(4)); // 50.24
console.log(luasLingkaran(8)); // 200.96
console.log(luasLingkaran(8)); // 200.96
console.log('');



// impure function (lawan dari pure function)
const createPersonWithAge = (age, person) => {
    person.age = age;
    return person;
};

const person = {
    name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
    person,
    newPerson
});


// pure function
const personWithAgee = (age, personn) => {
    return { ...personn, age };
};

const personn = {
    name: 'Bobo'
};
const newPersonn = personWithAgee(18, personn);
console.log({
    personn,
    newPersonn
});
console.log('');



// Immutability
// cara lama
const user = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}
const renameLastNameUser = (newLastName, user) => {
    user.lastName = newLastName;
}
renameLastNameUser('Potter', user);
console.log(user);


// cara functional programming
const userr = {
    firstname: 'Harry',
    lastName: 'Protter', // ups, typo!
}
const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}
const newUser = createUserWithNewLastName('Potter', userr);
console.log(newUser);
console.log('');



// rekursif
const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
};

countDown(10);
console.log('');



// Higher-Order Function
const hello = () => {
    console.log('Hello!')
};

const say = (someFunction) => {
    someFunction();
}

const sayHello = () => {
    return () => {
        console.log('Hello!');
    }
}

hello();
say(hello);
sayHello()();


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
    const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
        return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
    }

    return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});