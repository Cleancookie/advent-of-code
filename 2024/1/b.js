const fs = require('fs');

let file = fs.readFileSync('./b-input.txt', 'utf8').trim();
let lines = file.split('\n').map((line) => line.trim());

let listOne = [];
let listTwo = [];
lines.forEach((line) => {
    let [a, b] = line.split('   ').map(Number);
    listOne.push(a);
    listTwo.push(b);
});

let answer = listOne.reduce((acc, num, i) => {
    const count = listTwo.filter((num2) => num2 === num).length;
    return acc + (count * num);
}, 0);

console.log(answer);
