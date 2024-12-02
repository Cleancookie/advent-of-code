const fs = require('fs');

let file = fs.readFileSync('./a-input.txt', 'utf8').trim();
let lines = file.split('\n').map((line) => line.trim());

let listOne = [];
let listTwo = [];
lines.forEach((line) => {
    let [a, b] = line.split('   ').map(Number);
    listOne.push(a);
    listTwo.push(b);
});

listOne.sort((a, b) => a - b);
listTwo.sort((a, b) => a - b);

let diffs = [];
listOne.forEach((num, i) => {
    diffs.push(Math.abs(num - listTwo[i]));
})

const answer = diffs.reduce((acc, curr) => acc + curr, 0);

console.log(answer);
