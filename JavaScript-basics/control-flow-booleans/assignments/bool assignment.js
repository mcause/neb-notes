//1. Write a statement that checks if 2 and 'two' are equal
console.log(2 == 'two');
//2. Write a statement that checks if '2' and 2 are loosely equal
// Boolean('2'==2) 
console.log(Boolean('2'==2));
//3. Write a statement that checks if 14 and '14' are strictly equal
// Boolean=(14==='14')
console.log(Boolean(14==='14'));//
//4. Write a statement that checks if 10 is greater than -100
console.log(Boolean(10>-100));
//5. Write a statement that checks if 4 is strictly equal to the rounded value of 4.4
let g = 4;
let h =(Math.round(4.4));
console.log(Boolean(g===h));
//6. Write a statement that checks if 10 is greater than or equal to 9.1 rounded up
let e = 10
let f =(Math.ceil(9.1))
console.log(Boolean(e>=f))
//7. Write a single statement that checks if 10 is greater than 2 and 3 is greater than 4
console.log(Boolean(10>2 && 3 >4))
  // 7.a Without changing any of the numbers, or their order. How do we make this print true?
console.log(Boolean(10>!2 && 3 >!4));
//8. Pick a number between 1-20 and assign it to a variable

//   If your number of watermelons is 1 or 2, console.log 'Looks like you like watermelon'
//   If your number of watermelons is more than 2, console.log 'Thats a lot of watermelon'
//   If your number of watermelons is more than 5, print, 'Thats too many watermelon!'
//   If your number of watermelons is more than 10, print, 'You must be CRAZY for watermelon!'
//   If your number of watermelons is more than 15, print, 'Did you have a coupon?'

let quantity = 1;

if(quantity<=2){
    console.log("Looks like you like watermelon");
} if(quantity >2 && quantity<5){
     console.log("Thats a lot of watermelon");
} if (quantity > 5 && quantity <10){
    console.log("Thats too many watermelon!");
} if (quantity >10 && quantity <15){
    console.log("You must be CRAZY for watermelon");
} if (quantity >15 ){
    console.log("Did you have a coupon");
}
 


//9. Create a variable that represents your current hunger on a level of 1-10
  // Using a ternary, if your hunger is greater than 6 print, 'Time to eat!'
  // Otherwise print. "I'm not hungry"

let hangry= 9 
let phrase= hangry > 6 ? "Time to eat" : "I'm not hungry"
console.log(phrase)

// 10. Think of an Magic-8 Ball
  // Write a switch statement that works the same way. 
  // When you run this file you should
  // Generate a random number
  // And get an out put from your switch statement

let question = "Will the Jets win? "
let answer = Math.ceil(Math.random()*10) 
// console.log(answer)
  switch(answer){
    case 1:
      console.log(`${question} No`);
      break;
    case 2:
      console.log(`${question} Yes`);
      break;
    case 3:
      console.log(`${question} Maybe`);
      break;
    default:
      console.log(`${question} That is probable`);
  }

  // Ex: 
    // I update a question variable to say "Will I win the lottery?"
    // I run node <FILENAME> 
    // The console prints out:
      // Will I win the lottery? Not Likely. 

  // Pseudocode:
    // variable that holds a randomly generated number
    // variable for holding the question
    // switch statement that picks responses based on the random number variable 

// BONUS:
  // On the prior example, try and have the answer print like someone is speaking to you.
  let question = "Will I have to work forever? "
  let answer = Math.ceil(Math.random()*10) 
  let indexOfI = question.indexOf("I");
  let newQuestion = question

  newQuestion = newQuestion.slice(0,indexOfI) + 'you' + newQuestion.slice(indexOfI +1)
console.log(answer)
  switch(answer){
    case 1:
      console.log(`${question} No`);
      break;
    case 2:
      console.log(`${question} Yes`);
      break;
    case 3:
      console.log(`${question} Maybe`);
      break;
    default:
      console.log(`${question} That is probable`);
  }
  // Ex:
    //Input:  Will I win the lottery?
    //Output: Will you win the lottery? Not likely. <- Notice I has been programmatically changed to you

  // Ex2:
    // Input: Will I get a new pet this year?
    // Output: Will you get a pet this year? It is certain. 

  // Try and handle many edge cases - can we put in any question and have it spit out a gramatically correct response?
