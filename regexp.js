"use strict";

let wordChangeRegexp = /(\w+)\s(\w+)/;

let nombreInverso = "Conde Draco".replace(wordChangeRegexp,"$2 $1");
console.log(`Nombre inverso: ${nombreInverso}`);
