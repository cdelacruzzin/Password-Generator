
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", prompt1);

var passwordLength;
//made these global so it can be accessed by other functions
var lowercasePrompt = false;
var uppercasePrompt = false;
var numericPrompt = false;
var specialCharactersPrompt = false;



function passLength(inputLength) {
    passwordLength = parseInt(inputLength);
}

//a function to return a random special character
//to generate a random number between 0 and the length of specChar,
// use the math.random, and to round it down so it doesn't be over the length, math.floor is used.
//sets the special character at the index randomly generated, and returns it.

function specialChar() {
    var specChar = "!@#$%^&*()_+-=[]{}|\;:,.<>?";
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




function prompt1() {
    
    var start = confirm("Here is a list of criteria to include in the password: \n -Length\n-Character Types\n\nPress OK to confim");
    console.log(start)
    if (start) {
        //stores the prompt input into 'inputLength
        let inputLength = prompt("Enter a number between 8 and 128.");


            //checks whether password length is within the parameters, and is a number, and loops the prompt if it isn't
        if (!(isNaN(parseInt(inputLength)) || ((inputLength < 8) || (inputLength > 128)))) {
                        //passes the value of the input to the passLength function
            passLength(inputLength);
            console.log('password length: ', passwordLength);

            //calls the criteria prompts function
            criteriaPrompts();
        } else {
            window.alert('Please enter a valid number.');
        }


    }



}



function criteriaPrompts() {
        //prompts wheter to include lowercase, uppercase, numbers, or special characters in password
    //once the values of the prompts store in the global variable, we will call the generateCriteria function

    var criteriaArray = [];

  var confirmVal=  confirm("Here is a list of possible character types to include in your password:\nlowercase\nuppercase\nnumeric\nspecial characters")
  if (confirmVal){
        lowercasePrompt = confirm("Do you want to include lowercases?");
    uppercasePrompt = confirm("Do you want to include uppercase?");
    numericPrompt = confirm("Do you want to include numeric?");
    specialCharactersPrompt = confirm("Do you want to include special characters?");
    generatePass(criteriaArray);
  }


}



//computes the length of the number of criteria selected.
//an array 'criteria array' is created, and if true, the array's length will increase
//creates a criteriacount variable to be global so it can be accessible by other functions

function generateCriteria(criteriaArray) {

    if (lowercasePrompt) {
        criteriaArray.push(lowercase());
    }
    if (uppercasePrompt) {
        criteriaArray.push(uppercase());
    }
    if (numericPrompt) {
        criteriaArray.push(randomInt());
    }
    if (specialCharactersPrompt) {
        criteriaArray.push(specialChar());
    } else {
       
    }

}


function checkCriteria() {

    if (lowercasePrompt) {

    }
    if (uppercasePrompt) {

    }
    if (numericPrompt) {

    }
    if (specialCharactersPrompt) {

    }
}

// [] BRACKETS
// () PARENTHESIS
// {} BRACES

//generates a random nuumber between 0 and the criteria count. This randomly selects character from the selected criteria
//assigns the value of the randomly generated index of the criteriaArray to passchar
//returns passchar when this function is called
function randomizedCharacters(criteriaArray) {
    var randomNum = Math.floor(Math.random() * criteriaArray.length);
    var passchar = criteriaArray[randomNum];
    return passchar;

}

// creates a for-loop with the passwordLength as the number of iterations. this password length was calculated from the passLength() function
//in each iteration of the loop, the randomizedCharacters() function will be called. this function will return a randomly generated char based on the criteria selected.
//it will concatenate each returned character, and assign it to 'generatepassword' variable.
//returns generatedpassword

function generatePass(array) {
    var generatedpassword = "";
    var passwordText = document.querySelector("#password");

    console.log("password length: ", passwordLength);
    for (var a = 0; a < passwordLength; a++) {

        generateCriteria(array);

            generatedpassword += randomizedCharacters(array);
    }
    passwordText.value = generatedpassword;
}