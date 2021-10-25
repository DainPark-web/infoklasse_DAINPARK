class Ball {
    constructor(WIDTH, HEIGHT){
        this.x = random(0, WIDTH);
        this.y = random(0, HEIGHT);
        this.xSpeed = random(-1, 1);
        this.ySpeed = random(-1, 1);

        this.size = random(10, 100);
    }

    draw(){
        fill(200,0,0);
        ellipse(this.x, this.y, this.size,this.size);
    }

    move(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > WIDTH || this.x < 0){
            this.xSpeed *= -1;
        }
        if(this.y > HEIGHT || this.y < 0){
            this.ySpeed *= -1;
        }
    }

}

