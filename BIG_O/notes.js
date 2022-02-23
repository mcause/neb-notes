function exampleFunction(arr) {
    //create a variable  
    let total = 0;
    //loop over the array      
    for (let i = 0; i < arr.length; i++) {
        // add the current value to the total   
        total += arr[i];
        //loop over array     
    } for (let i = 0; i < arr.length; i++) {
        //condition: divide the current value by 2 less than the index
        if (arr[i] / 2 < i) {
            //subtract the current value divided by 2 from the "total"
            total -= arr[i] / 2;
        }
        return total;
    }
}

// arr is a sorted array
function binarySearch(arr, key) {
    //declare ouput set to a number 
    let start = 0;
    //declare a variable set to the length of the array -1 
    let end = arr.length - 1;
    //loop over the array looking at 1 value at a time until 
    //the array is less than or equal to 0
    while (start <= end) {
        // Math.floor returns the largest integer less than or equal to a given number 
        //set a variable to the middle of array
        let middle = Math.floor((start + end) / 2);
        // if the new middle is equal to the key then return it 
        if (arr[middle] === key) {
            return key + ' is at index ' + middle;
        // 
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}


// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
// O(n)
// looping over array one time 

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    //declaring a variable set to a number in the array 
    let max = arr[0];
    // looping over the array
    for(let i = 1; i < arr.length; i++){
        //if the current value is greater than the previous value 
        if(arr[i] > max){
            //replace the previous value with the current value 
            max = arr[i]
        }
    }

    return max;
}
// O(n)
// looping over array one time 

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function printLast(arr){
    //logging the last index of the array one time 
    console.log(arr[arr.length-1]);
}
// 0(1)

// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function everyOther(str){
    //declare a value set to an empty string
    let newStr = '';
    // loop over current string 
    for(let i = 0; i < str.length; i+=2){
        // add the current value to the created string 
        newStr += str[i]
    }

    return newStr;
}
// 0(log n)


// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

//function is taking in a parameter and 
function doubled(num) {
    return 2 * num
}
//O(n)

// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num
    return final * 3
}

// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i])
    }
    return arrReversed
}
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}
// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums = [10,20,30,40];
nums.push(50);

// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);

// 10.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}