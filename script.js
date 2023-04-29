





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var a = prompts();
    var passwordText = document.querySelector("#password");

    passwordText.value = a;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var passwordLength;

function passLength(inputLength) {
    //checks whether password length is within the parameters, and is a number, and loops the prompt if it isn't
    //after it passes the loops conditions, the input will be parsed into a number. 
    //prompts return a string, therefore this string needs to be turned into a number.

    while (isNaN(parseInt(inputLength)) || ((inputLength < 8) || (inputLength > 128))) {
        inputLength = prompt("Invalid input! Please enter a number between 8 and 128:");
    }
    passwordLength = parseInt(inputLength);
}

//a function to return a random special character
function specialChar() {
    var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '-', '=', '[', ']', '{', '}', '|', ';', ':', ',', '.', '<', '>', '?'];

    //to generate a random number between 0 and the length of specChar,
    // use the math.random, and to round it down so it doesn't be over the length, math.floor is used.
    //sets the special character at the index randomly generated, and returns it.
    var random = Math.floor(Math.random() * specChar.length);

    return specChar[random];

}

//a function to return an integer less than 10
function randomInt() {
    var output = Math.floor(Math.random() * 11);
    return output;
}


//a function that returns a random letter in lowercase
function lowercase() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var random = Math.floor(Math.random() * letters.length);
    return letters[random];
}


//a function that returns a random letter in uppercase
function uppercase() {
    return lowercase().toUpperCase();
}

//made these global so it can be accessed by other functions
var lowercasePrompt = true;
var uppercasePrompt = true;
var numericPrompt = true;
var specialCharactersPrompt = true;

function prompts() {
    let criteria = confirm("Here is a list of criteria to include in the password: \n -Length\n-Character Types\n\nPress OK to confim");

    //stores the prompt input into 'inputLength
    let inputLength = prompt("Enter a number between 8 and 128.");

    //passes the value of the input to the passLength function
    passLength(inputLength);
    console.log('password length: ', passwordLength);


    confirm("Here is a list of possible character types to include in your password:\nlowercase\nuppercase\nnumeric\nspecial characters")


    //prompts wheter to include lowercase, uppercase, numbers, or special characters in password
    lowercasePrompt = confirm("Do you want to include lowercases?");
    uppercasePrompt = confirm("Do you want to include uppercase?");
    numericPrompt = confirm("Do you want to include numeric?");
    specialCharactersPrompt = confirm("Do you want to include special characters?");

    //calls the generateCriteria function
    generateCriteria(lowercasePrompt, uppercasePrompt, numericPrompt, specialCharactersPrompt);




}

//computes the length of the number of criteria selected.\
//there are 4 criteria, it will decrease by 1 if 'cancel' button is clicked. 
//an array 'criteria array' is created, and if true, the array's length will increase, and the the corresponding function call will be added on the array index
//creates a criteriacount variable to be global so it can be accessible by other functions

var criteriaCount = 4;
function generateCriteria(lowercasePrompt, uppercasePrompt, numericPrompt, specialCharactersPrompt) {
    var criteriaArray = [];

    if (lowercasePrompt == false) {
        criteriaCount--;
    } else {
        criteriaArray.push(lowercase());
    }
    if (uppercasePrompt == false) {
        criteriaCount--;
    } else {
        criteriaArray.push(uppercase());
    }
    if (numericPrompt == false) {
        criteriaCount--;
    } else {
        criteriaArray.push(randomInt());
    }
    if (specialCharactersPrompt == false) {
        criteriaCount--;
    } else {
        criteriaArray.push(specialChar());
    }
    for (var a = 0; a < criteriaCount; a++) {
        console.log("lase: ", criteriaArray[a]);
    }

    randomizedCharacters(criteriaArray);
}


function randomizedCharacters(criteriaArray) {
    var randomNum = Math.floor(Math.random() * criteriaCount)
    var password = "";

    password = criteriaArray[randomNum];
    console.log("random char: ", password);
    generatePass(passwordLength);
    return x;
}

function generatePass(passwordLength) {
    var password = "";
    console.log(passwordLength);
    for (var a = 0; a < passwordLength; a++) {
        generateCriteria(lowercasePrompt, uppercasePrompt, numericPrompt, specialCharactersPrompt);
        password += randomizedCharacters();
        console.log(passwordLength);
    }
}