// Having 1 to n nos.
// Logs fizz instead of multiple of 3
// Logs buzz instead of multiple of 5
// Logs fizzbuzz instead of multiple of 3 and 5


const nums = [1,2,3,4,5,6,7,8,9,10,11,12];
    for(let num of nums){
    
    if (num % 3 === 0  && num % 5 === 0){
        console.log('fizzbuzz');
    } else if (num %3 === 0){
        console.log('fizz');
    } else if (num % 5 === 0){
        console.log('buzz')
    } else{
        console.log(num);
    }
}
 

 
 
 