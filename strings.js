//String Object
let ctroka = 'Hello World. Googbye World';
let key = 'World';

let firstPos = ctroka.indexOf(key);
let lastPos = ctroka.lastIndexOf(key);
let include = ctroka.includes(key);
console.log(firstPos);
console.log(lastPos);
console.log(include);

let _str =  'Hello Brick'
let substringString = _str.substring(1,3);
let subsString = _str.substr(1,8);
console.log(substringString); 
console.log(subsString); 

let charCase = _str.charAt(2);
let charCaseTwo = _str.charCodeAt(2); // UniCode
console.log(charCase + ' ' + charCaseTwo);

//.trim() delete all spaces;
let _strTwo =  '   Hello Brick   ';
console.log('Before' + _strTwo);
let visoutTrim = _strTwo.trim();
console.log('After ' + visoutTrim);

//.concat() unit to strings
let _string_ = "Hello";
let _StrinG_ = " World";

let concatStrings = _string_.concat(_StrinG_);
console.log(concatStrings);

//.replace() replace one substring to another
let changeString = _string_.replace("Hello","Goodbye");
console.log(changeString);

//.split() Split string at the array of substrings for concrect separator. As a split using string which hand at the array
/*let stringSplit = "Hello wonderfull world it's me !";
let spliting = stringSplit.split(" ");
for(var i in spliting) {
    console.log(spliting[i]);
}*/

//.
