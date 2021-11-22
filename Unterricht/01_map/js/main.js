


let bg;
let r = 200;

let time = 0;
let speed = 0.01;
let acc = 0.1;
let ballList = [];

let colors = [
    "#6B4A8C",
    "#4637A6",
    "#B5B4D9",
    "#05C7F2",
    "#F2A766"
];

function setup(){
    createCanvas(innerWidth, innerHeight, WEBGL);
    bg = createGraphics(innerWidth, innerHeight);


    angleMode(DEGREES);
    //bg
    for(let i =0; i < 30; i++){
        ballList[i] = new Ball(0, 0, 30, colors[floor(random(5))]);
    }

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
    //time
  
    time += speed;
    acc += speed;
    let mouseW = map(mouseX, 0, width, -50, 50);
    //circle
    push()
        // translate(width/2, height/2);
        // rotate(180);
        // stroke(0, 200, 100);
        noStroke();
        for(let i = 0; i< ballList.length; i++){
            ballList[i].draw();
            ballList[i].move(time, i, acc);
        }
        
        // beginShape(POINTS);
        //     for(let i = 0; i < 19; i++){
        //         // strokeWeight(abs(mouseW) + (sin(time + (i * 0.1)) * 90));
               
        //         // strokeWeight( abs(sin(time) * 50));
        //         // vertex(sin(i * 20) * (r + sin(time + i) * (80 + abs(mouseW))), cos(i * 20) * (r + cos(time) * (80 + abs(mouseW))));
               
        //     }

        // endShape();
    pop();

    image(bg, 0 - width/2, 0- height/2);
}

// function windowResized(){
//     resizeCanvas(innerWidth, innerHeight);
// }