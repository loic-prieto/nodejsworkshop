"use strict";

let fs = require('fs');

const filename = "./config.properties";

let oldData = null;
let newData = "lol";

fs.exists(filename,function(exists) {
	console.log(exists ? "The file exists" : "The file doesn't exist");
	if(exists){
		fs.readFile(filename,"utf8",function(err, data) {
			if (err) throw err;
			oldData = data;

			fs.writeFile(filename,newData,function(err){
				if(err) throw err;

				console.log("We're finished with the overwrite.");

				fs.readFile(filename,"utf8",function(err,data){
					if(err) throw err;

					console.log(`The new data is:\n${data}`);
				});
			});
		});
	}
});
