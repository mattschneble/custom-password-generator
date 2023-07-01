//created variables for the password generator
var passwordLength;
var chooseNumbers;
var chooseSpecialCharacters;
var chooseUppercaseLetters;
var chooseLowercaseLetters;

//entered special characters, numbers, uppercase and lowercase letters to be used by the password generator
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "~", "`", ":", ";", "<", ">", "?", "/", "{", "}", "[", "]", "|", "]", "'", ",", "."];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//for selection(s) made outside the if statement, creating a variable to hold these for if they are needed later
var selection;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

