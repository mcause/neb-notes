document.write('my page is loading...')

//What is a promise?
//  -a object that handles code that is runing asynchronously-running in 
//  the backgroung  

//  -has 3 states pending rejected resolved/fufilled 

//  -you can wait until a promise is fufilled or rejected
//   before running some code

//  .then()= when the promise is successfully fufilled,
//  .cath()= when the promise is rejected or throws an error 

// create a promise that resolves after 5 seconds
// when the promise resolves changes the text on the page 
new Promise((resolve, reject) =>{
    setTimeout(()=> resolve('Page has loaded!!!'), 5000);

})
    .then(output => document.write(output));