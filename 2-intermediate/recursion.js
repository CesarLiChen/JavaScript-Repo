// Recursion

function openDoll(dollNumber){
	console.log("Opening doll #" + dollNumber);

	if(dollNumber == 1){
		return;
	}else{
		openDoll(dollNumber - 1);
	}	
}
openDoll(5);
