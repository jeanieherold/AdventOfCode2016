// Advent of Code 2016 Day 5 Part 2 - find password from hashed door id- in a better hash
//variables
var prefix;
var index = 0;
var stringToHash;
var hexHash = '';
var password = [];
var position;
var hexchar;
var keepon = '';

//Objects

//functions
function find5ZeroHash (prefix, index) {

	var newMethodPassword;

	while (keepon.length < 10) {
		while(!(hexHash[0] === '0' && hexHash[1] === '0' && hexHash[2] === '0' && hexHash[3] === '0' && hexHash[4] === '0'))  {
			stringToHash = prefix + index;
			hexHash = SparkMD5.hash(stringToHash);
			index++;
		}
		position = parseInt(hexHash[5]);
		hexchar = hexHash[6];
	
		if ($.isNumeric(position) && $.type(password[position]) === 'undefined') {
				password[position] = hexchar;
		}

		keepon = password.join('');
		console.log(password);
		hexHash = '';
	}
	newMethodPassword = keepon.slice(0,8);
	return newMethodPassword;
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