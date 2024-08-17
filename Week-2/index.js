function sum(a, b) {
  return a + b;
}

let ans = sum(2, 3);
console.log(ans);

function sum1(n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    ans += i;
  }
  return ans;
}

var ans1 = sum1(10);
console.log(ans1);

/*---------------------------sync vs async-----------------------------------------*/

const fs = require("fs");

const contents = fs.readFileSync("Sample-files/a.txt", "utf-8"); // synchornously
console.log(contents);

const contents2 = fs.readFileSync("Sample-files/b.txt", "utf-8"); //synchornously
console.log(contents2);

function print(err, data) {
  if (err) {
    console.log("File not found!"); //type of err is object
  } else {
    console.log(data);
  }
}

fs.readFile("./ass.txt", "utf-8", print); // asynchornously

fs.readFile("./b.txt", "utf-8", print); // asynchornously

console.log("done!");

/*-----------------------Callbacks------------------------------------------------*/

console.log("hi");

function timeOut() {
  console.log("click the button!");
}

setTimeout(timeOut, 1000);

let c = 1;
for (let i = 0; i <= 10; i++) {
  c++;
}

console.log(c);
console.log("Hello Yash");
