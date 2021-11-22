class BallT {
    constructor(x, y, size, rc){
        this.x = x;
        this.y = y;
        this.size = size;
        this.size2 = size/4;
        this.rc = rc;
        this.speed = 0.1;
        this.cy = -200;
    }

    draw(mouseW){
        fill(this.rc);
        // ellipse(this.x, this.y, this.size, this.size2);
        push()
        translate(this.x, this.cy, this.y);
        ellipsoid(30+mouseW, 40+mouseW, 40);
        pop()
    }

    move(time, i, acc){
        let stime = time * 2;
        
        this.x = sin((stime + i) * 40 ) * 500;
        this.y = -cos((stime + i) * 40 ) * 200;
        // this.cy = cos((stime + i) * 100) * 200;
        this.size = (cos((stime + i) * 40) * 300);
        this.size2 = abs(sin((stime + i) * 20) * 100);

        if(this.y > height){
            this.y = -height/2;
            this.speed = 0.1;
        }
    }
}