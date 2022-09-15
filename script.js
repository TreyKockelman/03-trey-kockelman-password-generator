// Assignment Code
var generateBtn = document.querySelector("#generate");

// Global variables
var numOfCharacters;
var useLowercaseLetters;
var useUppercaseLetters;
var Numbers;
var SpecialCharacters;

// Asks user how many characters they want to generate in their password?
function howManyCharacters(){
  numOfCharacters = parseInt( prompt("How many characters?") );
}

// Asks user if they want lower case letters?
function useLowercase(){
  useLowercaseLetters = confirm("Do you want lowercase letters in the password?");
  console.log(useLowercaseLetters)
}

// Asks user if they want upper case letters?
function useUppercase(){
  useUppercaseLetters = confirm("Do you want uppercase letters in the password?");
  console.log(useUppercaseLetters)
}

// Asks user if they want to use numbers?
function useNumbers(){
  Numbers = confirm("Do you want numbers in the password?");
  console.log(Numbers)
}

// Asks user if they want to use special characters?
function useSpecialCharacters(){
  SpecialCharacters = confirm("Do you want special characters in the password?");
  console.log(SpecialCharacters)
}

function generatePassword() {
  howManyCharacters();
  useLowercase();
  useUppercase();
  useNumbers();
  useSpecialCharacters();



  return "finalpassword"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
