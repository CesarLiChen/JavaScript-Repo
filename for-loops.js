// For loops
// Pretty much the same as in Java.

console.log("Starting For loop ====================");

for (i = 1; i <= 10; i++) {
	console.log("We are on the " + i + " loop");
}

console.log("Ending For loop ====================");


// Nested for loops

for (j = 1; j <= 3; j++) {
	//console.log("From the first for loop: " + j);

	for (k = 1; k <= 5; k++) {
		//console.log("From 2nd loop: " + k);
		console.log("j:"+j + " k:"+k);
	}
	console.log("=============")
}