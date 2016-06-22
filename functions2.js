"use strict";

// Simple callback
function executeFunction(fn){
	return fn();
}
let printOne = function(){
	console.log(1);
}
executeFunction(printOne);
console.log("");

// Closures
let closureVariable1 = "lol";
function closuredFunction(){
	console.log(`closuredFunction() returns: ${closureVariable1}`);
}
closuredFunction();
console.log("");

function functionGenerator(){
	let closureVariable2 = "lol2";

	return function(){
		console.log(`generatedFunction() has the value ${closureVariable2} for closureVariable2`);
	}
}
let generatedFunction = functionGenerator();
generatedFunction();

// error
console.log("");
console.log(`Outside the functionGenerator, the value of closureVariable2 is ${closureVariable2}`);
