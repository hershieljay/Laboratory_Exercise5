let str1 = prompt("Enter the first string:");
let str2 = prompt("Enter the second string:");


let concatStr = string1 + string2;


let lengthOfString1 = string1.length;
let upperCaseString2 = string2.toUpperCase();
let lowerCaseConcatenated = concatenatedString.toLowerCase();
let substringOfConcatenated = concatenatedString.substring(1, 4); 

let interpolatedString = `${str1} and ${str2} are concatenated to form: ${concatStr}`;

let areEqual = (str1 === str2) ? "The strings are equal." : "The strings are not equal.";


let splitConcatenated = concatStr.split(" "); 

console.log("Concatenated String:", concatStr);
console.log("Length of String1:", lengthOfString1);
console.log("Uppercase String2:", upperCaseString2);
console.log("Lowercase Concatenated:", lowerCaseConcatenated);
console.log("Substring of Concatenated:", substringOfConcatenated);
console.log("Interpolated String:", interpolatedString);
console.log("String Comparison:", areEqual);
console.log("Split Concatenated String:", splitConcatenated);