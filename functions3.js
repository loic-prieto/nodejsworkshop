"use strict";

let car = {
	name: "Honda",
	numberOfWheels: 4,
	color: "red",

	printInfo: function(){
		console.log(`I'm an ${this.name} car, I have ${this.numberOfWheels} wheels and I'm ${this.color}`);
	}
}

car.printInfo();
car["printInfo"]();
