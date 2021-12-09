// 1.   Create an athlete for a celebrity and save it to a variable
   
   const athlete = {
        name:'Christiano Renaldo',
    };

// 2.   Using dot-notation add 3 key-value pairs to the celebrity
athlete.speed = "23mph";
athlete.footwork = "nice";
athlete.age = 36;

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
athlete["favFood"] = "mac n' cheese";
athlete["eye"] = 'blue';
athlete["hair color"] = 'black';


// 4.   Write a function that allows us to add or update 3 properties
function footwork (){
athlete.footwork = 'nice';
athlete.speed = 23;
athlete['current team'] = 'France';

}
footwork()
// 5.   Using a loop - log all the celebrities properties to the console
for(let key in athlete){
    console.log(`${key}`);   
}