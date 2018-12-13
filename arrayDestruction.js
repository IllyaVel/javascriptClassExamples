//Destructivnoe prisvaivanie Masivov
// let js,php,py,rb;
let [js,php,py,rb] = ['JS','PHP','Python','Ruby'];
console.log(js,php,py,rb);

console.log('----------');
console.log('**********');

let count = [3,4,[5,6]];
let [min,max,[high,higher]] = count;
console.log(min,max,high,higher);

console.log('**********');
console.log('----------');

function showArr([min,max]) {
    console.log(min + ' ' + max);
}
showArr([2,3]);

function getScore() {
    return [3,4,5];
}
let score = getScore();
console.log(score);
let [low,mi,_high] = getScore();
console.log(low,mi,_high);

let y = 'Yes';
let n = 'No';

[y,n] = [n,y];
console.log(y);
console.log(n);
