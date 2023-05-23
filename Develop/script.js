// Assignment Code
var generateBtn = document.querySelector("#generate");

// function makeAPassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*";
var length = document.getElementById("length").value;

function makeAPassword() {
  var passwordGen = "";

  passwordGen += lowercase[Math.random() * lowercase.length];
  console.log(passwordGen);

  passwordGen += uppercase[Math.random() * uppercase.length];
  console.log(passwordGen);

  passwordGen += numbers[Math.random() * numbers.length];
  console.log(passwordGen);

  passwordGen += special[Math.random() * special.length];
  console.log(passwordGen);

  document.getElementById("password").value = passwordGen;
}

// var passwordText = document.querySelector("#password");

// passwordText.value = password();

// Add event listener to generate button
generateBtn.addEventListener("click", makeAPassword());

function copyPassword() {
  document.getElementById("password").select();
  navigator.clipboard.writeText(copyText.value);
  // alert("Password copied to clipboard!" + copyText.value);
}
