/*

Given the following class that can create shapes, write an extension which will calculate the Surface Area and Volume of a given shape.

Note, one class extension will likely not be able to handle all shapes, you'll have to extend shape for each unique shape

Log to the console a sentnece about your shape:

`Given a cylander of 2 height and 2 width. It will have a volume of 6.28 and a surface area of 18.84.`

*/


// class Shape {

//     constructor(height, diameter){

//         this.height = height;

//         this.diameter = diameter;

//     }

// }


// Extend 4 classes off of shapes

// Rectangle(A=bh), Triangle(A=1/2bh), Circle(A=πr2) and Trapezoid(A=1/2h(b1+b2))

// Have methods to find the areas of the differnt shapes


class Shape{
    constructor(height, diameter){
        this.height = height;
        this.diameter = diameter
    }
    getArea(){
        return this.height * this.diameter;
    }
}

class Rectangle extends Shape{
    constructor(width, height){
        super(height);
        this.width = width;
        // this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}
const rectangle = new Rectangle(10,5);
console.log(rectangle.getArea(), "Should be", 50);

class Triangle extends Shape{
    constructor(width, height){
        super(height);
        this.width = width;
    }
    getArea(){
        return ((this.width/2) * this.height)
    }
} 
const triangle = new Triangle(7,7)
console.log(triangle.getArea(), "Should be", 24.5)

class Circle extends Shape{
    constructor(radius){
    super()
    this.radius = radius 
    }
    getArea(){
        return this.radius ** 2 * Math.PI;
    }
}
const circle = new Circle(15)
console.log(circle.getArea(), "Should be", 706.85)

class Trapezoid extends Shape{
    constructor(height, width1, width2 ){
    super(height)
    this.width1 = width1;
    this.width2 = width2;
    }
    getArea(){
        return((this.height/2) * (this.width1 + this.width2))
    }
}
const trapezoid = new Trapezoid(16,10,8)
console.log(trapezoid.getArea(), "Should be", 144)