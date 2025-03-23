
function setup(){
    createCanvas(1500,1500);

    // remixed from https://p5js.org/reference/p5/createImg/
    let img = createImg(
    'ultrakill.jpg',
    'ultrakill'
    );
    img.position (0,60);
    //end remix

    // remixed from https://p5js.org/reference/p5/createAudio/
    let beat = createAudio('War Without Reason.mp3');
    beat.showControls();
    // end remix

    beat.position(0,0)

}

function draw(){
    background('red');
}
