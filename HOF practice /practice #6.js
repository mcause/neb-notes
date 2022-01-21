// .reduce()

// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const nums = [1,2,3,4,5]
const sum = nums.reduce((accumulator, curr) => accumulator + curr)
console.log(sum)

// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
const multiplied = nums.reduce((accumulator, curr) => accumulator * curr)
console.log(multiplied)

// 3.   Write a HOF to reduce all numbers in an array to the largest number 
const nums1 = [2,8,12,98,167,3]
// let largestNum = 0
// for(let i = 0; i < nums1.length; i++){
//     if(nums1[i] > largestNum){
//         largestNum = nums1[i]
//     }
// }
// console.log(largestNum)
const largeNum = nums1.reduce((biggestNum, curr) => biggestNum > curr ? biggestNum : curr)
console.log(largeNum)


// 4.   Write a HOF to find the oldest person in a group

const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]

const oldest = people.reduce((oldest, current) => oldest.age > current.age ? oldest : curr )
console.log(oldest)