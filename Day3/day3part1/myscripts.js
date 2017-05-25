// Advent of Code 2016 Day 3 Part 1

var read;
var lines;
var triangles = [];
var yays = [];
var nays = [];
document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() { 
		read = this.result;
		
		//remove spaces at beginning of line
		//read = read.trim();
		
		lines = read.split("\n");
		for(var i = 0; i < lines.length; i++) {
			lines[i] = lines[i].trim();
			lines[i] = lines[i].replace(/[ ,]+/g, ",");
			triangles.push(lines[i].split(','));
		}
		
		for(var i = 0; i < triangles.length; i++) {
			
			if ( (parseInt(triangles[i][0]) + parseInt(triangles[i][1]) > parseInt(triangles[i][2])) && (parseInt(triangles[i][1]) + parseInt(triangles[i][2]) > parseInt(triangles[i][0])) && (parseInt(triangles[i][2]) + parseInt(triangles[i][0]) > parseInt(triangles[i][1])) ) {
				yays.push(triangles[i]);
			} else {
				nays.push(triangles[i]);
			}
		}
		console.log('yays = ' + yays.length);
		console.log('nays = ' + nays.length);
	}
	fr.readAsText(this.files[0]);
})





