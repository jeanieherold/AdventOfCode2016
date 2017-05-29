// Advent of Code 2016 Day 5 Part 1 - find password from hashed door id
//variables
var prefix;
var index = 0;
var stringToHash;
var hexHash = '';
var password = [];

function find5ZeroHash (prefix, index) {
	for (var i = 1; i <= 8; i++) {
		while(!(hexHash[0] === '0' && hexHash[1] === '0' && hexHash[2] === '0' && hexHash[3] === '0' && hexHash[4] === '0')) {
			stringToHash = prefix + index;
			hexHash = SparkMD5.hash(stringToHash);
			index++;
		}
		password.push(hexHash[5]);
		console.log(stringToHash);
		console.log(hexHash);
		hexHash = '';

	}
	return password.join('');
}

//main section --> 
//read input file
document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() { 
		//results of file read
		read = this.result;
		
		//do stuff with the file:

		console.log(find5ZeroHash (read, index));

		//display input file to the page
		document.getElementById('fileContents').textContent = read;
	}
	fr.readAsText(this.files[0]);
})