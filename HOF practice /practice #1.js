// 1.   Write a higher-order function which takes in two numbers and performs a calculation with them
//      Write the callback functions seperately 
//          Ex: calculate(multiply, 2,4) => 8
//          Ex: calculate(subtract, 2,4) => -2
//          Ex: calculate(exponent, 2,4) => 16

const calcProblem = (num1, num2, func) => {
    const calculate = func(num1, num2);
    return calculate
}

const multiply =(num1, num2) => {
    return num1 * num2;
}


const subtract = (num1, num2) => {
    return num1 - num2;
}


const powerNum = (num1, num2) => {
    return Math.pow(num1,num2);
}


// 2.   Write a function that takes in any number of numbers and performs calculations on them
//      Write the callback functions seperately 
//      console.log(arguments) inside of a function to visualize your arguments
//          Ex: calculateAll(multiply, 1,4,1,231,5) => 4620
//          Ex: calculateAll(subtract, 2,4,5,7) => -14

//An array of numbers
const calculateAll = (numbers, func) =>{
    console.log(func)
    return calculateAll = func(numbers)
}

const multiplyArr = (numbers) => {
    let solution = numbers[0]
    for(let i = 1; i < nums.length; i++){
        solution = numbers[i] * numbers[i]
    }
    return solution
}

const subtract = (numbers) => {
    let solution = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        solution = numbers[i] - numbers[i]
    }
    return solution 
}


// 3.   Write a function that takes in a string and performs some form of manipulation on it
//          Ex: modify(yeller, 'I need a nap') => I NEED A NAP!!!
//          Ex: modify(sarcastic, 'I really like running') => I ReAlLy lIkE RuNnIng
//          Ex: modify(code, 'There is no cake') => Th-r- -s n- c-k-

const strManip = (str, manip) => {
    return manip;
}
const yeller = (str) => {
    return str.toUppercase(); 
}

const sarcastic = str => {
    return str.split('').map((l,i) => i % 2 ===0 ? l.toLowerCase() : l.toUpperCase()).join('');
}

// 4.   Write a function that takes in an array filled with different data types and returns each data type
//          Ex: oneType(strings, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['I love coding, 'goosfraba']
//          Ex: oneType(arrays, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => ['Nested Array!']
//          Ex: oneType(nums, ['I love coding', 10, undefined, Infinity, 'goosfraba', null, ['Nested Array!']]) => [10, Infinity]

const dt = (func, arr) => {
    return func(arr)
}

const strings = arr => {
   return arr.filter(ele => typeof ele === 'string')
}

