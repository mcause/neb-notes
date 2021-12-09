
// function sayGoodbye(name){
//     return `say goodbye to my little friend ${name}`
// }

// console.log(sayGoodbye('Carl '))


// function evenNumbers(anArray){
//     let evenNumbers = []
//     for(i = 0; i< anArray.length; i++){
//         if(anArray[i] % 2 === 0){
//             evenNumbers.push(anArray[i]);
//         }
//     }
//     return evenNumbers; 
// }

// console.log(evenNumbers([2,3,4,5,56,6,48,32,64]));

// function reverseString(str) {
//     let news = str.reverse()
//     for (let i = str.length - 1; i >= 0; i--) { 
//         newString += str[i]; 
//     }
//     return reverseString;
// }
// console.log('world')
// console.log('word')

// function reverseWords(str){
//     let splitString = str.split('');
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join('');
// }
// return joinArray;

// console.log(reverseWords('world'));
// console.log(reverseWords('word'));

// function reverseString(str){
//     return str.split('').reverse().join('');
// }
// console.log(reverseString('world'));
// console.log(reverseString('word'));


// function solution(str){
//     return str.split('').reverse().join('');
// }
// console.log(solution('world'));
// console.log(solution('word'));

// function repeatStr (n, s) {
//     return ('');(n, s.repeat).join('')
//   }
// console.log(repeatStr(6, "I"))// "IIIIII"
// // console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"
// const n = number
// const s =  string
// const n =  numbers 
// function repeatStr(n, s){
//     if(n > 0) 
//       return s.repeatStr(n);
//     else
//       return "";
//      }

// console.log(repeatStr("I", 6))
// console.log(repeatStr("Hello", 5)) 
function repeatStr(s, n) {
    if (n > 0)
      return s.repeat(n);
    else
      return "";
  }
  
console.log(repeatStr("I", 6));
console.log(repeatStr("Hello", 5));


class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallestInt = args[0]
      for(let i = 0; i < args.length; i++){
        smallestInt = Math.min(smallestInt, args[i])
      }
      return smallestInt;
    }
  }