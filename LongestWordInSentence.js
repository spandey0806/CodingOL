// Longest Word in Sentence 
// I/p : "The quick brown fox jumps over the lazy dog"
// O/p : quick

function longestWord (sentence){
    const words = sentence.split(' ');
    let longestWord= "";
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord +" "+longestWord.length;
}

console.log(longestWord("The quick brown fox jumps over the lazy dog"))