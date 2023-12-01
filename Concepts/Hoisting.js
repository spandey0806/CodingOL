// Q1

console.log(foo);    // ---> ReferenceError: foo is not defined
foo = 1;

// //Q2
console.log(foo);      // undefined
var foo = 2;

//Q3
var foo;
foo = 3;
console.log(foo);        // 3


//Q4
console.log(foo);     // ReferenceError: Cannot access 'foo' before initialization
let foo =4;