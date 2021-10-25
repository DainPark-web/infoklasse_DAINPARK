let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;




//ballclass
let ball;
let ballH = [];
let secondBall;

function setup() {
  
  createCanvas(WIDTH, HEIGHT);
  background(0,0,0,255);
  secondBall = new SecondBall(WIDTH, HEIGHT);
  //ball class
  // for(let i = 0; i < 200; i++){
  //   ballH.push(new Ball(WIDTH, HEIGHT));
  // }
  // console.log('dains');

}

function draw() {
  noStroke();
  background(0,0,0,7);


  //Seconds
  let date = new Date();
  console.log(date.getSeconds());


  secondBall.draw();
  secondBall.move();
  
  //ball class
  // for(let i = 0; i < ballH.length; i++){
  //   ballH[i].draw();
  //   ballH[i].move();
    
  // }
  




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