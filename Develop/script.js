// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var length = Number(
  prompt("Enter the length of your password between 8 -128 characters.")
);
var charType = prompt(
  "Enter what you would like to include in your password: uppercase, lowercase, numbers, and special (for special characters)."
);

var passwordText = document.querySelector("#password");

function password() {
  var charGen = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "1234567890",
    special: "!@#$%^&*",
  };
  var charSet = charGen[charType.toLowerCase()];
  for (i = 0; i < length; i++) {
    generate += password.charSet(Math.floor(Math.random() * charSet.length));
  }
  return generate;
}

passwordText.value = password();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  alert("Password copied to clipboard!" + copyText.value);
}
