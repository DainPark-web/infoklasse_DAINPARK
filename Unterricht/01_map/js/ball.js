class Ball {
    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
    }

    draw(){
        circle(this.x, this.y, this.size);
    }

    move(time, i){
        this.x = sin((time + i) * 20) * 200;
        this.y = cos((time + i) * 20) * 100;
        this.size = sin((time + i) * 40) * 200;
    }
}