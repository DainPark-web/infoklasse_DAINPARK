class Item{
    constructor(posX, posY, city, duration, shape, durname){
        this.pos = createVector(posX, posY);
        this.cityName = city;
        this.dur = duration;
        this.shape = shape;
        this.durname = durname;
    }

    draw(){
        push();
        translate(this.pos.x, this.pos.y);
        circle(0, 0, 4);
       
        //text
        rotate(40);
        push();
        fill("#fff");
        textSize(14);
        textStyle(BOLD);
        text(this.cityName, 0, 20);
        pop();
        
        push();
        rotate(-90);
        fill(200);
        text(this.durname, 20, -10);
        pop();

        //text2

        
        rotate(-180)
        fill(255);
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
                fill("#F28C0F");
                circle(0, log(this.dur) * 100 + 50, 20);
                circle(0, log(this.dur) * 100 + 75, 20);
                break;
            case "fireball" :
                fill("#8C3048");
                ellipse(0, log(this.dur) * 100 + 50, 50, 20);
                ellipse(0, log(this.dur) * 100 + 60, 30, 20);
                ellipse(0, log(this.dur) * 100 + 80, 10, 10);
                break;
            case "oval":
                fill("#F2B6C6");
                triangle(-10, log(this.dur) * 100 + 50, 0, log(this.dur) * 100 + 80, 10, log(this.dur) * 100 + 50);
                break;
            case "rectangle":
                fill(200, 100, 100);
                rect(0, log(this.dur) * 100 + 50, 30, 30);
                break;
            case "chevron":
                fill(100, 200, 200);
                rect(0, log(this.dur) * 100 + 50, 10, 30);
                rect(0, log(this.dur) * 100 + 50, 30, 10);
                break;
            case "other":
                push();
                noFill()
                stroke(100, 130, 150);
                strokeWeight(6);
                rect(0, log(this.dur) * 100 + 50, 20, 20);
                pop();
                break;
            case "formation":
                push();
                noFill();
                stroke("#F28C0F");
                strokeWeight(6);
              
                ellipse(0, log(this.dur) * 100 + 50, 10, 30);
                ellipse(10, log(this.dur) * 100 + 50, 10, 30);
                ellipse(-10, log(this.dur) * 100 + 50, 10, 30);
               
                pop();
                break;
            default :
                push();
                fill(200);
                circle(0, log(this.dur) * 100 + 50, 5);
                pop();
                break;

        }
       
        pop();
    }

    


}