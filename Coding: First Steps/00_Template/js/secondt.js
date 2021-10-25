class Secondt {
    constructor(){
        this.x = 0;
        this.y = 0;
        this.size = 20;

        this.test = 0;
        this.m = 0;
    }

    draw(){
        fill(255,255,255);
        ellipse(this.x, this.y, this.size,this.size);
    }

    move(minutes){
       
        this.m += 1;
        this.x = sin(-minutes) * 280 + (sin(this.m) * 20);
        this.y = cos(-minutes) * 280;
    }

}

