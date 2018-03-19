// #1 clicker

const clicker = {
	clickCount: 0,
	click () {
		this.clickCount += 1;
		return this.clickCount;
	}
}

// #2 it's all abut me

const myInformation = {
	name: "Hannah",
	age: 22,
	fact: "I moved to Chicago two weeks ago.",
	getOlder() {
		this.age += 1;
		return this.age;
	},
	newName() {
		this.name = "Rumpelstiltskin"
		console.log(this.name)
	}
}

myInformation.getOlder()
myInformation.newName()


// #3 greeter
const greeter = {
	hello(name) {
		return ("Hello, " + name)
	}, 
	goodbye(name) {
		return ("Arrivederci, " + name)
	}, 
	whoAreYou(name) {
		return ("Oh right! " + name + " How could I forget...!")
	}
}

greeter.whoAreYou("Hannah")

// #4 collecting strings
const stringCollector = {
	collection: ["string1", "string2"],
	collect(str) {
		this.collection.push(str.split("").reverse().join(""))
	},
	admireCollection () {
		for (let i = 0; i < this.collection.length; i++) {
			console.log(this.collection[i])
		}
	}
}

// #5 ATM
const atm = {
	totalCash: 100,
	dispenseTwenties(num) {
		if (this.totalCash > (num * 20)) {
			this.totalCash = this.totalCash - (num * 20)
			return num * 20;
		} else if (this.totalCash < (num * 20)) {
			return null;
		}
		
	}
}

// #6 hungry turtles
const Leonardo = {
	name: "Leonardo",
	color: "blue",
	weapon: "katana",
	pizzaEaten: false,
	eatPizza() {
		if (this.pizzaEaten === true) {
			console.log("Leonardo has already eaten pizza");
			this.pizzaEaten = false;
		} else if (this.pizzaEaten === false) {
			console.log("Leonardo is eating pizza");
			this.pizzaEaten = true;
		}
	}
}