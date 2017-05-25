// Advent of Code 2016 Day 4 Part 1

//File Reader
document.getElementById("openFile").addEventListener('change', function() {
	var fr = new FileReader();
	fr.onload = function() { 
		read = this.result;
		
		document.getElementById('fileContents').textContent = read;
		//$(#fileContents).textContent = read;
	}
	fr.readAsText(this.files[0]);
})