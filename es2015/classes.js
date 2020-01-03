// Defining a class

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
const square = new Rectangle(5, 5);
const poster = new Rectangle(2, 3);
console.log(square);
console.log(poster);

var Square = class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

var Square2 = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};