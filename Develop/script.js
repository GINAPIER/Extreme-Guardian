// Assignment Code
var generateBtn = document.querySelector("#generate");
var button= "generate";
var Hello= prompt("Welcome to Extreme Guardian");
var Hello= prompt("Your password may include: Numbers of Characters, Lower Case, Uper Case, Numbers and Symbols");



 var resultEl = document.getElementById("result");
 var upperCaseEl = document.getElementById("upperCase");
 var lowerCaseEl = document.getElementById("lowerCase");
 var numbersEl = document.getElementById("numbers");
 var symbolsEl = document.getElementById("symbols");
 var lengthEl = document.getElementById("length");



  

// Write password to the #password input
function writePassword() {
  var password = generatePassword(upperCase, lowerCase, numbers, symbols, length);
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }






   // When the user starts to type something inside the password field
   myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCase = /[a-z]/g;
  if(myInput.value.match(lowerCase)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}


  // Validate capital letters
  var upperCase = /[A-Z]/g;
  if(myInput.value.match(upperCase)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate symbols
  var symbols ="/([!@#$%&*{}])/g;
  if(myInput.value.match(symbols)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >8||<=128) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}










  //var confirmPassword = ("");

 

  




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{
function myFunction(generateBtn){
  event.preventDefault();
 // Trigger the button element with a click
  document.getElementById("btn").click();
}

    selectCriteria= prompt("Your password may include: Numbers of Characters, Lower Case, Uper Case, Numbers and Symbols");
}

//listEl.addEventListener("click", function(event) {
  //event.preventDefault();
  //if(event.target.#generate("button")) {
    //var item = document.createElement("div");
   // item.textContent = groceries[event.target.parentElement.id];
   // shoppingCartEl.append(item);
 // }






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
//THEN the password is either displayed in an alert or written to the page

//var myInput = document.getElementById("psw");
//var letter = document.getElementById("letter");
//var capital = document.getElementById("capital");
//var number = document.getElementById("number");
//var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
//myInput.onfocus = function() {
  //document.getElementById("message").style.display = "block";
//}

// When the user clicks outside of the password field, hide the message box
//myInput.onblur = function() {
  //document.getElementById("message").style.display = "none";
//}

// When the user starts to type something inside the password field
//myInput.onkeyup = function() {
  // Validate lowercase letters
  //var lowerCaseLetters = /[a-z]/g;
  //if(myInput.value.match(lowerCaseLetters)) {
    //letter.classList.remove("invalid");
    //letter.classList.add("valid");
  //} //else {
    //letter.classList.remove("valid");
    //letter.classList.add("invalid");
//}

  // Validate capital letters
  //var upperCaseLetters = /[A-Z]/g;
  //if(myInput.value.match(upperCaseLetters)) {
    //capital.classList.remove("invalid");
    ///capital.classList.add("valid");
  //} else {
    //capital.classList.remove("valid");
    //capital.classList.add("invalid");
  //}

  // Validate numbers
  //var numbers = /[0-9]/g;
  //if(myInput.value.match(numbers)) {
    //number.classList.remove("invalid");
    //number.classList.add("valid");
 // } else {
   // number.classList.remove("valid");
   // number.classList.add("invalid");
 // }

  // Validate length
  //if(myInput.value.length >= 8) {
    //length.classList.remove("invalid");
    //length.classList.add("valid");
 // } else {
   // length.classList.remove("valid");
   // length.classList.add("invalid");
 // }
//}
//
//{


