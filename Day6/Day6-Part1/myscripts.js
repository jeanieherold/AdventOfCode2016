// Advent of Code 2016 Day 6 Part 1 - send Santa message using a repetition code each repeat is length 8
var read;
var zero = '';
var one = '';
var two = '';
var three = '';
var four = '';
var five = '';
var six = '';
var seven = '';
var messages = [];
var columns = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var errorCorrMessage = '';

//Letter-Value Object-----------------
function LetterVal (character, count) {
	this.character = character;
	this.count = count;
}

//function to find letter occurrance----------------
function findLetterOccurrance(letter, line) {
	var regex = new RegExp("[^" + letter + "]", "g");
	line = line.replace(regex, "");
	return line.length;
}// end find letter occurrances

//function
function frequent(line) {
	var mostfrequent;
	var	letters = [];
	var	holds = [];
	//find actual checksums of given encrypted names
	alphabet.forEach(function(character) {
		var find;
		find = findLetterOccurrance(character, line);
		tempLetter = new LetterVal(character, find);
		letters.push(tempLetter);
	})

	// sort by value and then letter if equal value
	letters.sort(function(a, b){
		if(a.count === b.count){
			var x = a.character, y = b.character;
			
			return x < y ? -1 : x > y ? 1 : 0;
		}
		return b.count - a.count;
	});
	mostfrequent = letters[0].character;
	console.log(mostfrequent);
	
	return mostfrequent;

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

		for(var i = 0; i < lines.length; i++) {
			lines[i] = lines[i].trim();
			messages.push(lines[i]);
		}

		for (var i = 0; i < messages.length; i++) {
			zero += messages[i][0];
			one += messages[i][1];
			two += messages[i][2];
			three += messages[i][3];
			four += messages[i][4];
			five += messages[i][5];
			six += messages[i][6];
			seven += messages[i][7];
		}
		columns = [zero, one, two, three, four, five, six, seven];
		
		for (i = 0; i < columns.length; i++) {
			var temp = columns[i];
			errorCorrMessage += frequent(temp);
		}

		console.log(errorCorrMessage);

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
	}
	fr.readAsText(this.files[0]);
})