// 1.   Write a higher order function that manipulates every number in an array 
//      Ex: changeNums([1,2,3,4,5], doubler) => [2,4,6,8,10]
//      Ex: changeNums([1,2,3,4,5], halves) => [.5,1,1.5,2,2.5]
//      Ex: changeNums([1,2,3,4,5], pow) => [1,4,9,16,25]
let changeNums = [1,2,3,4,5]
const doubler = changeNums.map(current => current * 2);
const halves = changeNums.map(current => current / 2)
const pow = changeNums.map(current => current * current);


// 2.   Write a higher order function that calculates some features of a string
//      Ex: stringInfo(length, 'Howdy Partner!') => 14
//      Ex: stringInfo(vowels, 'Howdy Partner!') => 3
//      Ex: stringInfo(capitals, 'Howdy Partner!') => 2
//      Ex: stringInfo(nonLetters, 'Howdy Partner!') => 2

const welcome = 'Howdy Partner!';
const stringTotal = welcome.split('').reduce(a => a+1, 0);


const stringInfo = (func, str)=> {
    const array = str.split("")
    let output = 0
    for(let i =0 ; i < arr.length; i++) {
        output += func(arr[i]);
    }
    return output
}


const length = (letter)=> {
    return 1
}


// console.log(stringInfo(length, 'Howdy Partner!' ))

// console.log(stringInfo(vowels, 'Howdy Partner!' ))

// console.log(stringInfo(capitals, 'Howdy Partner!' ))

// console.log(stringInfo(nonLetters, 'Howdy Partner!' ))

// 3.   Write a higher order function that minimizes a given list of numbers into one number
//      Ex: minimizeNums(add, [2,3,5,8]) => 18


const minimizeNums = (func, arr)=>{
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total = func(total, arr[i])
    }
    return total
}

const add = (total,num)=>{
    return total + num
}

