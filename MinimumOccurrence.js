//Find the number of occurrences of minimum value in the list of numbers

const arr =[1,2,4,5,1,2,4,3,1,2,1,2,3,4,1,3,4,1]

const minValue = Math.min(...arr);

const minArray = arr.filter(ele => ele === minValue);

console.log(minArray.length);