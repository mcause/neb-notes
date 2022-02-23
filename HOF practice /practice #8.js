// .sort()

// 1.   Write a HOF to sort an array of numbers from largest to smallest
const nums = [1,25,6,3,88,45,0]
nums.sort((a,b) => a >= b ? -1 : 1)
console.log(nums)

// 2.   Write a HOF to sort an array of numbers from smallest to largest
nums.sort((c,d) => c > d ? 1 : -1)
console.log (nums)

// 3.   Write a HOF to sort peoples names by their length
const partyPeople = [{name: 'John', age: 25}, {name: 'Jordan', age: 18}, {name: 'Frank', age: 50}, {name: 'Anna', age: 12}]
const partyNames = partyPeople.map(person => person.name);
const order = partyNames.sort((name1,name2) => name1.length > name2.length ? 1 : -1);
console.log (partyNames)

// 4.   Write an HOF to sort an array of objects of people by their age youngest to oldest
const age = partyPeople.sort((nums1, nums2) => nums1.age > nums2.age ? 1 : -1 )
console.log(age)

// 5.   Write an HOF to sort an array of strings by the last letter of the string
const strings = ['sam', 'john', 'daniel', 'vanessa']
const lastLetter = strings.sort((str1, str2) => str1[str1.length -1] > str2[str2.length -1] ? 1 : -1)
console.log(lastLetter)
