// Advanced Arrays

let letters = ["c", "a", "t", "w", "o", "m", "a", "n"];
let numbers = [32, 15, 999];

console.log(letters);
console.log(letters.toString());

// Join 2 arrays
console.log(numbers.concat(letters));

console.log(letters.includes("a"));
console.log(letters.indexOf("t"));

// Array to string without commas
console.log(letters.join("")); //cat
console.log(letters.join("-|-")); //c-|-a-|-t

// Partitions
console.log(letters.slice(1, 5));

// Filtering
let filter = letters.filter( (letter) => {return letter == "a"});
console.log(filter);

// Map function
let map = letters.map( (letter) => {return letter + "<>"});
console.log(map);

// Reducer function idea
/*
	take array, an reduce to single value.
*/
function reducerFunction(accumulator, currentValue){
	return accumulator + currentValue;
}

let reducedArray = numbers.reduce(reducerFunction);
console.log(reducedArray);