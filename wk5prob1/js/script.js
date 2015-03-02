/* This code is calling on a function logMessage(), that should accpet a single parameter, and write that parameter to the console.  No input validation is required - just echo the parameter to the console. Write the logMessage() function so that this code works. 
*/
var name = "Ellen Ripley";
function logMessage(name) {
    console.log(name);
}
logMessage("My name is "+ name);

/*
#2
The following function returns its string parameter trimmed to the length specified in the second parameter. If the parameters are not a string and an integer (or something convertible to a string and an integer), the function fails with an error. Modify this function so that if the input is invalid, it returns the string "Invalid input", otherwise it returns the truncated string.

For what counts as 'convertible to a number' or to a string, only the listed test cases need to be covered. You don't have to worry about other kinds of input like 'false' or '10c', etc 

*/

/*
Kate de Bethune, Week 5, Problem 1
March 2, 2015

My solution uses the length of the arguments object to
determine whether one or two parameters need to be validated.
It is written, somewhat, to the specific variable types found in 
the test cases, and would fail in certain instances that exist
outside of these cases, but it seems, from the instructions that
this is ok and in keeping with the requirements of the assignment.

A helper function, "prepInputString" is used to return either an
error message or a valid string to the truncate function.
*/

"use strict";

function truncate(inputString, targetLength) {
    if (arguments.length == 1 && typeof inputString == 'string') {
        return inputString;
    } else {
        if (isNaN(parseInt(targetLength))) {
            return "Invalid Input";
        } else {
            inputString = prepInputString(inputString);
            if (inputString == "Invalid Input") {
                return inputString;
            } else {
                return inputString.substr(0, parseInt(targetLength));
            }
        }

    }
}


//inputString function
//1. tests length
//2. converts int to string
function prepInputString(inputString) {
    if (typeof inputString == 'undefined') {
        return "Invalid Input";
    //if the inputString is a number
    } else if (!isNaN(inputString)) {
        return inputString.toString();
    } else {
        return inputString;
    }
}

//test cases 
var x = "Fourscore and seven years ago";
var y;
console.log("1: " + truncate(x, 10));
console.log("2: " + truncate(x)); // should output the unmodified string
console.log("3: " + truncate(10, 10));
console.log("4: " + truncate(y, 10));
console.log("5: " + truncate(x, "Bob"));
