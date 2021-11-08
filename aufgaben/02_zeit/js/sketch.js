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
    let h = getTime.getHours();
    if(h >= 12){
        h -= 12;   
    }
    console.log(h);

    const secContainerWidth = WIDTH/1.2;
    const rectSize = secContainerWidth/60;
    const rectGap = secContainerWidth/60;
    const HrectSize = secContainerWidth/12;
    const HrectGap = secContainerWidth/12;


    //Sec
    push();
    let j = 0;
    for(let i = 0; i < s; i++){
        if(i % 10 === 0){
            j += 1;
        }
        fill(100 + j * 50);
        rect(rectSize * i + rectSize/2, rectSize + rectGap * j, rectSize, rectSize);
    }
    pop();

    //Min
    const gapSecMin = rectSize*8 + ((rectSize * 6)/2);
    push();
    for(let i = 0; i < m; i++){
        let j = 0;
        if(i % 2 === 0){
            j = 1;
        }else{
            j = 0;
        }
        rect(rectSize * i + rectSize/2, rectSize + gapSecMin + j * 50, rectSize, rectSize* 6 );
    }
    pop();

    //Hours
    const gapMinHour = (rectSize*6 + ((rectSize * 6)/2)) * 2;
    push();
    for(let i = 0; i < h; i++ ){
        rectMode(CORNER);
        rect(HrectSize * i, HrectSize + gapMinHour, HrectSize, HrectSize * 3);
    }
    pop();
}

function windowResized(){
    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;
    resizeCanvas(WIDTH, HEIGHT);

}