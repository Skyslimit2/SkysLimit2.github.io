var button;
let input;
let fontslider;

function setup(){
    createCanvas(600, 600);
    button = createButton('Change Name');
    button.position(400,200);
    button.mousePressed(refresh);
    // remixed from https://p5js.org/reference/p5/createInput/
    input = createInput('Enter Name Here');
    input.position(200,200);
    // end remix

    fontslider = createSlider(5,25,20,5);
}

function draw(){
    background('grey');
    // remixed from https://p5js.org/reference/p5/createInput/
    let msg = input.value();
    text(msg,100,100);
    //end remix
    textSize(fontslider.value());
}

function refresh(){
    input(input.value('Enter Your New Name'));
}

function keyPressed(){
    if(key === 'Escape'){
        // remixed from https://p5js.org/reference/p5/fullscreen/
        let fs = fullscreen();
        fullscreen(!fs);
    }
}