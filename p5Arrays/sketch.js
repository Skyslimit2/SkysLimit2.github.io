
let xmovement = [];
let ymovement = [];

function setup(){
    createCanvas(windowWidth,windowHeight);
    // referenced from https://p5js.org/reference/p5/Array/
    for(let x = 20; x < 1000; x += 20){
        xmovement.push(x);
    }
     // end refrencing
    
    for(let y = 20; y < 1000; y += 20){
        ymovement.push(y);
    }
}
    // end borrowing
function draw(){
    background('red');

    //referenced from https://p5js.org/reference/p5/Array/

    for(let i = 0; i < xmovement.length; i += 1){
        xmovement[i] += random(-10,10);
        circle(xmovement[i],50,50);
    }

    //end referencing

    for(let i = 0; i < ymovement.length; i += 1){
        ymovement[i] += random(-10,10);
        circle(ymovement[i],50,50);
    }
}

