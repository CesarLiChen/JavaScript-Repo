// Closure, when a function is declared
//inside another function.

function counter(){
	let count = 0;

	function increment(){
		count ++;
		console.log("Count is: " + count);
	}
	return increment;
}

let incrementer = counter();
incrementer();
incrementer();
