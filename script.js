// REMEMBER: USE DOUBLE EQUALS SIGN ON THE CONDITIONAL IF STATEMENT

const listOne = document.getElementById("list");
const listTwo = document.getElementById("list2");
const listThree = document.getElementById("list3")


var color = function() {
	console.log("Bang!");
	if(listOne.className == "redlist") {
		listOne.className = "brnlist";
	} else {
		console.log("hmmmm");
		listOne.className = "redlist";
	}
}

var charNum = function() {
	console.log("CharBoooom!");
}

var changeCase = function() {
	console.log("justInCase!");
}

listOne.addEventListener('click', color);
document.addEventListener('keypress', charNum);
listThree.addEventListener('mouseover', changeCase);