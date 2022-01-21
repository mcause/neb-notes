// .filter()

const nums = [1,2,3,4,5,6,7,8,9,10]
// 1.   Write a function to filter an array for all the numbers greater than 5
const lessThan= nums.filter((num)=> num > 5)
console.log(lessThan)
// 2.   Write a function to filter an array for all the even numbers
const evenNums = nums.filter(num => num % 2 === 0)
console.log(evenNums)
// 3.   Write a function to filter an array for all the non number items
const arr = ['string', 34, {}, 12, "John", [], null]
const nanArr = arr.filter(ele => typeof ele == 'number')
console.log(nanArr)
const nanArr2 = arr.filter(ele => isNan(ele) ? nanArr2 : number)

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
// const whoCanParty = ()=> {
//     const canParty = partyPeople.filter(person => person.age >= 21).map(person => person.name)
//     console.log(`${canParty.join(", ")} are old enough to party`)
// }
// whoCanParty()

const pplAge = partyPeople.filter(person => person.age >= 21)
console.log(pplAge)

// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..

const str = '123abc456qwe'
const noLets = str.split('').filter(char => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char))
const strArr = str.split('')
const numsOnly = strArr.filter(char => char.toUpperCase() === char.toLowerCase())
console.log(numsOnly)