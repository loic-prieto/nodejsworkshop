"use strict";

let closuredVariable = 1;

exports.printVariable = function(){
	console.log(`Variable ${closuredVariable}`);
}
exports.incrementVariable = function(increment){
	closuredVariable += increment;
}
