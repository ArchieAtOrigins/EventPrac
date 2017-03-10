// REMEMBER: USE DOUBLE EQUALS SIGN ON THE CONDITIONAL IF STATEMENT

const listOne	= document.getElementById("list");



var color = function() {
	console.log("Bang!");
	if(listOne.className == "redlist") {
		listOne.className = "brnlist";
	} else {
		console.log("hmmmm");
		listOne.className = "redlist";
	}
}

listOne.addEventListener('click', color);