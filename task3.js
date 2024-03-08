
let inputText = prompt("Enter a string of text:");


let characterCount = inputText.length;
let wordCount = inputText.split(/\s+/).filter(word => word.length > 0).length; 
let sentenceCount = inputText.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;


let wordFrequency = {};
let words = inputText.match(/\b\w+\b/g); 
if (words) {
    words.forEach(word => {
        word = word.toLowerCase();
        wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
}
let mostFrequentWord = '';
let maxFrequency = 0;
for (let word in wordFrequency) {
    if (wordFrequency[word] > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = wordFrequency[word];
    }
}


let totalWordLength = words ? words.join('').length : 0;
let averageWordLength = totalWordLength / wordCount;


console.log("Number of characters:", characterCount);
console.log("Number of words:", wordCount);
console.log("Number of sentences:", sentenceCount);
console.log("Most frequent word:", mostFrequentWord, "with occurrence count:", maxFrequency);
console.log("Average word length:", averageWordLength.toFixed(2));
