// Reverse each word in a sentence

// Using Map function

function reverseWord (sentence){
       const words = sentence.split(' ');
       const reversedWord = words.map((element)=>{
        return element.split('').reverse().join('');
       })
       const reversedSentence = reversedWord.join(' ');
       return reversedSentence;
      
}

// const sentence = "I am selected in Convegenious"
// const ans =reverseWord(sentence);
// console.log(ans);




// Using forEach 

function reverseWordInSentence(sentence){
   const words = sentence.split(' ');
   const reversedWords = [];
    words.forEach(word => {
        const reverseWord = word.split('').reverse().join('');
        reversedWords.push(reverseWord);
    });
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence ;

}

const sentence = "I am selected in Convegenious";
const ans = reverseWordInSentence(sentence);
console.log(ans);