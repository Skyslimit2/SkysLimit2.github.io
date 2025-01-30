var bubby = "polite";

function setup(){
    createCanvas(1080,1200);
}

var x = 0;
var y = 0;

function draw(){
    background('purple');
    rect(x,y,50,50);
    x = x + 2;
    x = x % 15000;
    y = y + 1;
    y = y % 15000;
}

console.log(bubby);