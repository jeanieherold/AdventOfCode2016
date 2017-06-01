// Advent of Code 2016 Day 7 Part 1 - find if IPs in input provided support TLS (transport-layer snooping)
/*
 * An IP supports TLS if it has an Autonomous Bridge Bypass Annotation, or ABBA.
 * An ABBA is any four-character sequence which consists of a pair of two different characters 
 * followed by the reverse of that pair, such as xyyx or abba.
 * However, the IP also must not have an ABBA within any hypernet sequences, which are contained by square brackets.
 * 
 */

//variables
var supportsTLS = [];
var addresses = [];

//Objects
function Address (ips, bracket) {
	this.ips = ips;
	this.bracket = bracket;
}
//Functions

function findpattern (word) {
	var holds = [];
	for (i = 0; i < word.length; i++) {
		if (i+3 <= word.length && word[i] === word[i+3] && word[i] !== word[i+1] && word[i+1] === word[i+2]) {
			holds.push(word.slice(i,i+4));
		}
	}
	if(holds.length > 0) {
		return true;
	} else {
		return false;
	}
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
		
		//separate each line into Address prefix, bracket section and suffix
		lines.forEach(function(line) {
			var bracket, ips;
			//remove what is in brackets and replace with a comma and split result into array
			ips = line.replace(/ *\[[^\]]*]/g, ',').split(',');
			//grab content between brackets globally in the string and make array of results
			bracket = line.match(/[^[\]]+(?=])/g);
			//create array of Address objects
			var address = new Address(ips, bracket);
			addresses.push(address);
		})
		
		for(var i = 0; i < addresses.length; i++){
			var keepon = true;
			var count = 0;
			for (var j = 0; j < addresses[i].bracket.length; j++) {
				if(findpattern(addresses[i].bracket[j])) {
					keepon = false;
				}
			}
			
			for (var k = 0; k < addresses[i].ips.length; k++) {
				if(findpattern(addresses[i].ips[k]) && keepon) {
					count++;
				}
			}
			if(count > 0) {
				supportsTLS.push(addresses[i]);
			}
		}

		console.log(supportsTLS);

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
	}
	fr.readAsText(this.files[0]);
})











