// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it to 'Dane' as a string
// We check if name is Mary. If so, we will console log 'Hi Mary!'
// The name is not Mary, so we console log 'How do you do?'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable called secret with no value 
// Create a variable called code and set it to 123 as a number
// Check if code is equal to 123, it is, so set the variable secret to 'super' and 
// set the new value of code to code multiplied by 2
// We also check if the code is greater than 250 and if so, set the variable secret to 'duper' 
// We then console log 'secret' to see if the outcome is super or duper 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a variable called isStudent and set it to true as a boolean
// Create a variable called age and set it to 34 as a number
// Create a variable called zip and set it to 55407 as a number
// Check if the variable isStudent is true AND that zip is greater 80000. We console log 'You're a 
// student on the West Coast!' if those are both correct. They are not both both correct, so we check if isStudent is false OR age is less than 30
// If either were correct, we would console log 'What are your hobbies?' but neither are.
// We then check if isStudent is true, it is, so we console log 'Welcome to Prime!'
// If none of these if/else statement are correct, we console log 'How about the weather? 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'


/*
// colorOne should be set to 'blue' and colorTwo should be set to 'red' 
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// since mix === true, both colorOne and colorTwo should change to purple
// should be {colorOne, colorTwo = 'purple';}
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// we are checking if both statements are correct, so use && instead if ||
// should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// instructions say to check if age is greater than or equal to minAge instead of checking if minAage is less than 
// or equal to age
// should be if (age >= minAge){
//    console.log('enter';)
// }
// else {
//    console.log ('no entry');
 // }


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

