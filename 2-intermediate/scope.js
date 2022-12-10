// Scopes in Javascript

let globalVar = 9;

function myFunc(){
	let localVar = 5;
	console.log(localVar);
	console.log(globalVar);
}

myFunc();
//console.log(localVar); // will not work because of scope
console.log(globalVar);

// Hoisting:
// Javascript lets you call the function before it is
//created.

sayHi();

function sayHi(){
	console.log("HIII!!!");
}

// Hoisting does not work with
//function expressions.
let sayHii = () => {
	console.log("Hii");
}
sayHii();
