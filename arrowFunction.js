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
