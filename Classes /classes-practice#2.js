/* Write a class that creates shoes
The shoe should have a size, color, type, and age. 
Initialize 3 shoes with your class & log a sentence
 to the console: ex:
 `My flipflops are yellow, size 9, and 6 years old.` */

class Shoes{
    constructor(color,size,type,age){
    this.size = size;
    this.color = color;
    this.type = type;
    this.age = age;
    console.log(this.reference())
    }


    WearShoes(){
        console.log(`My ${this.type} are ${this.color},
         size ${this.size}, and ${this.age} years old`)
    }
}

const pair1 = new Shoes(6, 'Black & White', 'K-swiss', 23);

const pair2 = new Shoes(12, 'Red', 'Puma', 5);

const pair3 = new Shoes(2, 'white', 'Yeezy Space Boots', 1);