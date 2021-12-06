let data;
let itemList = [];
let HEIGHT = innerHeight;

let bg;

function preload() {
  data = loadTable('02_UFO_sightings_selection.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(innerWidth * 4, HEIGHT);
  // background("#F1E7DE")
  angleMode(DEGREES);

  bg = createGraphics(innerWidth * 4, innerHeight);
  bg.background(10);
  bg.noStroke();

  for(let i = 0; i < 30000; i++){
    let x = random(innerWidth * 4);
    let y = random(innerHeight);
    let n = noise(x * 0.01, y * 0.01) * 2;
   
    bg.fill(255, 150);
    bg.rect(x, y, n, n);
    
  }
  image(bg, 0, 0);
 
  let dur = data.getColumn("duration (seconds)");
  // let minDur = min(dur)
  // let maxDur = max(dur)


  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    let columnName = data.getString(i, "city").charAt(0).toUpperCase() + data.getString(i, "city").slice(1);
    let columnShape = data.getString(i, "shape");
    let columnDuration = data.getNum(i, "duration (seconds)");
  
    //🍎item
    itemList.push(new Item(
      i * 100 + 100,
      HEIGHT-100, 
      columnName.length > 13 ? columnName.slice(0, 13) + "..." : columnName,
      columnDuration,
      columnShape
      )
      );

}
  for(let i = 0; i< itemList.length; i++){
    itemList[i].draw();
  }

}

function draw() {



}

