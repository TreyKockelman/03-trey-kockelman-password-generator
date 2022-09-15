// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var numOfCharacters;
var useLowercaseLetters;
var allLowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y", "z"];
var useUppercaseLetters;
var allUppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers;
var allNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters;
var allSpecialCharacters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "?", ">", "<", ",", ".", "/", "=", "_", "`"];
var min = 8;
var max = 128;
var random = Math.floor(Math.random() * (max - min + 1) +min);
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

// Need to set max password length and need to set preferences from user inputs

// Generates a random password string from user inputs

function generatePassword() {
  howManyCharacters();
  useLowercase();
  useUppercase();
  useNumbers();
  useSpecialCharacters();

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
