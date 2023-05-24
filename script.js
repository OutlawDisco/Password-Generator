// Variable declarations
// unused original assignment code that I'm keeping for instructional referenc: generateBtn = document.querySelector("#generate");
var generateBtn = document.getElementById("generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var special = "!@#$%^&*";

// unused assignment code
// function makeAPassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

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

  //original
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

// EVENT LISTENER
generateBtn.addEventListener("click", makeAPassword);
