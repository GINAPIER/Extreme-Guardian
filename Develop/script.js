// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCEl = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var lowerCEl = ("abcdefghijklmnopqrstuvwxyz");
var numCEl = ("0123456789");
var symbolCEl = ("~!@#$%^&*()_+=");



 var myInput = document.getElementById("psw");
 var resultEl = document.getElementById("result");
 var upperCaseEl = document.getElementById("upperCase");
 var lowerCaseEl = document.getElementById("lowerCase");
 var numbersEl = document.getElementById("numbers");
 var symbolsEl = document.getElementById("symbols");
 var lengthEl = document.getElementById("mMlength");


// 
var button = document.getElementById("generate");

//selection
var persSelection = {};

//prompt character length
var charLength = parseInt(prompt(" type in a number between 8 and 128."));

// show lenght; 
console.log(charLength)

//confirm selection
var confirmUpper = confirm("Do you like upper case letters");
var confirmLower = confirm("Do you like lower case letters");
var confirmNumbers = confirm("Do you like numbers");
var confirmSymbols =confirm("Do you like symbols");

//confirming likes
if (confirmUpper){
  persSelection ["upperCEl"]= upperCEl;
}
if (confirmLower){
  persSelection["lowerCEl"]= lowerCEl;
}
if (confirmNumbers){
  persSelection ["numCEl"] =numCEl;
}
if (confirmSymbols){
  persSelection ["symbolEl"]= symbolCEl;
}
console.log("persSelection");

// prompt 
persSelection();

// Write password to the #password input
function writePassword() {
  var password = generatePassword[("upperCEl, lowerCEl, numberCEl, symbolsEl,")];
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
    password = ();
    for ( var i = 0; i <"mMLength", + i++);
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
function myFunction(generateBtn){
password.innerhtml= writePassword();
  event.preventDefault();
}
//generate password
var randomCEl= finalPassword [ Math.floor, math.random ()* finalPassword.lenght]
consolole.log (finalPassword);{
return finalPassword;
}

//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page.
