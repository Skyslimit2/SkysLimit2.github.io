var brushcolor;
var bgcolor;
let strokes;


// remixed from https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

// end remix


function setup(){
  createCanvas(windowWidth, windowHeight);
  let music = createAudio('A Thousand Greetings.mp3');
  music.showControls();
  music.position(850,75);

  brushcolor = createColorPicker('purple');
  bgcolor = createColorPicker('yellow');

  var bgcolorbutton = createButton('Refresh');
  bgcolorbutton.mousePressed(repaint);
  bgcolorbutton.changed(repaint);
  background(bgcolor.value());
  strokes = createSlider(1, 15, 10, 1);
}

function repaint(){
  background(bgcolor.value());
  console.log(bgcolor.value().setBlue(255));
}

function draw(){
  strokeWeight(strokes.value());
  stroke(brushcolor.value());
  if(mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
