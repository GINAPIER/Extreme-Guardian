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
var persSelection = ( "");

//prompt character length
//var chartLength = parseInt(prompt(" password must be between 8 and 128 characters long"));
while (lengthInput < 8 || lengthInput > 128 || isNaN(lengthInput)){
  lengthInput = prompt("password must be between 8 and 128 characters in length. Please enter a valid length.");
}
// show lenght; 
console.log(chartLength);

//confirm selection
var confirmUpper = prompt("Do you like upper case letters");
var confirmLower = prompt("Do you like lower case letters");
var confirmNumbers = prompt("Do you like numbers");
var confirmSymbols =prompt("Do you like symbols");

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
console.log("persSelection")


// prompt 
//persSelection();

// Write password to the #password input
function writePassword() {
  var fPassword = "";
  for ( var i = 0; i < chartLength ; + i++ );

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password   


   console.log(passwordText, document.querySelector);
    console.log(fPassword, fPassword.length);
    console.log( chartLength)
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
function myFunction(generateBtn){
password.innerhtml= writePassword();
  event.preventDefault();
}
//generate password
var randomCEl= passwordText [ Math.floor, math.random ()* passwordText.lenght]
consolole.log (passwordText);
function generate ( generatePassword, passwordText)

