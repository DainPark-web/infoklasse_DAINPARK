class Ball {
    constructor(x, y, size, rc){
        this.x = x;
        this.y = y;
        this.size = size;
        this.size2 = size/4;
        this.rc = rc;
        this.speed = 0.1;
    }

    draw(){
        fill(this.rc);
        ellipse(this.x, this.y, this.size, this.size2);
    }

    move(time, i, acc){
        let stime = time;
        
        this.x = sin((stime + i) * 40 ) * 300;
        this.y = (30 * i) - height/2;
        this.size = (cos((stime + i) * 40) * 300) + 60;
        this.size2 = abs(sin((stime + i) * 20) * 100);

        if(this.y > height){
            this.y = -height/2;
            this.speed = 0.1;
        }
    }
}