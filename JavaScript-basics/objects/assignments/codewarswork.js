let results = ["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"];


function points(games) {
    
    let points = 0;
    for (i=0 ; i < games.length; i++) {
        let each = games[i].split(":");
        if (each[0] > each[1]) {
            points += 3;
        }if (each[0] == each[1]) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}

console.log(points(results))

function greet(name){  
    if(name === "Johnny"){
      return "Hello, my love!";
    }
    return "Hello, " + name + "!";
  }