"use strict";

let numbers = [1,2,3,4,5];

console.log("Soy Conde Draco y os voy a enseñar a contar:");

for(let number of numbers){
	console.log(`${number} JA JA JA`);
}

console.log("\nMis atributos:");
let conde = {nombre:"Conde Draco",edad:244};
for(let attribute in conde){
	console.log(`${attribute} : ${conde[attribute]}`);
}
