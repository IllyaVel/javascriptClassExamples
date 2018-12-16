function number() {
    let num = prompt('Enter number','format +123456789101112');
    let nuEx = /\d\d\d\d\d\d\d\d\d\d\d\d/;
    let res = nuEx.test(num);
    
    if( num.length == 13) {
        console.log(res);
        console.log(num);
    } else if(num.length == 12) {
        console.log(res);
        console.log('+' + num);
    } else {
        let error = 'Error';
        console.error(error);
    }
}
number();

function name() {
    let name = prompt('Enter your name');
    let nameEx = /[A-Z,a-z]/;
    let result = nameEx.test(name);

    if(result == true) {
        console.log(name);
    } else {
        console.error('Error');
    }
}
name();
