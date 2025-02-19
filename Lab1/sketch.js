function setup(){
    createCanvas (windowWidth, windowHeight);
}

function draw(){
    background(200, 300, 150);
    fill('purple');
    stroke('red');
    for(var i = 0; i < 10000; i++){
        rect((i*10)%width,(i*10)%innerHeight,25,25);
    }
    fill('red');
    stroke('black');
    rect(mouseX,mouseY,100,100,100); 
}