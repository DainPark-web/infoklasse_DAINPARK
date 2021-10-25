class SecondBall {
    constructor(){
        this.x = WIDTH/2;
        this.y = HEIGHT/2;

        this.a = 50;
    }

    draw(){
        ellipse(this.x, HEIGHT/2, 40, 40);
    }

    move(){
       
        this.x = (sin(this.a) * 500) + WIDTH/2;
    }
}