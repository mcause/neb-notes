// 1.   Create an array that contains two of your favorite things to do
const favActivities = ["hunting","hanging with the family"];
console.log(favActivities);

// 2.   Using an array method, add another thing you like to do to that list
favActivities.push("playing cards");
console.log(favActivities);

// 3.   Reverse the order of the array (remember, if needed use MDN)
favActivities.reverse();
console.log(favActivities);

// 4.   Using this array: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 5.   log the length of the array
console.log(days.length);

// 6.   log the 4th element in the array
console.log(days[4]);

// 7.   Remove the first element in the array. Log the new array and the element removed from the array
newElement = days.shift();
console.log(days,newElement);

// 8.   Put 'Sunday' back at the beginning of the array (.unshift) and log the new array
days.unshift(newElement);
console.log(days);

// 9.   Remove the last element in the array. Log the new array and log the element removed
newElement = days.pop();
console.log(days,newElement);

//10.   Add 'Saturday' back to the end of the array and log the new array
days.push(newElement);
console.log(days);

//11.   Replace 'Thursday' with 'Friday Junior'
days[4] = 'Friday Junior';
  console.log(days)

//12.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
days[0] = 'My favorite day of the week is (Sunday)'
console.log(days)

//13.   Combine these two arrays together
let phone = ['iphone', 'android']
let laptop = ['MacBook', 'HP', 'Dell']
const array = phone.concat(laptop);
console.log(array);

//14.   Write a line of code to test if something is an array or not
let vehicles =["cars ","planes", "trains",1];
console.log(Array.isArray(vehicles));
