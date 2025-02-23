
var purplecube = {
    colour:'purple',
    x: 70,
    y: 70,
    w: 100,
    h: 100,
    xspeed: 10,
    yspeed: 15,
    draw(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xspeed;
        this.y += this.yspeed;
        if(this.x <0 || this.x > width - this.w){
            this.xspeed *= -1;
        }
        if(this.y > height - this.h || this.y <0){
            this.yspeed *= -1;
        }
        if(this.x > 500){
            fill('red')
            rect(this.x, this.y, this.w, this.h, 100)
        }
    }
};

function setup(){
    createCanvas(1920,1080)
}

function draw(){
    background ('yellow');
    purplecube.draw();
    purplecube.move();
}