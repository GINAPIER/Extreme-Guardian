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
var charLength = parseInt(prompt(" type a number between 8 and 128."));
while (lengthInput < 8 || lengthInput > 128 || isNaN(lengthInput)){
  lengthInput = prompt("Invalid entry, password must be between 8 and 128 characters in length. Please enter a valid length.");
}
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
  
    for ( var i = 0; i <=charLength ; + i++ );
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
function myFunction(generateBtn){
password.innerhtml= writePassword();
  event.preventDefault();
}
//generate password
var randomCEl= passwordText [ Math.floor, math.random ()* passwordText.lenght]
consolole.log (passwordText);{
function generate ( generatePassword, passwordText)
return password;
}

