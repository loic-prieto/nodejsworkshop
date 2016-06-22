"use strict";

let fs = require('fs');

console.log("Before invoking the reading of the file.\n");
fs.readFile('./config.properties',"utf8",function(err, data) {
	  if (err) throw err;
	  console.log(`File content:\n${data}`);
});
console.log("After invoking the async file reading.\n");
