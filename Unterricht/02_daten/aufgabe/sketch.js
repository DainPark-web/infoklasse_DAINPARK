let data;
let itemList = [];
let HEIGHT = innerHeight;

const COLORS = {
  white: "#fff",
  subText: "#D9D9D9",
  shape: {
    a1: "#8C3048",
    a2: "#F2B6C6",
    a3: "#91D9BF",
    a4: "#F28C0F",
    a5: "#BEA3D9",
    a6: "#D99771"
  }

}

let bg;
let button;
let btnB = true;

let aLength = 80;

let newArray = [];

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

  //kleine Sterne
  for(let i = 0; i < 30000; i++){
    let x = random(innerWidth * 5);
    let y = random(innerHeight);
    let n = noise(x * 0.01, y * 0.01) * 2;
   
    bg.fill(255, 100);
    bg.rect(x, y, n, n);
    
  }
  //grosse Sterne
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

  //Rendering Sterne
  console.log(data);
  // data.sort((a, b) => a.rows.arr[7] - b.rows.arr[7]);
  // console.log(data.rows);
  for (var i = 0; i < data.getRowCount(); i++) {
    noStroke();
    let columnName = data.getString(i, "city").charAt(0).toUpperCase() + data.getString(i, "city").slice(1);
    let columnShape = data.getString(i, "shape");
    let columnDuration = data.getNum(i, "duration (seconds)");
    let columnDurationText = data.getString(i, "duration (hours/min)");
  
    //🍎item
    itemList.push(new Item(
      
      columnName.length > 13 ? columnName.slice(0, 13) + "..." : columnName,
      columnDuration,
      columnShape,
      columnDurationText,
      COLORS
      )
      );

}

  itemList = itemList.slice(0, aLength);
  itemList.sort((a, b) => a.dur - b.dur)
  // newArray = [...itemList.sort((a, b) => a.dur - b.dur)];
  console.log(itemList);

//  i,
// HEIGHT-100, 
  //button
button = createButton('Duration');
button.position(10, 20);
button.mousePressed(changeBG);

  for(let i = 0; i < aLength; i++){
    itemList[i].draw(i, HEIGHT-100,);
    
  }

}

function draw() {
  
  
  


}

function changeBG() {
  
  // aLength = 10
  image(bg, 0, 0);
  // Hier brauch ich itemList array sortieren.
  if(btnB){
    itemList.sort((a, b) => b.dur - a.dur)
    btnB = false;
  }else
 {
    itemList.sort((a, b) => a.dur - b.dur)
    btnB = true;
  }
  console.log(btnB);
  for(let i = 0; i < aLength; i++){
    itemList[i].draw(i, HEIGHT-100,);
  }
}

