// Time To Practice!
// Another problem that is classically solved with recursion, is writing a function that takes a number as an input and outputs it's factorial.
// As a reminder, a factorial denoted by n! is the product of an integer and all the integers below it. So 4! denotes the factorial of 4, which is 24. You would come to this solution by doing 4 * 3 * 2 * 1 = 24.
// Using our new found understanding of recursion define a recursive function that will return the factorial of an input number.
// Reminder / FYI:


function factorial(num){
    //create an output 
    if(num === 1) return 1 ;
    let output = factorial(n - 1)
    return n * factorial(n -1);
    // if you have number get the
}

console.log(factorial(4));
            4 * factorial(3)
                3 * factorial(2)
                    2 * factorial(1) 
                        1 


                    
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}