// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

//variables
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var confirmUppercase;
var confirmLowercase;
var confirmNumeric;
var confirmSpecialCharacters;

function generatePassword() {
  // prompt users how long they want the password to be
  passwordLength = prompt("How many characters do you want your password to have?");

  // alert users if password length is invalid
  if (passwordLength < 8) {
    alert("Password length must be greater than 7 characters");
    passwordLength;
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters");
    passwordLength;
  } else if (passwordLength > 7 && passwordLength < 129) {
    confirmUppercase = confirm("Click OK if you want uppercase letters");
    confirmLowercase = confirm("Click OK if you want lowercase letters");
    confirmNumeric = confirm("Click OK if you want numbers");
    confirmSpecialCharacters = confirm("Click OK if you want special characters");
  } else if (!confirmUppercase && !confirmLowercase && !confirmNumeric && !confirmSpecialCharacters) {
    alert("You must make a selection!");
  }

  var generatedPassword= [];

  // for loop: if confirm is true then randomly select from array to add to generatedPassword
  for (let i = 0; i <= passwordLength; i++) {
    if (confirmUppercase) {
      // select randomly from uppercase
      var randomUppercase = uppercase[Math.floor(Math.random() * 26)];
      // add it to generatedPassword
      generatedPassword.push(randomUppercase);
    } 
    if (confirmLowercase) {
      // select randomly from lowercase
      var randomLowercase = lowercase[Math.floor(Math.random() * 26)];
      // add it to generatedPassword
      generatedPassword.push(randomLowercase);
    } 
    if (confirmNumeric) {
      // select randomly from numeric
      var randomNumeric = numeric[Math.floor(Math.random() * 10)];
      // add it to generatedPassword
      generatedPassword.push(randomNumeric);
    } 
    if (confirmSpecialCharacters) {
      // select randomly from specialCharacters
      var randomSpecialCharacters = specialCharacters[Math.floor(Math.random() * 32)];
      // add it to generatedPassword
      generatedPassword.push(randomSpecialCharacters);
    }
  }
  
  // return array as a string
  for (let i = 0; i <= passwordLength; i++) {
    generatedPassword = generatedPassword.slice(0, passwordLength);
  }
  
  generatedPassword = generatedPassword.join("");

  return generatedPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);