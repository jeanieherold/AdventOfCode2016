// Advent of Code 2016 Day 4 Part 1
var read;
var sum = 0;
var lines = [];
var checksums = [];
var holds = [];
var realChecks = [];
var reals = [];
var sectIds = [];
var letters = [];
var lettersStringified = [];
var letterlengths = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var whatevers = [];
//prototypes

//create a letters object prototype-----------------
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

//read input file
document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() { 
		//results of file read
		read = this.result;
		
		//do stuff with the file:
		
		//split by line and get rid of carriage returns that are hidden
		lines = read.split(/[\r\n]+/g);

		//remove the checksum string from each line
		lines.forEach(function(line) {
			line.replace(/[\n\r]/g, '');
			checksums.push(line.slice(-6,-1));
			sectIds.push(line.slice(-10, -7));
		})
		//create substring without checksums and sectIds and remove dashes
		for(var i = 0; i < lines.length; i++) {
			lines[i] = lines[i].slice(0, -10);
			//remove dashes
			lines[i] = lines[i].replace(/-/g, "");
		}

		lines.forEach(function(line) {
			var temp = findRealChecksum(line);
			realChecks.push(temp);
		})

		console.log(realChecks.length);
		console.log(checksums.length);

		//create an array of real checksums indices
		for (var i = 0; i < checksums.length; i++) {
			for (var j = 0; j < realChecks.length; j++){
				if (checksums[i] === realChecks[j]) {
					reals.push(checksums.indexOf(checksums[i]));
				}
			}
		}

		console.log('reals length = ' + reals.length);

		//add sectIds of real checksums
		for (var i = 0; i < reals.length; i++) {
			var value = reals[i];
			whatevers.push(sectIds[value]);
		}

		for (var i = 0; i < whatevers.length; i++) {
			whatevers[i] = parseInt(whatevers[i]);
		}

		for (var i = 0; i < whatevers.length; i++) {
			sum += whatevers[i];
		}

		console.log('sum = ' + sum);

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
		//$(#fileContents).textContent = read;
	}
	fr.readAsText(this.files[0]);
})