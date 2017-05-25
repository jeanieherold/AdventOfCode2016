// Advent of Code 2016 Day 2 Part 1
var dig1 = "LRRLLLRDRURUDLRDDURULRULLDLRRLRLDULUDDDDLLRRLDUUDULDRURRLDULRRULDLRDUDLRLLLULDUURRRRURURULURRULRURDLULURDRDURDRLRRUUDRULLLLLDRULDDLLRDLURRLDUURDLRLUDLDUDLURLRLDRLUDUULRRRUUULLRDURUDRUDRDRLLDLDDDLDLRRULDUUDULRUDDRLLURDDRLDDUDLLLLULRDDUDDUUULRULUULRLLDULUDLLLLURRLDLUDLDDLDRLRRDRDUDDDLLLLLRRLLRLUDLULLDLDDRRUDDRLRDDURRDULLLURLRDLRRLRDLDURLDDULLLDRRURDULUDUDLLLDDDLLRLDDDLLRRLLURUULULDDDUDULUUURRUUDLDULULDRDDLURURDLDLULDUDUDDDDD";
var dig2 = "RUURUDRDUULRDDLRLLLULLDDUDRDURDLRUULLLLUDUDRRUDUULRRUUDDURDDDLLLLRRUURULULLUDDLRDUDULRURRDRDLDLDUULUULUDDLUDRLULRUDRDDDLRRUUDRRLULUULDULDDLRLURDRLURRRRULDDRLDLLLRULLDURRLUDULDRDUDRLRLULRURDDRLUDLRURDDRDULUDLDLLLDRLRUDLLLLLDUDRDUURUDDUDLDLDUDLLDLRRDLULLURLDDUDDRDUDLDDUULDRLURRDLDLLUUDLDLURRLDRDDLLDLRLULUDRDLLLDRLRLLLDRUULUDLLURDLLUURUDURDDRDRDDUDDRRLLUULRRDRULRURRULLDDDUDULDDRULRLDURLUDULDLDDDLRULLULULUDLDDRDLRDRDLDULRRLRLRLLLLLDDDRDDULRDULRRLDLUDDDDLUDRLLDLURDLRDLDRDRDURRDUDULLLDLUDLDRLRRDDDRRLRLLULDRLRLLLLDUUURDLLULLUDDRLULRDLDLDURRRUURDUDRDLLLLLLDDDURLDULDRLLDUDRULRRDLDUDRLLUUUDULURRUR";
var dig3 = "URRRLRLLDDDRRLDLDLUDRDRDLDUDDDLDRRDRLDULRRDRRDUDRRUUDUUUDLLUURLRDRRURRRRUDRLLLLRRDULRDDRUDLRLUDURRLRLDDRRLUULURLURURUDRULDUUDLULUURRRDDLRDLUDRDLDDDLRUDURRLLRDDRDRLRLLRLRUUDRRLDLUDRURUULDUURDRUULDLLDRDLRDUUDLRLRRLUDRRUULRDDRDLDDULRRRURLRDDRLLLRDRLURDLDRUULDRRRLURURUUUULULRURULRLDDDDLULRLRULDUDDULRUULRRRRRLRLRUDDURLDRRDDULLUULLDLUDDDUURLRRLDULUUDDULDDUULLLRUDLLLRDDDLUUURLDUDRLLLDRRLDDLUDLLDLRRRLDDRUULULUURDDLUR";
var dig4 = "UULDRLUULURDRLDULURLUDULDRRDULULUDLLDURRRURDRLRLLRLDDLURRDLUUDLULRDULDRDLULULULDDLURULLULUDDRRULULULRDULRUURRRUDLRLURDRURDRRUDLDDUURDUUDLULDUDDLUUURURLRRDLULURDURRRURURDUURDRRURRDDULRULRRDRRDRUUUUULRLUUUDUUULLRRDRDULRDDULDRRULRLDLLULUUULUUDRDUUUDLLULDDRRDULUURRDUULLUUDRLLDUDLLLURURLUDDLRURRDRLDDURLDLLUURLDUURULLLRURURLULLLUURUUULLDLRDLUDDRRDDUUDLRURDDDRURUURURRRDLUDRLUULDUDLRUUDRLDRRDLDLDLRUDDDDRRDLDDDLLDLULLRUDDUDDDLDDUURLDUDLRDRURULDULULUDRRDLLRURDULDDRRDLUURUUULULRURDUUDLULLURUDDRLDDUDURRDURRUURLDLLDDUUDLLUURDRULLRRUUURRLLDRRDLURRURDULDDDDRDD";
var dig5 = "LLRUDRUUDUDLRDRDRRLRDRRUDRDURURRLDDDDLRDURDLRRUDRLLRDDUULRULURRRLRULDUURLRURLRLDUDLLDULULDUUURLRURUDDDDRDDLLURDLDRRUDRLDULLRULULLRURRLLURDLLLRRRRDRULRUDUDUDULUURUUURDDLDRDRUUURLDRULDUDULRLRLULLDURRRRURRRDRULULUDLULDDRLRRULLDURUDDUULRUUURDRRLULRRDLDUDURUUUUUURRUUULURDUUDLLUURDLULUDDLUUULLDURLDRRDDLRRRDRLLDRRLUDRLLLDRUULDUDRDDRDRRRLUDUDRRRLDRLRURDLRULRDUUDRRLLRLUUUUURRURLURDRRUURDRRLULUDULRLLURDLLULDDDLRDULLLUDRLURDDLRURLLRDRDULULDDRDDLDDRUUURDUUUDURRLRDUDLRRLRRRDUULDRDUDRLDLRULDL";

//change the dig number to the corresponding line
var moves = (dig1.split(''));
//start on 5 for line 1 --> change the currKey initial value to the last currkey of the previous line for lines 2 through 5
var currKey = '5';
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
    console.log(dir);
    console.log(currKey);
    switch(currKey) {
        case '1':
            if(dir === 'l') {
                currKey = '1';
            } else if (dir === 'r'){
                currKey = '1';
            } else if (dir === 'u') {
                currKey = '1';
            } else {
                currKey = '3';
            }
            break;
        case '2':
            if(dir === 'l') {
                currKey = '2';
            } else if (dir === 'r'){
                currKey = '3';
            } else if (dir === 'u') {
                currKey = '2';
            } else {
                currKey = '6';
            }
            break;
        case '3':
            if(dir === 'l') {
                currKey = '2';
            } else if (dir === 'r'){
                currKey = '4';
            } else if (dir === 'u') {
                currKey = '1';
            } else {
                currKey = '7';
            }
            break;
        case '4':
            if(dir === 'l') {
                currKey = '3';
            } else if (dir === 'r'){
                currKey = '4';
            } else if (dir === 'u') {
                currKey = '4';
            } else {
                currKey = '8';
            }
            break;
        case '5':
            if(dir === 'l') {
                currKey = '5';
            } else if (dir === 'r'){
                currKey = '6';
            } else if (dir === 'u') {
                currKey = '5';
            } else {
                currKey = '5';
            }
            break;
        case '6':
            if(dir === 'l') {
                currKey = '5';
            } else if (dir === 'r'){
                currKey = '7';
            } else if (dir === 'u') {
                currKey = '2';
            } else {
                currKey = 'A';
            }
            break;    
        case '7':
            if(dir === 'l') {
                currKey = '6';
            } else if (dir === 'r'){
                currKey = '8';
            } else if (dir === 'u') {
                currKey = '3';
            } else {
                currKey = 'B';
            }
            break;
        case '8':
            if(dir === 'l') {
                currKey = '7';
            } else if (dir === 'r'){
                currKey = '9';
            } else if (dir === 'u') {
                currKey = '4';
            } else {
                currKey = 'C';
            }
            break;
        case '9':
            if(dir === 'l') {
                currKey = '8';
            } else if (dir === 'r'){
                currKey = '9';
            } else if (dir === 'u') {
                currKey = '9';
            } else {
                currKey = '9';
            }
            break;
        case 'A':
            if(dir === 'l') {
                currKey = 'A';
            } else if (dir === 'r'){
                currKey = 'B';
            } else if (dir === 'u') {
                currKey = '6';
            } else {
                currKey = 'A';
            }
            break; 
        case 'B':
            if(dir === 'l') {
                currKey = 'A';
            } else if (dir === 'r'){
                currKey = 'C';
            } else if (dir === 'u') {
                currKey = '7';
            } else {
                currKey = 'D';
            }
            break;
        case 'C':
            if(dir === 'l') {
                currKey = 'B';
            } else if (dir === 'r'){
                currKey = 'C';
            } else if (dir === 'u') {
                currKey = '8';
            } else {
                currKey = 'C';
            }
            break;
        case 'D':
            if(dir === 'l') {
                currKey = 'D';
            } else if (dir === 'r'){
                currKey = 'D';
            } else if (dir === 'u') {
                currKey = 'B';
            } else {
                currKey = 'D';
            }
            break;  

    }//end outer switch
}

// whereAmI is the value for the code. 
whereAmI = currKey;
console.log(whereAmI);