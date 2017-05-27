//Adent of Code Day 1
alert('Bunny Tracks');
var x = 0;
var y = 0;
var steps = [['L',5], ['R',1], ['R',3], ['L',4], ['R',3], ['R',1], ['L',3], ['L',2], ['R',3], ['L',5], ['L',1], ['L',2], ['R',5], ['L',1], ['R',5], ['R',1], ['L',4], ['R',1], ['R',3], ['L',4], ['L',1], ['R',2], ['R',5], ['R',3], ['R',1], ['R',1], ['L',1], ['R',1], ['L',1], ['L',2], ['L',1], ['R',2], ['L',5], ['L',188], ['L',4], ['R',1], ['R',4], ['L',3], ['R',47], ['R',1], ['L',1], ['R',77], ['R',5], ['L',2], ['R',1], ['L',2], ['R',4], ['L',5], ['L',1], ['R',3], ['R',187], ['L',4], ['L',3], ['L',3], ['R',2], ['L',3], ['L',5], ['L',4], ['L',4], ['R',1], ['R',5], ['L',4], ['L',3], ['L',3], ['L',3], ['L',2], ['L',5], ['R',1], ['L',2], ['R',5], ['L',3], ['L',4], ['R',4], ['L',5], ['R',3], ['R',4], ['L',2], ['L',1], ['L',4], ['R',1], ['L',3], ['R',1], ['R',3], ['L',2], ['R',1], ['R',4], ['R',5], ['L',3], ['R',5], ['R',3], ['L',3], ['R',4], ['L',2], ['L',5], ['L',1], ['L',1], ['R',3], ['R',1], ['L',4], ['R',3], ['R',3], ['L',2], ['R',5], ['R',4], ['R',1], ['R',3], ['L',4], ['R',3], ['R',3], ['L',2], ['L',4], ['L',5], ['R',1], ['L',4], ['L',5], ['R',4], ['L',2], ['L',1], ['L',3], ['L',3], ['L',5], ['R',3], ['L',4], ['L',3], ['R',5], ['R',4], ['R',2], ['L',4], ['R',2], ['R',3], ['L',3], ['R',4], ['L',1], ['L',3], ['R',2], ['R',1], ['R',5], ['L',4], ['L',5], ['L',5], ['R',4], ['L',5], ['L',2], ['L',4], ['R',4], ['R',4], ['R',1], ['L',3], ['L',2], ['L',4], ['R',3]];
//test array
// var steps = [['R',8], ['R',4], ['R',4], ['R',8]];
 
//------------------------------------
 
var locations = [[x,y]];
var wherebeens = [];
var myDir = 'north';
 
for (var i = 0; i < steps.length; i++) {
    var x2 = x;
    var y2 = y;
   
    if (steps[i][0] == 'L') {
        var j;
        switch(myDir) {
        case 'north':
            x -= steps[i][1];
            myDir = "west";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x2,y]);
                x2--;
            }
            break;
        case 'east':
            y += steps[i][1];
            myDir = "north";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x,y2]);
                y2++;
            }
            break;
        case 'south':
            x += steps[i][1];
            myDir = "east";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x2,y]);
                x2++;
            }
            break;
        case 'west':
            y -= steps[i][1];
            myDir = "south";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x,y2]);
                y2--;
            }
            break;
        default:
            document.write("I dont know where I am");
        }
    } else {
       
        switch(myDir) {
        case 'north':
            x += steps[i][1];
            myDir = "east";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x2,y]);
                x2++;
            }
            break;
        case 'east':
            y -= steps[i][1];
            myDir = "south";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x,y2]);
                y2--;
            }
            break;
        case 'south':
            x -= steps[i][1];
            myDir = "west";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x2,y]);
                x2--;
            }
            break;
        case 'west':
            y += steps[i][1];
            myDir = "north";
            locations.push([x,y]);
            for (j = 0; j < steps[i][1]; j++) {
                wherebeens.push([x,y2]);
                y2++;
            }
            break;
        default:
            document.write("I dont know where I am");
        }
    }
}
 
//create a locations object prototype
function Coordinate (xCoord, yCoord) {
       this.xCoord = xCoord;
       this.yCoord = yCoord;
}
 
var moves = [];
var move;
var dups = [];
 
for (var i = 0; i < wherebeens.length; i++) {
       move = new Coordinate(wherebeens[i][0], wherebeens[i][1]);
       moves.push(move);
}

//figure out how to find duplicate Move objects in the array 
//stringify the array of objects --> moves is the array of objects

//object to hold the stringified objects
var counter = {}

//loop through stringified object and find duplicates
moves.forEach(function(obj) {
    var key = JSON.stringify(obj);
    counter[key] = (counter[key] || 0) + 1;
    if(counter[key] === 2) {
        dups.push(key);
    }
})

console.log(counter); //stringified version
console.log(dups); //array of duplicate objects in moves in stringified version

//understanding how to access items in counter object
counter[Object.keys(counter)[0]]  // = 1
Object.keys(counter)[0]   // = "{"xCoord":0,"yCoord":0}"

//parse a JSON string example
var response = '{"result":true,"count":1}';
var json = '{"result":true,"count":1}',
    obj = JSON.parse(json);

console.log(obj.count);
console.log(obj.result);
console.log(obj);

//parsing one of the counter objects that had been stringified
JSON.parse(Object.keys(counter)[0]); // = Object {xCoord: 0, yCoord: 0}
console.log(JSON.parse(Object.keys(counter)[0]));
//still stringified counter object
console.log(Object.keys(counter)[0]);


//1. example of finding dup objects in array
    // counter = {}

    // yourArray.forEach(function(obj) {
    //     var key = JSON.stringify(obj)
    //     counter[key] = (counter[key] || 0) + 1
    // })
 
//2. test array checking indices
    // var arr = ['one', 'two', 'three', 'three', 'five', 'two', 'eight'];
    // var holds = [];
    // var dups = [];
    // for (var i = 0; i < arr.length; i++) {
    //     var temp = arr.indexOf(arr[i]);
    // if (holds.indexOf(temp) == -1) {
    //     holds.push(temp);
    // } else {
    //     dups.push(temp);
    // }
    // }
 
 
 