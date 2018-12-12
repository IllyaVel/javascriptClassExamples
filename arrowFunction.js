//Arrow function =>
let _log = () => console.log('Working');
_log();

let add = (x,y) => x + y;
console.log(add(10,2));

let square = b => b * b;
console.log(square(10));

let sayHello = (name) => {
    this.name = name;
    return 'Hello dear ' + `${this.name}`;
}
console.log(sayHello('Illya'));

let person = (name) => ({
    name: 'without name'
})
console.log(person.name = 'Jack');

//anon function
(() => {
    var obj = {
        name: '',
        surname: '',

        setName: function(sName) {
            this.name = sName;
        },
        getName: function() {
            return `${this.name}`;
        }
    }

    obj.setName('Tom');
    console.log(obj.getName());
})();

//forEach
let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;//+
arr.forEach((num)=>{
    sum += num;
});
console.log(sum);
//map
let _squareNum = arr.map(n => n * n);//*
console.log(_squareNum);

//arrow objects
let user  = {
    name: 'Bob',
    greet: () => {
        setTimeout(() => {
            console.log('Hello ' + this.name);
        },2000)
    }
};
user.greet();
