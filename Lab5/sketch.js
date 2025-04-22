var fact;
var index = 0;
function preload(){
    fact = loadJSON('data.json');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log(fact);
}

function draw(){
    background('orange');
    textSize(20);
    text('Some Interesting Facts for You :)',100,70);
    
    text(fact.facts1[index],100,150);
    text(fact.facts2[index],100,200);
    index++;
    index = index % fact.facts.length;
}