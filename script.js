// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var numOfCharacters;
var useLowercaseLetters;
var allLowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var useUppercaseLetters;
var allUppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers;
var allNumbers = "1234567890"
var specialCharacters;
var allSpecialCharacters = "~!@#$%^&*()-+?><,./=_`"
var min;
var max;
var userPasswordPreferencesString = "";
var passwordPreferences = [allLowercaseLetters, allUppercaseLetters, allNumbers, allSpecialCharacters]
var passwordElements = [useLowercaseLetters, useUppercaseLetters, numbers, specialCharacters];
var passwordRandomString = "";

// Asks user how many characters they want to generate in their password
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
  console.log(numOfCharacters);
}

// Asks user if they want lower case letters
function useLowercase(){
  useLowercaseLetters = confirm("Do you want lowercase letters in the password?");
  console.log(useLowercaseLetters)
}

// Asks user if they want upper case letters
function useUppercase(){
  useUppercaseLetters = confirm("Do you want uppercase letters in the password?");
  console.log(useUppercaseLetters)
}

// Asks user if they want to use numbers
function useNumbers(){
  numbers = confirm("Do you want numbers in the password?");
  console.log(numbers)
}

// Asks user if they want to use special characters
function useSpecialCharacters(){
  specialCharacters = confirm("Do you want special characters in the password?");
  console.log(specialCharacters)
}

// Need to set max password length and need to set preferences from user inputs, include true statements and exclude false statements from above, need loop for 4 functions after amount of characters, want to put all arrays that have a true statement as a single string. is because userPasswordPreferencesString is a global variable and the for/if statement it is a child? //

// Generates a random password string from user inputs

function generatePassword() {
  passwordRandomString = "";
  userPasswordPreferencesString = "";
  howManyCharacters();
  useLowercase();
  useUppercase();
  useNumbers();
  useSpecialCharacters();
  if (useLowercaseLetters) {
    userPasswordPreferencesString += allLowercaseLetters;
    console.log(userPasswordPreferencesString);
  }
  if (useUppercaseLetters) {
    userPasswordPreferencesString += allUppercaseLetters;
    console.log(userPasswordPreferencesString);
  }
  if (numbers) {
    userPasswordPreferencesString += allNumbers;
    console.log(userPasswordPreferencesString);
  }
  if (specialCharacters) {
    userPasswordPreferencesString += allSpecialCharacters;
    console.log(userPasswordPreferencesString);
  }
  max = userPasswordPreferencesString.length
  min = 0
  for (var i = 0; i < numOfCharacters; i++) {
    var random = Math.floor(Math.random() * (max - min + 1) +min);
    passwordRandomString += userPasswordPreferencesString[random];
  }
return passwordRandomString;
}

// Assignment Code: Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// Variables
// var allLowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
// var allSpecialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", ">", "<", ",", ".", "/", "=", "_", "`"];
