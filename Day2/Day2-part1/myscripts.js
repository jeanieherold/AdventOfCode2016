// Advent of Code 2016 Day 2 Part 1
var dig1 = "LRRLLLRDRURUDLRDDURULRULLDLRRLRLDULUDDDDLLRRLDUUDULDRURRLDULRRULDLRDUDLRLLLULDUURRRRURURULURRULRURDLULURDRDURDRLRRUUDRULLLLLDRULDDLLRDLURRLDUURDLRLUDLDUDLURLRLDRLUDUULRRRUUULLRDURUDRUDRDRLLDLDDDLDLRRULDUUDULRUDDRLLURDDRLDDUDLLLLULRDDUDDUUULRULUULRLLDULUDLLLLURRLDLUDLDDLDRLRRDRDUDDDLLLLLRRLLRLUDLULLDLDDRRUDDRLRDDURRDULLLURLRDLRRLRDLDURLDDULLLDRRURDULUDUDLLLDDDLLRLDDDLLRRLLURUULULDDDUDULUUURRUUDLDULULDRDDLURURDLDLULDUDUDDDDD";
var dig2 = "RUURUDRDUULRDDLRLLLULLDDUDRDURDLRUULLLLUDUDRRUDUULRRUUDDURDDDLLLLRRUURULULLUDDLRDUDULRURRDRDLDLDUULUULUDDLUDRLULRUDRDDDLRRUUDRRLULUULDULDDLRLURDRLURRRRULDDRLDLLLRULLDURRLUDULDRDUDRLRLULRURDDRLUDLRURDDRDULUDLDLLLDRLRUDLLLLLDUDRDUURUDDUDLDLDUDLLDLRRDLULLURLDDUDDRDUDLDDUULDRLURRDLDLLUUDLDLURRLDRDDLLDLRLULUDRDLLLDRLRLLLDRUULUDLLURDLLUURUDURDDRDRDDUDDRRLLUULRRDRULRURRULLDDDUDULDDRULRLDURLUDULDLDDDLRULLULULUDLDDRDLRDRDLDULRRLRLRLLLLLDDDRDDULRDULRRLDLUDDDDLUDRLLDLURDLRDLDRDRDURRDUDULLLDLUDLDRLRRDDDRRLRLLULDRLRLLLLDUUURDLLULLUDDRLULRDLDLDURRRUURDUDRDLLLLLLDDDURLDULDRLLDUDRULRRDLDUDRLLUUUDULURRUR";
var dig3 = "URRRLRLLDDDRRLDLDLUDRDRDLDUDDDLDRRDRLDULRRDRRDUDRRUUDUUUDLLUURLRDRRURRRRUDRLLLLRRDULRDDRUDLRLUDURRLRLDDRRLUULURLURURUDRULDUUDLULUURRRDDLRDLUDRDLDDDLRUDURRLLRDDRDRLRLLRLRUUDRRLDLUDRURUULDUURDRUULDLLDRDLRDUUDLRLRRLUDRRUULRDDRDLDDULRRRURLRDDRLLLRDRLURDLDRUULDRRRLURURUUUULULRURULRLDDDDLULRLRULDUDDULRUULRRRRRLRLRUDDURLDRRDDULLUULLDLUDDDUURLRRLDULUUDDULDDUULLLRUDLLLRDDDLUUURLDUDRLLLDRRLDDLUDLLDLRRRLDDRUULULUURDDLUR";
var dig4 = "UULDRLUULURDRLDULURLUDULDRRDULULUDLLDURRRURDRLRLLRLDDLURRDLUUDLULRDULDRDLULULULDDLURULLULUDDRRULULULRDULRUURRRUDLRLURDRURDRRUDLDDUURDUUDLULDUDDLUUURURLRRDLULURDURRRURURDUURDRRURRDDULRULRRDRRDRUUUUULRLUUUDUUULLRRDRDULRDDULDRRULRLDLLULUUULUUDRDUUUDLLULDDRRDULUURRDUULLUUDRLLDUDLLLURURLUDDLRURRDRLDDURLDLLUURLDUURULLLRURURLULLLUURUUULLDLRDLUDDRRDDUUDLRURDDDRURUURURRRDLUDRLUULDUDLRUUDRLDRRDLDLDLRUDDDDRRDLDDDLLDLULLRUDDUDDDLDDUURLDUDLRDRURULDULULUDRRDLLRURDULDDRRDLUURUUULULRURDUUDLULLURUDDRLDDUDURRDURRUURLDLLDDUUDLLUURDRULLRRUUURRLLDRRDLURRURDULDDDDRDD";
var dig5 = "LLRUDRUUDUDLRDRDRRLRDRRUDRDURURRLDDDDLRDURDLRRUDRLLRDDUULRULURRRLRULDUURLRURLRLDUDLLDULULDUUURLRURUDDDDRDDLLURDLDRRUDRLDULLRULULLRURRLLURDLLLRRRRDRULRUDUDUDULUURUUURDDLDRDRUUURLDRULDUDULRLRLULLDURRRRURRRDRULULUDLULDDRLRRULLDURUDDUULRUUURDRRLULRRDLDUDURUUUUUURRUUULURDUUDLLUURDLULUDDLUUULLDURLDRRDDLRRRDRLLDRRLUDRLLLDRUULDUDRDDRDRRRLUDUDRRRLDRLRURDLRULRDUUDRRLLRLUUUUURRURLURDRRUURDRRLULUDULRLLURDLLULDDDLRDULLLUDRLURDDLRURLLRDRDULULDDRDDLDDRUUURDUUUDURRLRDUDLRRLRRRDUULDRDUDRLDLRULDL";

//change the dig number to the corresponding line
var moves = (dig1.split(''));
//start on 5 for line 1 --> change the currKey initial value to the last currkey of the previous line for lines 2 through 5
var currKey = 5;
var key;
var dir;
var l;
var r;
var u;
var d;

var whereAmI;

//find the next key
for (var i = 0; i < moves.length; i++) {
    dir = moves[i].toLowerCase();
    switch(currKey) {
        case 1:
            if(dir === 'l') {
                currKey = 1;
            } else if (dir === 'r'){
                currKey = 2;
            } else if (dir === 'u') {
                currKey = 1;
            } else {
                currKey = 4;
            }
            break;
        case 2:
            if(dir === 'l') {
                currKey = 1;
            } else if (dir === 'r'){
                currKey = 3;
            } else if (dir === 'u') {
                currKey = 2;
            } else {
                currKey = 5;
            }
            break;
        case 3:
            if(dir === 'l') {
                currKey = 2;
            } else if (dir === 'r'){
                currKey = 3;
            } else if (dir === 'u') {
                currKey = 3;
            } else {
                currKey = 6;
            }
            break;
        case 4:
            if(dir === 'l') {
                currKey = 4;
            } else if (dir === 'r'){
                currKey = 5;
            } else if (dir === 'u') {
                currKey = 1;
            } else {
                currKey = 7;
            }
            break;
        case 5:
            if(dir === 'l') {
                currKey = 4;
            } else if (dir === 'r'){
                currKey = 6;
            } else if (dir === 'u') {
                currKey = 2;
            } else {
                currKey = 8;
            }
            break;
        case 6:
            if(dir === 'l') {
                currKey = 5;
            } else if (dir === 'r'){
                currKey = 6;
            } else if (dir === 'u') {
                currKey = 3;
            } else {
                currKey = 9;
            }
            break;    
        case 7:
            if(dir === 'l') {
                currKey = 7;
            } else if (dir === 'r'){
                currKey = 9;
            } else if (dir === 'u') {
                currKey = 4;
            } else {
                currKey = 7;
            }
            break;
        case 8:
            if(dir === 'l') {
                currKey = 7;
            } else if (dir === 'r'){
                currKey = 9;
            } else if (dir === 'u') {
                currKey = 5;
            } else {
                currKey = 8;
            }
            break;
        case 9:
            if(dir === 'l') {
                currKey = 8;
            } else if (dir === 'r'){
                currKey = 9;
            } else if (dir === 'u') {
                currKey = 6;
            } else {
                currKey = 9;
            }
            break; 

    }//end outer switch
}

// whereAmI is the value for the code. 
whereAmI = currKey;
console.log(whereAmI);