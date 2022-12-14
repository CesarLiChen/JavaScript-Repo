// Functions

// Function declaration
function sayHello(){
	console.log("Hello");
}
sayHello();

// Function expression
let scream = function(){
	console.log("AHHHHHHHHH");
}
scream();

// Parameters (in function declaration) 
// vs Argument (actual information passed)

function hello(name){ // name is parameter
	console.log("Hi " + name);
}
hello("Elektra"); // "Elektra" is argument

let addNumbers = function(num1, num2){
	console.log(num1 + num2);
}
addNumbers(3, 7);

// Arrow functions
let subtractNumbers = (num1, num2) => {
	console.log(num1 - num2);
}
subtractNumbers(20, 7);

// Return functions

let multiply = (num1, num2) => {
	return num1 * num2;
	// anything under return is NOT run
}
let result = multiply(4, 7);
console.log(result);