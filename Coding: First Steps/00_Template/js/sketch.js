let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;

let time = 0;

let ball;
let ballH = [];

function setup() {
  
  createCanvas(WIDTH, HEIGHT);
  background(0,0,0,255);
  for(let i = 0; i < 200; i++){
    ballH.push(new Ball(WIDTH, HEIGHT));
  }


}

function draw() {
  noStroke();
  time += 0.1;
  background(0,0,0,7);

  for(let i = 0; i < ballH.length; i++){
    ballH[i].draw();
    ballH[i].move();
    
  }
  
  // ellipse(50,50,80,random(50));
  fill(0, 200, 0);
  ellipse((sin(time) * 59) + WIDTH/2,(cos(time) * 59) + HEIGHT/2,80,80);



  //LEARNINGS
  //zeige draw spezifikationen 
  // console log zeigen
  // random werte zeigen
  // random werte aufrunden (floor) zeigen
  

}


//💡Dain: addEventlistener('resize');
function windowResized() {
  WIDTH = window.innerWidth;
  HEIGHT = window.innerHeight;
  resizeCanvas(WIDTH, HEIGHT);
}