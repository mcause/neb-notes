// --------- EXERCISES --------- //

// write a function that takes an input string and returns a string with the first and last character of the input
function firLastString(string){
    return(string[0], string.length -1 )
}
// write a function that takes in two numbers and multiplies them and returns it as an array

function multiply(num1, num2){
    let numMultiply = (num1*num2).toString();
    let newArr= numMultiply.split('');

    return(num1 * num2).toString().split('')
}
// write a function that takes in a sentance and replaces all the spaces with dashes

function allSpace(sentence){
    return sentence.split(' ').join('-')
}
    console.log(allSpace("Aloha my name is miguel"))

// write a function that takes a number and reverses it
function numReverse(num3){
    //return parseInt(num3.toString()split('').reverse().join());
    let output = '';
    let stringNum = num.toString();
    for(let i = 0; i < stringNum.length; i++){
        let currentNumber = stringNum[i];
        output = `${currentNumber}${output}`
    }
    return parseInt(output);
}
    console.log(numReverse(1337))

// write a function that takes an incoming string and converts it to an array of capital letters
function capital(str){
    let output = []
    for(let i = 0; i < str.length; i++){
        output.push(str[i].toUpperCase())
    }
    return(output)
}

// write a function that takes in an array and returns the 2nd and 5 element in an array added together

// secondAndFifthAdder(['a', 16, 3, 45, 'de', 4]) = '16de'
// secondAndFifthAdder(['a', 1, 55, [], 4, 45]) = 5

function returnElements(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[1,4]);
    }
    return arr
}

// write a function that takes in an array of numbers and returns back the sum of all the even numbers

// evenSum([3, 5, 8, 13, 41, 2]) = 10
// evenSum ([1]) = 0
// evenSum([2,4,6,8,10,11,14]) = 34

function sumOfNUm (arr){
let total = 0;
for (let i = 0; i <= arr.legnth; i++){
  total += arr[i];
 }
}

// write a function that takes in a sentance and returns the second word in that sentance

// secondWord('Luke I am your father') = 'I'
// secondWord('Hi') = ''
// secondWord('Ok1 Ok2 Ok3') = 'Ok2'

function secondWord(str){

    return(str.split()[1]);
}


// write a function that takes in a string and removes all the vowels ('aeiou' upper and lower)

// devowler('Easy as 123') = 'sy s 123'
// devowler('121415151u141aem') = '121415151141m'
// devowler('autoimmunities') = 'tmmnts'

function(){
    
}