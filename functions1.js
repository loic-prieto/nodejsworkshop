"use strict";

function print(texto){
	console.log(texto);
}

function switchVars(var1,var2){
	return [var2,var1];
}

print("Soy un amante bandido\n");

let [var1,var2] = [1,2];
print(`var1,var2 = (${var1},${var2})`);

[var1,var2] = switchVars(var1,var2);
print(`switched var1,var2 = (${var1},${var2})`);


