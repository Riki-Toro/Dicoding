// const x = 3;
// const max = 5;
// const bobot = 20;

// const jum = (x / max) * bobot;

// console.log(jum);


const a11 = [4, 5, 3, 5, 1, 2, 5];
const nMaxC1C2C7 = 5;
const nMaxC3 = 4;
const nMinC4C5 = 1;
const nMinC6 = 2;

const bobot = [20, 20, 15, 10, 10, 10, 15];

const nPref = (
    ((a11[0] / nMaxC1C2C7)*bobot[0]) + 
    ((a11[1] / nMaxC1C2C7)*bobot[1]) +
    ((a11[2] / nMaxC3)*bobot[2]) +
    ((nMinC4C5 / a11[3])*bobot[3]) +
    ((nMinC4C5 / a11[4])*bobot[4]) +
    ((nMinC6 / a11[5])*bobot[5]) +
    ((a11[6] / nMaxC1C2C7)*bobot[6])
    );

console.log(nPref);