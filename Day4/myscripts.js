// Advent of Code 2016 Day 4 Part 1
var read;
var sum = 0;
var rooms = [];
var originalchecksums = [];
var realchecksums = [];
var holds = [];
var sectIds = [];
var letters = [];
var lettersStringified = [];
var letterlengths = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//prototypes

//create a Line Object
function Room (name, sect, checksum) {
	this.name = name;
	this.sect = sect;
	this.checksum = checksum;
}

//create a Letters object prototype-----------------
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

//function to create real checksum list--------------
function findRealChecksum (line) {
	var tempChecksum = [];
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
	
	// lettersStringified = JSON.stringify(letters);
	// console.log(lettersStringified);

	//array of Real Checksum for each line
	for (var i = 1; i <= 5; i++) {
		var hold = letters.shift();
		holds.push(hold.character);
	}
	
	tempChecksum = holds.join('');
	
	letters = [];
	holds = [];

	return tempChecksum;

}//end find real checksums---------------------------

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

		//separate each line into name, sect and checksum
		lines.forEach(function(line) {
			line.replace(/[\n\r]/g, '');
			checksum = (line.slice(-6,-1));
			sect = (line.slice(-10, -7));
			name = line.slice(0, -10);
			//remove dashes from name
			name = name.replace(/-/g, "");
			room = new Room (name, sect, checksum);
			rooms.push(room);
		})

		console.log(JSON.stringify(rooms));

		//call findRealChecksum for each line
		lines.forEach(function(line) {
			var temp = findRealChecksum(line);
			realchecksums.push(temp);
		})

		console.log('real: ' + realchecksums);

		rooms.forEach(function(room){
			originalchecksums.push(room.checksum);
		})

		console.log('orig: ' + originalchecksums);
		
		rooms.forEach(function(room){
			for(i=0; i < realchecksums.length; i++) {
				if(room.checksum === realchecksums[i]) {
					room.sect = parseInt(room.sect);
					sectIds.push(room.sect);
					sum += room.sect;
				}
			}
		})

		console.log(sum);

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
		//$(#fileContents).textContent = read;
	}
	fr.readAsText(this.files[0]);
})