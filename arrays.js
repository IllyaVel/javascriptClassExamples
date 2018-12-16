//Arrays
var user = new Array(); // <-- Empty array
var arr = []; // <-- Empty array

user[0] = 'Jack';
user[1] = 'Vika';
user[4] = 'Albert';
// console.log(user.length); //Output: 5;

// user.forEach((el) => {
//     console.log(el);
// }); // Output: 'Jack','Vika','Albert'

/*for(let i = 0; i < user.length; i++) {
    console.log(user[i]);
}*/ //Output: Jack,Vika,undefined,undefined,Albert

// console.log(user[3]); Output: undefined

//Array Methods
/* 1 --> (slice) <-- Copy array*/
var person = ['Albert','Jack'];
var people = person; //people[0] = 'Albert', people[1] = 'Jack'
//If we'll change any value of array person it will change value in array named people

function showArrayInfo(arrayToShow) {

    if(arrayToShow == person) {
        setTimeout(() => {
            arrayToShow.forEach((elements) => {
                console.log(elements);
            });
        },2000);
    } else if(arrayToShow == people) {
        setTimeout(() => {
            arrayToShow.forEach((elements) => {
                console.log(elements);
            });
        },3000);
    } else {
        console.error('No array was found');
    }
}
showArrayInfo(people); 

//Deep copy
var _user = ['Jack','Tom',true];

var _people = _user.slice();
_user[1] = 'Nick';

function showArray(arrToShow) {
    if(arrToShow == _user){
        arrToShow.forEach((element) => {
            console.log(element);
        });
    } else if(arrToShow == _people) {
        arrToShow.forEach((element) => {
            console.log(element);
        });
    } else {
        console.error('Empty');
    }
}
showArray(_people);
showArray(_user);

/* 2 --> (add,delete)  */
//push < Add elements at the end of array
var array = [];
array.push('Apple');
array.push('Watermelon');
console.log(array.length);
//pop < Remove last element at the array
array.pop(); // <-<-- Remove ['Watermelon']
console.log(array.length); // -<-<<-- Output: 1
//shift < Remove first element at the array
array.shift();
console.log(array.length); // <<--- Output: 0
//unshift < Add element at the begin of array
array.unshift('Fruit');
console.log(array.length); // <-- Output: 1

/* 3 --> (splice) <-- delete */
//splice() <-- delete elements and return array of them
var arraySplice = ['A','B','C','G'];

var _delete = arraySplice.splice(0,2);
console.log(_delete); // Output: 'A','B'

var addNew = arraySplice.splice(0,2,'T','H'); // <-- Insert at the [0],[1] position 'T','H' insted of 'A','B'
console.log(addNew); // Output: 'T','H','C','G'

/* 4 --> (concat)  */
var vegtebels = ['Pomidor','Ogyrec','Yabloko'];
var prices = [12,8,8];

var vegetales = vegtebels.concat(prices);
console.log(vegetales); //Output: ["Pomidor", "Ogyrec", "Yabloko", 12, 8, 8]

/* 5 --> (join) */
//Concat all array elements at the one string

var _joinExample = ['Jack','Tom','Bill','Nick'];
var _concat = _joinExample.join(', ');
console.log(_concat); //Output: Jack, Tom, Bill, Nick

/* 6 --> (sort) */
var array = [1,2,5,6,7,4,8,3,9];
console.log(array.sort());
