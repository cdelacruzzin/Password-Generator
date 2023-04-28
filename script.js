





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
    passwordLength = passLength(passwordLength);
    console.log(passwordLength);


    confirm("Here is a list of possible character types to include in your password:\nlowercase\nuppercase\nnumeric\nspecial characters")

    
    //prompts wheter to include lowercase, uppercase, numbers, or special characters in password
    var lowercase = confirm("Do you want to include lowercases?");

    var uppercase = confirm("Do you want to include uppercase?");

    var numeric = confirm("Do you want to include numeric?");

    var specialCharacters = confirm("Do you want to include special characters?");


    //computes the length of the number of criteria selected.\
    //there are 4 criteria, it will decrease by 1 if 'cancel' button is clicked. 
    var criteriaCount = 4;
    if(lowercase == false){
        criteriaCount--;
    }
    if(uppercase == false){
        criteriaCount--;
    }
    if(numeric == false){
        criteriaCount--;
    }
    if(specialCharacters == false){
        criteriaCount--;
    }
    console.log(criteriaCount);





}

function passLength(pass) {
    //checks whether password length is within the parameters, and is a number, and loops the prompt if it isn't
    //after it passes the loops conditions, the input will be parsed into a number. 
    //prompts return a string, therefore this string needs to be turned into a number.

    while ( isNaN(parseInt(pass)) || ( (pass < 8) || (pass > 128) )) {
        pass = prompt("Invalid input! Please enter a number between 8 and 128:");
    }
    pass = parseInt(pass);
return pass;
}

//a function to return a random special character
function specialChar(){
    var specChar = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?'];

    //to generate a random number between 0 and the length of specChar,
    // use the math.random, and to round it down so it doesn't be over the length, math.floor is used.
    //sets the special character at the index randomly generated, and returns it.
    var random = Math.floor(math.random() * specChar.length);
    var randomOutput = specChar[random];

    return randomOutput;

}

function se(){

}