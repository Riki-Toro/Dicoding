// Reusable Function
console.log('-------------------------------- Reusable Function --------------------------------');
console.log('');


// Array Map
console.log('-------------------------------- Array Map --------------------------------');
const newArray = ['Harry', 'Ron', 'Jeff', 'Thomas'].map((name) => { return `${name}!`});

console.log(newArray);


console.log('');
// Array Filter
console.log('-------------------------------- Array Filter --------------------------------');

const truthyArray = [1, '', 'Hallo', 0, null, 'Harry', 14].filter((item) => Boolean(item));

console.log(truthyArray);


const students = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];
const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);


console.log('');
// Array Reduce
console.log('-------------------------------- Array Reduce --------------------------------');
const studentss = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const totalScore = studentss.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);



console.log('');
// Array some
console.log('-------------------------------- Array some --------------------------------');
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);



console.log('');
// Array find
console.log('-------------------------------- Array find --------------------------------');
const studentsss = [
    {
        name: 'Harry',
        score: 60,
    },
    {
        name: 'James',
        score: 88,
    },
    {
        name: 'Ron',
        score: 90,
    },
    {
        name: 'Bethy',
        score: 75,
    }
];

const findJames = studentsss.find(student => student.name === 'James');
console.log(findJames);



console.log('');
// Array sort
console.log('-------------------------------- Array sort --------------------------------');
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]


const array2 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
    return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);



console.log('');
// Array every
console.log('-------------------------------- Array every --------------------------------');
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);



console.log('');
// Array forEach
console.log('-------------------------------- Array forEach --------------------------------');

// cara imperatif
console.log('cara imperatif');
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

for(let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}!`);
}

console.log('');
// cara deklaratif
console.log('cara deklaratif');
const namess = ['Harry', 'Ron', 'Jeff', 'Thomas'];

namess.forEach((name) => {
    console.log(`Hello, ${name}!`);
});

