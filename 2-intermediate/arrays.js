// Arrays and its Functions

let friends = ['John', 'Mark', 'David'];

let grades = [99, 60, 55, 92];

console.log(friends[0]); // John

console.log(grades[3]); // 92

friends[1] = "Cena";
console.log(friends);

for (i = 0; i < friends.length; i++) {
	console.log("Element " + i + " is: " + friends[i]);
}

grades.forEach(function(grade){
	console.log(grade)
});

// Functions: push, pop, reverse, sort
grades.push(3);
console.log(grades);

// shift, unshift: remove/add to the front of the array.

// splice(index, amount-to-remove)
grades.splice(1, 2);
console.log(grades);