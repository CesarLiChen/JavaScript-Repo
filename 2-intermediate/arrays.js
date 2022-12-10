// Arrays

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