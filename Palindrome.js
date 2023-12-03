// Palindrome String 

Input: "A man, a plan, a canal, Panama"  

function isPalindrome(str){
    str = str.replace(/[\W_]/g,'').toLowerCase();  // "amanaplan..."
    const reversedString =  str.split('').reverse() .join('');                     // ['a' , 'm','a',....] --> [''....'a','m','a']
    console.log(reversedString)
    return str === reversedString;
}

const str ="A man, a plan, a canal, Panama";

const haiPalindrome =isPalindrome(str);
console.log(haiPalindrome)