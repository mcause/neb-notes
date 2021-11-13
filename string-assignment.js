// Variable Exercises 
 
// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"
let hi = "hello";
let bye = "goodbye";
let concatenatedGreeting = hi + bye;
console.log(concatenatedGreeting);

// 2. Save the substring "Friend" from the string "Hello Friend"
const hiFriend = "Hello Friend"
console.log(hiFriend.slice(6,14));

// 3. Using at least 5 of the following words, create a template literal that makes a legible sentence.
let word1 = "hello";
let word2 = "world";
let word3 = "car";
let word4 = "football";
let word5 = "soccer";
let word6 = "eat";
let word7 = "cookie";
let word8 = "favorite";
let word9 = "I";
let word10 = "to";
let word11 = "my";
let word12 = "is";
let word13 = "and";
let word14 = "like";
const savedTempLit = `${word1}, ${word2}!. ${word11} ${word8} ${word3} is a 1969 Ford Mustang Mach1. ${word9} ${word14} ${word10} watch ${word4}, ${word11} ${word8} team ${word12} the New York Jets. ${word11} wife Ana and oldest daughter  ${word14} watching ${word5}. The whole family loves ${word10} make ${word7} togerher and eat them as well.`; 
console.log(savedTempLit);

// 4. Given the string of your full name get your initials.
let fullName = "Michael Cause Jr ";
console.log(fullName[0] + fullName[8] + fullName[fullName.length - 3]);

// 5. Get the 5th character from the following string: 'Hello World'
let greeting = 'Hello World';
console.log(greeting[4]);

// 6. Find the index of the space from 'Coding Time!'
let string1 = 'Coding Time!';
console.log(string1.indexOf(" "));

// 7. Write code to grab the final letter from a any string.
let randomString = 'This is a random string'
console.log(randomString[randomString.length -1]);

// 8. Write code to grab the first 3 letters from a string. 
let randomString2 = 'code can put anything and only grab first 3 letters';
console.log(randomString2.slice(0, 3));

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
let string3 = 'This-is-a-sentence';
let stringToArr = string3.split('-');
console.log(stringToArr);

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
console.log(one.toString()) 
one = one.toString(); 
console.log(one);
console.log(two.toString())
two = two.toString();
console.log(one + two);

// Bonus Given the string of ANY first and last name get the initials. 
// This code needs to be dynamic, no matter the length of the names this code should work.
  // Ex: 
    // Brad Pitt: BP
    // Buzz Lightyear: BL 
    // Rick Grimes: RG

let firstName = 'Carl Davis'
firstName = firstName.split(' ');
let fInitial =firstName;
// console.log(firstName[0][0]);
let lInitial = firstName[firstName.length-1];
// console.log(lInitial[0][0]);
console.log(fInitial[0][0]+lInitial[0]);


