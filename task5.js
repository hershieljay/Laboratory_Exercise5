
let inputString = prompt("Enter the string to be encrypted:");


function caesarCipherEncrypt(input, shift) {
    let encryptedString = '';
    for (let i = 0; i < input.length; i++) {
        let charCode = input.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            encryptedString += String.fromCharCode((charCode - 65 + shift) % 26 + 65); 
        } else if (charCode >= 97 && charCode <= 122) {
            encryptedString += String.fromCharCode((charCode - 97 + shift) % 26 + 97); 
        } else {
            encryptedString += input[i]; 
        }
    }
    return encryptedString;
}


function caesarCipherDecrypt(encrypted, shift) {
    return caesarCipherEncrypt(encrypted, (26 - shift) % 26); 
}


let shiftValue = 3;
let encryptedString = caesarCipherEncrypt(inputString, shiftValue);


console.log("Encrypted String:", encryptedString);


let decryptOption = prompt("Do you want to decrypt the encrypted string? (yes/no)").toLowerCase();
if (decryptOption === 'yes') {
    let decryptedString = caesarCipherDecrypt(encryptedString, shiftValue);
    console.log("Decrypted String:", decryptedString);
} else {
    console.log("Encryption complete. Exiting.");
}
