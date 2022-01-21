//.find()

// 1.   Write a HOF to find the first number greater than 10 in an array
const nums = [1,2,3,15, 4, 80, 34]
const greaterNum = nums.find(ele => ele > 10);
console.log(greaterNumn)


// 2.   Write a HOF to find the first string in an array
const arr = [1,2,3,"pizza", "tacos","pie", {}, [], null, 123]
const firstStr = arr.find(ele => typeof ele === "pizza")
// 3.   Write a HOF to find the first instance of null in an array 
const firstNull = arr.find(ele => ele === null)