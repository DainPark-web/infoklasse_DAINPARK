let data;

let itemList = [];
let r = 300;

let HEIGHT = innerHeight;

function preload() {

  data = loadTable('02_UFO_sightings_selection.csv', 'ssv', 'header');

}




function setup() {
  createCanvas(innerWidth * 4, HEIGHT);
  background("#F1E7DE")
  angleMode(DEGREES);
  //length
  // console.log("Rowcount= " + data.getRowCount());
  // console.log(data.columns);

  let dur = data.getColumn("duration (seconds)");
  let minDur = min(dur)
  let maxDur = max(dur)
  // console.log(dur)
  // console.log(minDur)
  // console.log(maxDur)


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

function draw() {}

