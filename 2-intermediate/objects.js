// Objects in Javascript

let personArray = ["Mike", 24,
	"Programmer", true];

// Objects.
// key: value pairs
let person = {
	name: "Mike",
	age: 24,
	occupation: "Programmer",
	registeredVoter: true,
}

console.log(person.name);
console.log(person["name"]);

person.age = 1000;
console.log(person.age);

console.log(person)