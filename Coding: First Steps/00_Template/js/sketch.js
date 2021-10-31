let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;


let s = 0;
let m = 0;
let h = 0;

let secondsAngle = 6;

let secondballs = [];


let sec = 0.1;
let time =0;
let minutes = 0;
let secondt;
let minuteBall;
let hourBall;
let bgLine;
let bgLineA = [];


function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(0,0,0,255);
  angleMode(DEGREES);
  frameRate(30);
  //seconds ball
  for(let i = 0; i < 60; i++){
    secondballs.push(new SecondBall(secondsAngle * i, 10));
  }
  // secondt = new Secondt();

  //mintuesball
  minuteBall = new MinuteBall(0, 30);
  //hour
  hourBall = new HourBall(0, 50);
  for(let i = 0; i < 120; i++){
    bgLineA.push(new Bg());
  }

  //bglines
  bgLine = new Bg();

}

function draw() {
  angleMode(DEGREES);
  background(0,0,0,255);
  noStroke();
  translate(WIDTH/2, HEIGHT/2);
  rotate(180);
  fill(255);
  
 
  //lines background 
  bgLine.draw();
  bgLineA.map((line) => {
    line.draw();
    line.move();

  })

   //zeit
  // 😊ES6

  
  date = new Date();
  // let seconds = date.getSeconds();
  let minutesE = date.getMinutes();
  let houres = date.getHours();
  
  // 🍎p5js
  s = second();
  m = minute();
  h = hour();
 

  //second
  sec = 0.20;
  time += sec;
 
  noStroke();
  secondballs.map((ball) => {
    ball.draw();
    ball.move(time);
  });
  

  push();
  stroke(255);
  strokeWeight(1);
  minuteBall.draw();
  minuteBall.move(minutesE);
  
  hourBall.draw();
  hourBall.move(houres%12);
  pop();
  



}


//💡Dain: addEventlistener('resize');
function windowResized() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  resizeCanvas(WIDTH, HEIGHT);
}