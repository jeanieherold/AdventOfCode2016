// Advent of Code 2016 Day 6 Part 1 - send Santa message using a repetition code
var read;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//prototypes

// Object


//Letter-Value Object-----------------
function LetterVal (character, count) {
       this.character = character;
       this.count = count;
}

//functions 

//function to find letter occurrance----------------
function findLetterOccurrance(letter, line) {
	var regex = new RegExp("[^" + letter + "]", "g");
	line = line.replace(regex, "");
	return line.length;
}// end find letter occurrances

//function to add an array
function add(a, b) {
    return a + b;
}

//main section --> 
//read input file
document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() { 
		//results of file read
		read = this.result;
		
		//do stuff with the file:
		
		//split by line and get rid of carriage returns that are hidden
		lines = read.split(/[\r\n]+/g);
	

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
	}
	fr.readAsText(this.files[0]);
})