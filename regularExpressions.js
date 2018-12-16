//RegExp -- Regular Expression

//Two type of calling
var myexp = /hello/;
var myExp = new RegExp("hello");

//Methods of RegExp
var initialText = 'Hello World';
var exp = /Hello World/;
var result = exp.test(initialText); //Return true if string is responsible to Regular Expresion in another way return false.
// 1 Method '.test(string)' 
console.log(result); //Output: true

var expSecond = /wonder/;
var wonderString = 'Hello it is wonder string';
var res = expSecond.exec(wonderString); //Work similar to .test() but return only that part of string wich is responsible to RegExp string if not retutn 'null'
console.log(res); //Output: wonder;

//Groups of symbol
//The RegExp not necessarily is composed from common strings, he can include special symbols of syntax RegExp. 
//Example
var initText = "It's wonderfull world of JS programming";
var exSymbols = /[o,r,d]/;
var resultSymbols = exSymbols.test(initText);
console.log(resultSymbols); //Output: true, becaus string --> 'initText' includes symbols - [o,r,d];

//We can set range of symbols [a...] wich includes in string;
//Example
exSymbols = /[a-b]/;
resultSymbols = exSymbols.test(initText);
console.log(resultSymbols); //Output: true, because string include symbols of range from a to b;

//If don't want that string needs to include symbols in range from a-b we need to write '^';
//Like this exSymbols = /[^a-b]/;

//Properties of expressions;
//1) global -- let us to find all substrings, which is responsibles RegExp. By default at searching RegExp choose firts seen substring, which is responsible to expression.
//But in string can exist a lot of substrings, which also are responsibles to expression. For that we using this property in looks symbol 'g' at the expressions;
//2) ignoreCase -- let us to find the bases, which are responsible RegExp, don't look at the dependence from registre symbols at the string.
//For this at the RegExp using symbol 'i';
//3) multiline -- let us to find substrings, which respond RegExp, at the multiline text.
//For this at the RegExp accepted symbol 'm'; 
//Examples
var initializedText = 'Привіт Світ';
var propertiesEx = /світ/;
var resultRegExp = propertiesEx.test(initializedText);
console.log(resultRegExp);
propertiesEx = /світ/ig;
resultRegExp = propertiesEx.test(initializedText);
console.log(resultRegExp);
