// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const dreamV = {
    make : "Ford",
    model : "Mustang Mach 1",
    year : 1969,
    transmission : "4-speed manual",
    color : ["blue", "black pinstripe"],
    engine : "6.4L",
    horsepower : 320, 
    americanMuscle : ("Ford"=== "american muscle"),

}


// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(dreamV.make, dreamV.model, dreamV.year);

// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(dreamV["horsepower"], dreamV["engine"], dreamV["transmission"]);

// 4.   Try and log a property that doesn't already exist - what output do we get?
console.log(dreamV.topSpeed);// outputs undefined 

// 5.   Add a new key-value pair to the vehicle. 
dreamV.intereir = "black leather";

// 6.   Using bracket-notation update a property on the vehicle. 
dreamV["horsepower"] = "430";

// 7.   Using dot-notation update a property on the vehicle. 
dreamV.color = "red";
// 8.   Create a method for turning your vehicle on
    function startCar(){
        return "Let's Gooooo!!";
    }
    dreamV.start = startCar;
    dreamV.start();
// 9.   Create a method for turning your vehicle off
    function killSwitch(){
        return "Turn engine off";
    }
    dreamV.stop = killSwitch;
    dreamV.stop();
        
//10.   
//      a. Check if your vehicle is on (it should be off)
    console.log(dreamV);
//      b. Start your vehicle
dreamV["start"]();
//      c. Check if your vehicle is on (it should be on)
    console.log(dreamV);
//      d. Stop your vehicle
dreamV["killSwitch"]();
//      e. Check if your vehicle is on (it should be on)
    console.log(dreamV)