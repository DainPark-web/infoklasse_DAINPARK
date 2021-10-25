class SecondBall {
    constructor(a, size){
        this.x = 0
        this.y = 0
        this.size = size;
        this.a = a;

        this.t = 0;
    }

    draw(){
        ellipse(this.x, this.y, this.size, this.size);
        
    }

    move(time){
        // this.a = (-(s * 6));
        this.size = sin(this.t + this.a) * 10;
        this.t = time;
        this.x = (sin(this.a) * HEIGHT/2.5 + (sin(this.t + this.a) * 10)); 
        this.y = (cos(this.a) * HEIGHT/2.5 + (-tan(this.t + this.a) * 10));
    }
}