"use strict";

let module1 = require("./module1.js");

console.log(module1.addOne(1));
console.log(module1.PI);

let Dog = require("./module2.js");
let dog = new Dog();
dog.bark();


let test = require("testmodule");
test.printSomething("I'm saying something");
