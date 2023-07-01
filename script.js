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
  //ask user for desired password length from 8 to 128 characters
  passwordLength = parseInt(prompt("How many characters would you like your password to be? Choose between 8 and 128"));
  //if user does not enter a number between 8 and 128, alert them to choose a number between 8 and 128
  if (!passwordLength) {
    alert("Please choose a number between 8 and 128");
  }
  else {
    //if the user enters a number between 8 and 128, ask them if they want to include numbers, special characters, uppercase letters, and lowercase letters
    chooseNumbers = confirm("Would you like to include numbers in your password?");
    chooseSpecialCharacters = confirm("Would you like to include special characters in your password?");
    chooseUppercaseLetters = confirm("Would you like to include uppercase letters in your password?");
    chooseLowercaseLetters = confirm("Would you like to include lowercase letters in your password?");
  }

  //if the user does not choose any of the options, alert them to choose at least one option
  if (!chooseNumbers && !chooseSpecialCharacters && !chooseUppercaseLetters && !chooseLowercaseLetters) {
    selection = alert("Please choose at least one option");
  }

  //if the user chooses all options, create a variable to hold all of the options via an else if statement
  else if (chooseNumbers && chooseSpecialCharacters && chooseUppercaseLetters && chooseLowercaseLetters) {
    selection = numbers.concat(specialCharacters, uppercaseLetters, lowercaseLetters);
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

