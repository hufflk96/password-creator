// Assignment code here; variables
var nums = "0123456789";
var lower= "abcdefghijklmnopqrstuvwxyz";
var upper= "ABCDEFGHIJKLMNOPQRSTUVWYZY";
var symbols= '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';

var addNumber;
var addSpecialCharacter;
var addUpper;
var addLower;
var numPwLength = 0;

//Promt setup for user answers
while (numPwLength < 8 || numPwLength >128 ) {
  pwLengthRaw = prompt ("How long do you want your password to be?, Enter between 8 & 128 characters");
  numPwLength = +pwLengthRaw;  //parseInt(pwLength)  //console.log(typeof pwlength)
}

var addLower = prompt ("Do you want to include lowercase letters?");
var addUpper = prompt ("Do you want to include uppercase letters?");
var addNumber = prompt ("Do you want to include numeric characters?");
var addSpecialCharacter = prompt ("Do you want to include special characters?");

//Promt answers all lowercase
addLower = addLower.toLowerCase();
addUpper = addUpper.toLowerCase();
addNumber = addNumber.toLowerCase();
addSpecialCharacter = addSpecialCharacter.toLowerCase();

//Prompt vaulues
if (addLower === "y" || addLower === "yes") {
  useLower = true;
};

if (addUpper === "y" || addUpper === "yes") {
  useUpper = true;
};

if (addNumber === "y" || addNumber === "yes") {
  useNumber = true;
};

if (addSpecialCharacter === "y" || addSpecialCharacter === "yes") {
  useSpecialCharacter = true;
};

//password pool that includes different criteria based on user selection of yes 
var pwPool = '';
    
if (useLower == true){
    pwPool += lower;
}
    
if (useUpper == true){
    pwPool += upper;
}
    
if (useNumber == true){
    pwPool += nums;
}
    
if(useSpecialCharacter == true){
    pwPool += symbols;
 }

function randomChars(numPwLength){
    return Math.floor(Math.random()*(numPwLength) + 1);
}
    
function generatePassword() {
    var password = "";
    for (var i=0; i < numPwLength; i+= 1) {
      password += pwPool[randomChars(pwPool.length -1)]
    }
    return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
