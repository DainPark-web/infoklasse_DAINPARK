class Item{
    constructor(posX, posY, city, duration, shape){
        this.pos = createVector(posX, posY);
        this.cityName = city;
        this.dur = duration;
        this.shape = shape;
    }

    draw(){
        push();
        translate(this.pos.x, this.pos.y);
        circle(0, 0, 4);
       
        //text
        rotate(40);
        push();

        fill("#232020");
        textSize(14);
        textStyle(BOLD);
        text(this.cityName, 0, 10);
        pop();
        rotate(-180)
        fill(10, 50, 60);
        triangle(-5, 10, 0, log(this.dur) * 100, 5, 10);
        

        //shape

        switch (this.shape){
            case "circle" :
                fill(200, 100, 100);
                circle(0, log(this.dur) * 100 + 50, 30);
                break;
            case "light" :
                fill(100, 200, 200);
                ellipse(0, log(this.dur) * 100 + 50, 5, 30);
                ellipse(0, log(this.dur) * 100 + 50, 30, 5);
                break;
            case "cylinder" :
                push();
                noFill();
                stroke(100, 130, 150);
                strokeWeight(6);
              
                ellipse(0, log(this.dur) * 100 + 50, 30, 20);
                pop();
                break;
            case "sphere" : 
                circle(0, log(this.dur) * 100 + 50, 20);
                circle(0, log(this.dur) * 100 + 75, 20);
                break;
            case "fireball" :
                ellipse(0, log(this.dur) * 100 + 50, 50, 20);
                ellipse(0, log(this.dur) * 100 + 60, 30, 20);
                ellipse(0, log(this.dur) * 100 + 80, 10, 10);
                break;
            case "oval":
                triangle(-10, log(this.dur) * 100 + 50, 0, log(this.dur) * 100 + 80, 10, log(this.dur) * 100 + 50);
                break;
            default :
                push();
                fill(100, 100, 100);
                circle(0, log(this.dur) * 100 + 50, 20);
                pop();
                break;

        }
       
        pop();
    }


}