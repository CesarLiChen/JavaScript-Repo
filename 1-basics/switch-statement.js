// Swith Statements

// Freshman 9, Sophomore 10,
// Junior 11, Senior 12

let gradeNumber = 10;

switch (gradeNumber) {

	case 9:	console.log("Freshman");
	break;

	case 10: console.log("Sophomore");
	break;

	case 11: console.log("Junior");
	break;

	case 12: console.log("Senior");
	break;

	// default is used for any other cases besides
	//the ones above (e.g. gradeNumber = 13)
	default: console.log("You are not in high school");
}