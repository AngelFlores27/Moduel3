// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  var passwordLength = 12;
  var password = "";
  var passwordText = document.querySelector("#password");
  for (var i = 0; i <= passwordLength; i++){
    var random = Math.floor(Math.random()* passwordChars.length);
    password += passwordChars.substring(random, random +1);
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
