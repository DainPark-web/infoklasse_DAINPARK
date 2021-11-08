let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;


function preload(){

}


function setup(){
    createCanvas(WIDTH, HEIGHT);
    rectMode(CENTER);
}

function draw(){
    background(100);
    const size = 10;
    let getTime = new Date();
    let s = getTime.getSeconds();   // seconds
    let m = getTime.getMinutes();

    fill(255);
    // noStroke();
    const secContainerWidth = WIDTH/1.2;
    const rectSize = secContainerWidth/60;
    const rectGap = secContainerWidth/60;
    let j = 0;
    for(let i = 0; i < s; i++){
        if(i % 10 === 0){
            j += 1;
        }
        rect(rectSize + rectGap * i, rectSize + rectGap * j, rectSize, rectSize);
    }
    for(let i = 0; i < m; i++){
        
    }
}

function windowResized(){
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    resizeCanvas(WIDTH, HEIGHT);

}