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
