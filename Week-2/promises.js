// objects and functions

const { resolve } = require("path");

const rect1 = {
  width: 2,
  height: 4,
  color: "blue",
  area: function () {
    console.log(this.width * this.height);
  },
};

console.log(rect1.width);
rect1.area();

// objects and functions does the same but classes are more clear we can create different objects and we can use inheritance

class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`the color of the rectangle is : ${this.color}`);
  }
}

const rect = new Rectangle(3, 9, "red");
const area = rect.area();

console.log(rect);
console.log(area);

rect.paint();

// Promises

function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function callback() {
  console.log("2 seconds have passed..!");
}

setTimeoutPromisified(3000).then(callback);
