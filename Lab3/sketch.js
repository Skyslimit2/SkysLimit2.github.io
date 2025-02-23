var brushcolour;
var bgcolourchoice;
let strokeslider;


function setup(){
    createCanvas(1400,600);
    brushcolour = createColorPicker('purple');
    bgcolourchoice = createColorPicker('yellow');

    var bgColourbutton = createButton('Refresh');
    bgColourbutton.mousePressed(repaint);
    bgColourbutton.changed(repaint);
    background(bgcolourchoice.value());

    strokeslider = createSlider(1,15,10,1);
}

function repaint(){
    background(bgcolourchoice.value());
    console.log(bgcolourchoice.value().setRed(255));
}

//borrowed from p5js.org/reference/p5/keyPressed/
function keyPressed(){
    if(key === 'r'){
        background(bgcolourchoice.value());
        console.log(bgcolourchoice.value().setRed(255));
    }
}
//end borrowing

function draw(){
    strokeWeight(strokeslider.value());
    stroke(brushcolour.value());
    //borrowed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    //end borrowing
}