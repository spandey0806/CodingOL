// Remove Duplicates of an array 

const uniqueArray = (arr) =>{
    return [... new Set(arr)];
}

console.log(uniqueArray([1,2,3,4,3,2]))


const removeDuplicate = arr =>{
    const result =[];
    arr.forEach(item => {
         if(!result.includes(item)){
            result.push(item);
         }
    });
    return result;
}
console.log(removeDuplicate([1,2,3,4,3,2]))


const uniqueArrayElements = arr =>{
    return arr.reduce((acc,el)=>{
      return acc.includes(el) ? acc : [... acc , el]
    },[])
}
console.log(uniqueArrayElements([1,2,3,4,3,2]))