// Errors and error handling

try {
	throw Error("custom error BATMAN");	
} catch(error) {
	console.log("error thrown");
} finally {
	console.log("im going in");
}
