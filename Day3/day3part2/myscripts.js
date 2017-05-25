// Advent of Code 2016 Day 3 Part 1

var read;
var lines;
var triangles = [];
var yays = [];
var nays = [];
var zeros = [];
var ones = [];
var twos = [];

//function to convert simple array to multidimensional
function listToMatrix(list, elementsPerSubArray) {
    var matrix = [], i, k;

    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }

        matrix[k].push(list[i]);
    }
    return matrix;
}

document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() { 
		read = this.result;
		
		//creating an array of triangles from the input string
		lines = read.split("\n");
		for(var i = 0; i < lines.length; i++) {
			lines[i] = lines[i].trim();
			lines[i] = lines[i].replace(/[ ,]+/g, ",");
			triangles.push(lines[i].split(','));
		}
		
		
		//separating the triangles array into array from column input
		for(var i = 0; i < triangles.length; i++) {	
				zeros.push(parseInt(triangles[i][0]));
				ones.push(parseInt(triangles[i][1]));
				twos.push(parseInt(triangles[i][2]));
		}
		//turn arrays into 2d arrays of 3 values each
		zeros = listToMatrix(zeros, 3);
		ones = listToMatrix(ones, 3);
		twos = listToMatrix(twos, 3);
		
		//test for valid triangles part 1
		
		for(var i = 0; i < triangles.length; i++) {
			
			if ( (parseInt(triangles[i][0]) + parseInt(triangles[i][1]) > parseInt(triangles[i][2])) && (parseInt(triangles[i][1]) + parseInt(triangles[i][2]) > parseInt(triangles[i][0])) && (parseInt(triangles[i][2]) + parseInt(triangles[i][0]) > parseInt(triangles[i][1])) ) {
				yays.push(triangles[i]);
			} else {
				nays.push(triangles[i]);
			}
		}
		
		//test for columns triangles part 2 - make this a function later so can just enter array
		for(var i = 0; i < twos.length; i++) {
			
			if ( ((twos[i][0] + twos[i][1]) > twos[i][2]) && ((twos[i][1] + twos[i][2]) > twos[i][0]) && ((twos[i][2] + twos[i][0]) > twos[i][1]) ) {
				yays.push(twos[i]);
			} else {
				nays.push(twos[i]);
			}
		}
		
		console.log('yays = ' + yays.length);
		console.log('nays = ' + nays.length);
	}
	fr.readAsText(this.files[0]);
})





