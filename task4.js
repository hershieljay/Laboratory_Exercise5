
let password = prompt("Enter your password:");


let lengthFeedback = '';
if (password.length < 6) {
    lengthFeedback = "Weak: Password should be at least 6 characters long.";
} else if (password.length < 10) {
    lengthFeedback = "Medium: Password length is acceptable.";
} else {
    lengthFeedback = "Strong: Password length is good.";
}


let uppercaseRegex = /[A-Z]/;
let lowercaseRegex = /[a-z]/;
let numberRegex = /[0-9]/;
let specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
let hasUppercase = uppercaseRegex.test(password);
let hasLowercase = lowercaseRegex.test(password);
let hasNumber = numberRegex.test(password);
let hasSpecialChar = specialCharRegex.test(password);


let strengthRating = '';
if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar && password.length >= 10) {
    strengthRating = "Very Strong";
} else if ((hasUppercase || hasLowercase) && hasNumber && password.length >= 8) {
    strengthRating = "Strong";
} else if ((hasUppercase || hasLowercase) && password.length >= 6) {
    strengthRating = "Moderate";
} else {
    strengthRating = "Weak";
}


console.log("Password Strength:", strengthRating);
console.log("Feedback:", lengthFeedback);
console.log("Contains Uppercase:", hasUppercase);
console.log("Contains Lowercase:", hasLowercase);
console.log("Contains Number:", hasNumber);
console.log("Contains Special Character:", hasSpecialChar);
