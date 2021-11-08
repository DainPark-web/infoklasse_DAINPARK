class MinuteBall {
    constructor(a, size){
        this.x = 0
        this.y = 0
        this.size = size;
        this.a = a;
        this.sx = this.x;
        this.sy = this.y;
        this.t = 0;
    }

    draw(){
        ellipse(this.x, this.y, this.size, this.size);
        circle(this.sx, this.sy, this.size/3);
        
        line(0, 0, this.sx, this.sy);

    }

    move(time){
        this.a = (-(time * 6));
        // this.size = sin(this.t + this.a) * 20;
        
        this.t += 1;
        this.x = (sin(this.a) * HEIGHT/3); 
        this.y = (cos(this.a) * HEIGHT/3);

        this.sx = (sin(this.t) * 50) + this.x;
        this.sy = (cos(this.t) * (sin(this.t) * 30)) + this.y;
    }
}