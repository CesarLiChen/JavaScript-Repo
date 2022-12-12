// Var vs Let vs Const

// Different SCOPES for diff keywords.
if (true) {
	var i = 0;
	let j = 1;
	const k = 2;
}

console.log(i); // Works
// console.log(j); // Don't work
// console.log(k); // Don't work

function foo() {
	var a = 0;
	let b = 1;
	const c = 2;
}

/*console.log(a); // Don't work
console.log(b); // Don't work
console.log(c);	// Don't work*/

const num = 5;
// num = 10 // throws error

const obj = {name: "John"};
obj.name = "Cena"; // Works, it changes
console.log(obj);

const arr = [10, 123, 423];
arr[1] = "Bat"; // Also works
console.log(arr);