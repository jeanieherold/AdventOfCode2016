// Advent of Code 2016 Day 4 Part 1
var read;
var sum = 0;
var rooms = [];
var lines = [];
var originalchecksums = [];
var realchecksums = [];
var sectIds = [];
var sectintegers = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//prototypes

//Line to Room Object
function Room (name, sect, checksum) {
	this.name = name;
	this.sect = sect;
	this.checksum = checksum;
}

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

//function to create real checksum list--------------
function findRealChecksum (line) {
	var tempChecksum = [];
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

	//array of Real Checksum for each line
	for (var i = 0; i <= 4; i++) {
		var hold = letters[i].character;
		holds.push(hold);
	}

	tempChecksum = holds.join('');
	
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

		//call findRealChecksum for each line
		rooms.forEach(function(room) {
			var temp = findRealChecksum(room.name);
			realchecksums.push(temp);
		})

		console.log('real: ' + realchecksums);

		rooms.forEach(function(room){
			originalchecksums.push(room.checksum);
		})
		console.log('orig: ' + originalchecksums);

		//find sect of real checksums
		for(i = 0; i < originalchecksums.length; i++) {
			if (originalchecksums[i] === realchecksums[i]) {
				sectIds.push(rooms[i].sect);
			}
		}
		for(i = 0; i < sectIds.length; i++) {
			num = parseInt(sectIds[i]);
			sectintegers.push(num);
		}

		console.log(sectintegers);

		sum = sectintegers.reduce(add, 0);

		console.log(sum);

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
	}
	fr.readAsText(this.files[0]);
})