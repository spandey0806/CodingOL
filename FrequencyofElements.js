// Frequency of elements in an array

let arr = ["shubh", "hai", "shubh"];

function frequency(arr) {
  let result = arr.reduce((countElem, elem) => {
    if (elem in countElem) {
      countElem[elem]++;
    } else {
      countElem[elem] = 1;
    }
    return countElem;
  }, {});
  return result;
}

console.log(frequency(arr));
