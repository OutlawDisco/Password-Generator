// Assignment Code
// var generateBtn = document.querySelector("#generate");
var generateBtn = document.getElementById("generate");

// function makeAPassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*";

// uppercase.appendChild(uppercase);

function makeAPassword() {
  var passwordGen = "";
  var everyThing = "";
  var length = parseInt(document.getElementById("length").value);

  if (
    !document.getElementById("lowercase").checked &&
    !document.getElementById("uppercase").checked &&
    !document.getElementById("numbers").checked &&
    !document.getElementById("special").checked
  ) {
    document.getElementById("password").value =
      "please check at least one type of character";
    return;
  }

  if (document.getElementById("lowercase").checked) {
    passwordGen += lowercase[Math.floor(Math.random() * lowercase.length)];
    everyThing += lowercase;
  }
  if (document.getElementById("uppercase").checked) {
    passwordGen += uppercase[Math.floor(Math.random() * uppercase.length)];
    everyThing += uppercase;
  }
  if (document.getElementById("numbers").checked) {
    passwordGen += numbers[Math.floor(Math.random() * numbers.length)];
    everyThing += numbers;
  }
  if (document.getElementById("special").checked) {
    passwordGen += special[Math.floor(Math.random() * special.length)];
    everyThing += special;
  }
  // for (var i = 0; passwordGen.length < length ; i++) {
  //   passwordGen += everyThing[Math.floor(Math.random() * everyThing.length)];
  //   console.log(everyThing);
  //   console.log(passwordGen);
  // }
  while (length > passwordGen.length) {
    passwordGen += everyThing[Math.floor(Math.random() * everyThing.length)];
    console.log(everyThing);
    console.log(passwordGen);
  }

  document.getElementById("password").value = passwordGen;
}

// var passwordText = document.querySelector("#password");

// passwordText.value = password();

// Add event listener to generate button
generateBtn.addEventListener("click", makeAPassword);

// // function copyPassword() {
//document.getElementById("password").select();
//   navigator.clipboard.writeText(copyText.value);
//   // alert("Password copied to clipboard!" + copyText.value);
// }
