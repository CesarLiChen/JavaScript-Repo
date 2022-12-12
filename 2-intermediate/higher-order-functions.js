// Higher order functions
/*
	Special type of function that:
	- Takes as argument another function or
	- Returns a function
*/


// getAddFunction is a higher order function
function getAddFunction() {
	return (num1, num2) => {
		return num1 + num2;
	}
}

// another way
function getSubtractFun() {
	return (num1, num2) => num1 - num2;
}

let addFunction = getAddFunction();
console.log(addFunction(2, 10));

let subtractFun = getSubtractFun();
console.log(subtractFun(2023, 1997));

// Function as parameter
function myFunc(foo) {
	foo();
}

myFunc( () => {console.log("hi");});