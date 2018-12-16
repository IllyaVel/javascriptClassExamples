//RegExp in String methods
//Row of methods of String object can be used RegExp as a parameter.
//Separating the line, Method .split();
//1) Method .split() can use RegExp for separating the lines(strings).

//As example, we'll separate the sentece for words;
/*var initialText = 'Today was beatifull weather!'
var exp = /\s/;
var result = initialText.split(exp);
result.forEach((value,index,arr) => {
    console.log(value);
});*/

//Method match()
//2) For search all accordings at the string, we using method match();

//Example
/*var initialText = "Он пришел домой и сделал домашнюю работу";
var exp = /дом[а-я]gi;
var result = initialText.match(exp);
result.forEach(function(value, index, array){
    document.write(value + "<br/>"); //--> symbol '*' show us possibility availability after line 'дом' unknown count symbols from a - я. At the result at the array we will see next words: домой,дамашнюю.
});*/

//3) Search at the string, method search()
//Method Search found index of the first inclusion of conformity at the string

//Example
/*var initializedText = 'Hello little girl, who are your parents';
var exp = /lit/;
var res = initializedText.search(exp);
console.log(res);*/

//Substitution method replace()
//Method replace() let us change all revelance RegExp some special line;

//Example
var initText = 'Morning:WakeUp, Day:Eat, Night:Sleep';
var exp = /Eat/gi;
var change = initText.replace(exp,'Take Shower'); // We changed context of Day, was:Eat, become:Take Shower;
console.log(change);
