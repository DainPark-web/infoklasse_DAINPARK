


let bg;
let r = 200;

let time = 0;
let speed = 0.01;
let acc = 0.1;
let ballList = [];
let ballListT = [];
let ballListH = [];

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
    for(let i =0; i < 30; i++){
        ballListT[i] = new BallT(0, 0, 30, colors[floor(random(5))]);
    }
    for(let i =0; i < 10; i++){
        ballListH[i] = new BallH(0, 0, 30, colors[floor(random(5))]);
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
    let mouseW = map(mouseX, 0, width, -100, 100);
    //circle
    push()
        // translate(0, -height/4, 0);
       
        noStroke();
       
        for(let i = 0; i< ballListT.length; i++){
            ballListT[i].draw(abs(mouseW));
            ballListT[i].move(time, i, acc);
        }
        
    
    pop();
    push()
        // translate(0, -height/4, 0);
       
        noStroke();
       
        
        for(let i = 0; i< ballList.length; i++){
            ballList[i].draw();
            ballList[i].move(time, i, acc);
        }
        
    
    pop();
    push()
        // translate(0, -height/4, 0);
       
        noStroke();
       
        
        for(let i = 0; i< ballListH.length; i++){
            ballListH[i].draw();
            ballListH[i].move(time, i, acc);
        }
        
    
    pop();

    image(bg, 0 - width/2, 0- height/2);
}

// function windowResized(){
//     resizeCanvas(innerWidth, innerHeight);
// }