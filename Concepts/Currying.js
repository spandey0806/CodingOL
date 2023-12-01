// Q1: Write a function which helps to achieve multiply(a)(b) and returns
// multiplication of a and b
// console.log(multiply(2)(3));     // 6
 

// function multiply(a){
//     return function(b){
//         return a*b;
//     }
// }

// const multiply = (num1) => {
//     return num2 => {
//         return num1 * num2 ;
//     }
// }

const multiply = num1 => num2 => num1* num2;
console.log(multiply(2)(3))