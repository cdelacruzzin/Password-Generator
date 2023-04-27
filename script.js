





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
    let criteria = confirm("Here is a list of criteria to include in the password: \n -Length\n-Character Types\n\nPress OK to confim");

    //stores the prompt input into 'passwordLength
    let passwordLength = prompt("Enter a number between 8 and 128.");
    
    //passes the value of the input to the passLength function
    console.log(passLength(passwordLength));


}

function passLength(pass) {
    //checks whether password length is within the parameters, and is a number, and loops the prompt if it isn't
    //after it passes the loops conditions, the input will be parsed into a number. 
    //prompts return a string, therefore this string needs to be turned into a number.

    while ( isNaN(parseInt(pass)) || (pass < 8) || (pass > 128) ) {
        pass = prompt("Invalid input! Please enter a number between 8 and 128:");
    }
    pass = parseInt(pass);
return pass;

}
