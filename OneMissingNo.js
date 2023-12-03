// Given an array containing numbers from 1 to N, with one number missing, find the missing number.

// function missingNumber(arr){
//     const n = arr.length +1 ;   //  arrlength + missing number
//     const totalSum = (n*(n+1))/2;
//     const arrSum = arr.reduce((acc,ele)=> acc+ele ,0);

//     return totalSum- arrSum;

// }
// console.log(missingNumber([1,2,3,4,6,7,8]))

 function missingNumber(arr){
    const n = arr.length +2 ;   //  arrlength + missing number
     const totalSum = (n*(n+1))/2;
    const arrSum = arr.reduce((acc,ele)=> acc+ele ,0);

  const expectedSum= totalSum- arrSum;
  for(let ele of arr){
     if(arr.includes(ele))
  }

  }
  console.log(missingNumber([1,2,3,6,7,8]))