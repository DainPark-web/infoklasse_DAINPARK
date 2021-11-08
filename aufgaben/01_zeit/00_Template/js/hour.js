class HourBall {
    constructor(a, size){
        this.x = 0
        this.y = 0
        this.size = size;
        this.a = a;
        this.sx = this.x;
        this.sy = this.y;
        this.t = 0;

        this.ax = 0;
        this.ay = 0;
    }

    draw(){
        ellipse(this.x, this.y, this.size, this.size);
        circle(this.sx, this.sy, this.size/3);
        circle(this.ax, this.ay, this.size/3);
        
        line(0, 0, this.sx, this.sy);
        line(0, 0, this.ax, this.ay);

    }

    move(time){
        this.a = (-(time * 30));
        // this.size = sin(this.t + this.a) * 20;
        
        this.t += 1;
        this.x = (sin(this.a) * HEIGHT/5); 
        this.y = (cos(this.a) * HEIGHT/5);

        this.sx = (sin(this.t) * 50) + this.x;
        this.sy = (cos(this.t) * (sin(this.t) * 30)) + this.y;
        this.ax = (sin(this.t + 40) * (sin(this.t) * 20)) + this.x;
        this.ay = (cos(this.t + 100) * 30) + this.y;
    }
}