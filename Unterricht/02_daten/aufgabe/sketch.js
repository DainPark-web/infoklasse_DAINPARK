let data;
let itemList = [];
let HEIGHT = innerHeight;

let bg;

function preload() {
  data = loadTable('02_UFO_sightings_selection.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(innerWidth * 5, HEIGHT);
  angleMode(DEGREES);
  rectMode(CENTER);

  //bg
  bg = createGraphics(innerWidth * 5, innerHeight);
  bg.background(10);
  bg.noStroke();

  for(let i = 0; i < 30000; i++){
    let x = random(innerWidth * 5);
    let y = random(innerHeight);
    let n = noise(x * 0.01, y * 0.01) * 2;
   
    bg.fill(255, 100);
    bg.rect(x, y, n, n);
    
  }
  for(let i = 0; i < 1000; i++){
    let x = random(innerWidth * 5);
    let y = random(innerHeight);
    let n = noise(x * 0.01, y * 0.01) * 4;
   
    bg.fill(255, 150);
    bg.circle(x, y, n);
    
  }
  image(bg, 0, 0);
 
  // let dur = data.getColumn("duration (seconds)");
  // let minDur = min(dur)
  // let maxDur = max(dur)


  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    let columnName = data.getString(i, "city").charAt(0).toUpperCase() + data.getString(i, "city").slice(1);
    let columnShape = data.getString(i, "shape");
    let columnDuration = data.getNum(i, "duration (seconds)");
    let columnDurationText = data.getString(i, "duration (hours/min)");
  
    //🍎item
    itemList.push(new Item(
      i * 100 + 100,
      HEIGHT-100, 
      columnName.length > 13 ? columnName.slice(0, 13) + "..." : columnName,
      columnDuration,
      columnShape,
      columnDurationText
      )
      );

}
  for(let i = 0; i< itemList.length; i++){
    itemList[i].draw();
  }

  //👀unit testing
  // rect(0, 0, 30, 30);

}

function draw() {



}

