"use strict";

class Animal {
	constructor(species,name){
		this.species = species;
		this.name = name;
	}

	say(something) {
		throw new Error('Operation not implemented');
	}
}

class Cat extends Animal {
	constructor(){
		super("feline","cat");
	}

	say(something){
		//A cat doesn't care what you want him to do or say
		console.log("Nyan");
	}
}

class Dog extends Animal {
	constructor(race){
		super("canine","dog");
		this.race = race;
	}

	say(something){
		console.log(`${something} woof, I'm a ${this.name} of race ${this.race}!`);
	}
}

let cat = new Cat();
cat.say("hello");

let dog = new Dog("Yorkshire");
dog.say("hello");
