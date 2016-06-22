"use strict";

let get = require('request-promise');

get("http://www.google.es")
	.then(function(html){
		console.log(`I've received google with a ${html.length} chars response`);
		return get("http://www.yahoo.es");
	})
	.then(function(html){
		console.log(`I've received yahoo with a ${html.length} chars response`);
		return get("http://www.bing.es");
	})
	.then(function(html){
		console.log(`I've received bing with a ${html.length} chars response`);
	})
	.catch(function(error){
		console.log(`There has been an error while retrieving an url: ${error}`);
	});
