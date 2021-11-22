


let bg;
let r = 200;

function setup(){
    createCanvas(innerWidth, innerHeight);
    bg = createGraphics(innerWidth, innerHeight);


    angleMode(DEGREES);
    //bg
    bg.noStroke();
    bg.background(20, 30);
    for(let i =0; i < 30000; i++){
        let x = random(width);
        let y = random(height);
        let n = noise(x * 0.01, y * 0.01) * 2;
        
        bg.fill(100, 60);
        bg.rect(x, y, n,n);
    }
}

function draw(){
    
    push()
        translate(width/2, height/2);
        stroke(255);
        strokeWeight(20);
        beginShape(POINTS);
            for(let i = 0; i < 20; i++){
                vertex(sin(i * 20) * r, cos(i * 20) * r);
            }

        endShape();
    pop();

    image(bg, 0, 0,);
}

// function windowResized(){
//     resizeCanvas(innerWidth, innerHeight);
// }