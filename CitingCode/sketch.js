// Tutorial #1: https://p5js.org/tutorials/conditionals-and-interactivity/
// Tutorial #2: https://www.w3schools.com/howto/howto_js_tabs.asp



//remixed from https://www.w3schools.com/howto/howto_js_tabs.asp
function openColor(evt, colorname){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
    }

    document.getElementById(colorname).style.display="block";
    evt.currentTarget.className += "active";
}
// End remix

let moonHeight;
let horizon = 300;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

// remixed from https://p5js.org/tutorials/conditionals-and-interactivity/
function draw(){
    background('orange');
    moonHeight = mouseY;

    if(moonHeight < horizon){
        background("blue")
    }

    // creating the moon
    circle(400, moonHeight, 160);
    fill("white");

    stroke("green");
    line(0, horizon, 1000, horizon);
}
// end remix