// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

function generatePassword() {
  //variables
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercase = uppercaseLetters.map (word => word.toLowerCase());
  var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  
  var confirmUppercase = confirm("Click OK if you want uppercase letters");
  var confirmLowercase = confirm("Click OK if you want lowercase letters");
  var confirmNumeric = confirm("Click OK if you want numbers");
  var confirmSpecialCharacters = confirm("Click OK if you want special characters");

  var newPassword = [];

  // prompt users how long they want the password to be
  passwordLength = prompt("How many characters do you want your password to have?");

  // alert users if password length is invalid
  if (passwordLength < 8) {
    alert("Password length must be greater than 7 characters")
  } else if (passwordLength > 128) {
    alert("Password length must be less than 129 characters")
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    var confirmUppercase = confirm("Click OK if you want uppercase letters");
    var confirmLowercase = confirm("Click OK if you want lowercase letters");
    var confirmNumeric = confirm("Click OK if you want numbers");
    var confirmSpecialCharacters = confirm("Click OK if you want special characters");
  };

  // conditional: if confirm is true then concat new array
  // alert("Password is generated!")

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);