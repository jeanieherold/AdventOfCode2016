// Advent of Code 2016 Day 4 Part 2 - decrypt encryption
var read;
var rooms = [];
var lines = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var newalphabet = [];
var decryptedlines = [];
var findit;
//prototypes

//Line to Room Object
function Room (name, sect, checksum) {
	this.name = name;
	this.sect = sect;
	this.checksum = checksum;
}

//functions 

//function to rotate alphabet by number * sect id
function rotate (sect) {
	var move = sect % 26;
	var j = 0;
	for(i = 0; i < 26; i++) {
		if (i <= (26 - (move + 1))) {
			newalphabet[i] = alphabet[i + move];
		} else {
			newalphabet[i] = alphabet[j];
			j++;
		}
	}
} 

//function to decrypt a line ----------------------
function decryptedline (line) {
	var decryptedline = line.split('');
	for(i = 0; i < decryptedline.length; i++) {
		switch (decryptedline[i]) {
			case 'a': decryptedline[i] = newalphabet[0]; break;
			case 'b': decryptedline[i] = newalphabet[1]; break;
			case 'c': decryptedline[i] = newalphabet[2]; break;
			case 'd': decryptedline[i] = newalphabet[3]; break;
			case 'e': decryptedline[i] = newalphabet[4]; break;
			case 'f': decryptedline[i] = newalphabet[5]; break;
			case 'g': decryptedline[i] = newalphabet[6]; break;
			case 'h': decryptedline[i] = newalphabet[7]; break;
			case 'i': decryptedline[i] = newalphabet[8]; break;
			case 'j': decryptedline[i] = newalphabet[9]; break;
			case 'k': decryptedline[i] = newalphabet[10]; break;
			case 'l': decryptedline[i] = newalphabet[11]; break;
			case 'm': decryptedline[i] = newalphabet[12]; break;
			case 'n': decryptedline[i] = newalphabet[13]; break;
			case 'o': decryptedline[i] = newalphabet[14]; break;
			case 'p': decryptedline[i] = newalphabet[15]; break;
			case 'q': decryptedline[i] = newalphabet[16]; break;
			case 'r': decryptedline[i] = newalphabet[17]; break;
			case 's': decryptedline[i] = newalphabet[18]; break;
			case 't': decryptedline[i] = newalphabet[19]; break;
			case 'u': decryptedline[i] = newalphabet[20]; break;
			case 'v': decryptedline[i] = newalphabet[21]; break;
			case 'w': decryptedline[i] = newalphabet[22]; break;
			case 'x': decryptedline[i] = newalphabet[23]; break;
			case 'y': decryptedline[i] = newalphabet[24]; break;
			case 'z': decryptedline[i] = newalphabet[25]; break;
			case '-': decryptedline[i] = ' '; break;
			default: console.log('i have no idea');
		}
	}
		
	decryptedline = decryptedline.join('');
	return decryptedline;
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

		//separate each line into name, sect and checksum
		lines.forEach(function(line) {
			line.replace(/[\n\r]/g, '');
			checksum = line.slice(-6,-1);
			sect = line.slice(-10, -7);
			name = line.slice(0, -10);
			room = new Room (name, sect, checksum);
			rooms.push(room);
		})
		//decrypt each room name and find North Pole Storage
		rooms.forEach(function(room){
			rotate(parseInt(room.sect));
			var hold = decryptedline(room.name);
			decryptedlines.push(hold);
			if(hold.includes('north') || hold.includes('North')){
				findit = hold;
				console.log('sectID: ' + room.sect + ' : ' + findit);
			}
		})

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
	}
	fr.readAsText(this.files[0]);
})