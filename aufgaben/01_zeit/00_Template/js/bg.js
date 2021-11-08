class Bg {
    constructor(){
        this.d = 2.5;
        this.x = random(1) > 0.5 ? -WIDTH/this.d : WIDTH/this.d;
        this.y = -HEIGHT/2;
        this.sx = this.x;
        this.ra = random(0, 40);
        this.rw = random(0.1, 9);
        this.rm = random(0.1, 60);
        this.rspeed = random(-1, 1);
        this.t = 0;
    }

    draw(){
        
        stroke(255,255,255, this.ra);
        strokeWeight(this.rw);
        line(this.x, this.y, this.x, this.y+HEIGHT);
    }
    move(){
       
        this.t += this.rspeed;
        this.x = (sin(this.t) * this.rm ) + this.sx;
        
       
    }
}