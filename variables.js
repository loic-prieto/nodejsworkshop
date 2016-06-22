"use strict";

//Primitive types
let numberOfWheels = 4;
let name = "Ford";
let isCarRed = true;

//Non primitive types
let car = {
	name: "Mercedes",
	numberOfWheels: 3,
	isCarRed: false
};

let numbers = [ 1, 2, 3,4,5];

//Array of objects
let cars = [
	car,
	{
		name: "Seat",
		numberOfWheels:16,
		isCarRed:true
	}
]

console.log(`The car name is ${cars[0].name}`);

//Strings:
let string1 = 'string1'; // alternative
let string2 = "string2"; // The json way
let string3 = `string3`; // The interpolating way

let concatenatedString = string1 + string2 + "\n";
let interpolatedString = `My first string is ${string1} my last string is ${string3}`;
console.log("Concatenated string: "+concatenatedString);
console.log(`Interpolated string: ${interpolatedString}`);
