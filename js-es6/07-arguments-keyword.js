//This is not an ES6 feature

function funcA(arg1, arg2) {
    // arguments keyword can be used to collect your arguments in an array-like object
    if(typeof arguments[0] === typeof arguments[1]) {
        console.log('These are same type');
    }
    else {
        console.log('These are different types');
    }
}



funcA(15, 20);
funcA('abc', 'xyz');
funcA(true, false);
funcA('abc', false);