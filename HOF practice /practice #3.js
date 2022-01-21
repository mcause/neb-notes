// .map()
// 1.   Using .map() create a new array that doubles all the numbers in a given array
const myArr = [3,5,7,8,12];
const newArr = myArr.map(current => current * 2 );
console.log(newArr);
// 2.   Using .map() create a new array that halves all numbers in a given array
const halves = myArr.map(current => current / 2);
console.log(halves);
// 3.   Using .map() create a new array that finds the power of all the numbers in a given array
const power = myArr.map(current => current * current);
console.log(power);

// 4.   Using .map() create a new array of all capital strings from an array of lower case strings
const lowerArr = ['a','s','d','f','g','h'];
const capArr = lowerArr.map((letters)=>{str.toUpperCase(letters)})
console.log(capArr)

// 5.   Using .map() create a new array of greeting sentences from an array of given people
//      Expected output: ['Hello Pamela', 'Hello Michael', 'Hello Angela']
const people = [
    {name: 'Pamela'}, 
    {name: 'Micheal'},
    {name: 'Angela'}
]

const greet = people.map(person=>`Hello ${person.name}`)
console.log(greet)
