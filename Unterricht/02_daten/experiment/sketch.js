let baseUrl = "https://api.coinpaprika.com/v1";
let getData;
let coindetail = [];

const preMax = 5000;
const newMax = 1000;

const HEIGHT = window.innerHeight;

// getData
const fetchData = async () => {
  let coin = "/coins";
  let coinUrl = `${baseUrl}${coin}`;
  const datacoin = await fetch(coinUrl);
  getData = await datacoin.json();

  console.log("1");
  test(getData);
}

const test = async (data) => {
  console.log("2");
  // console.log(data);
  for(let i =1; i < 15; i++){
    let getUrl = await fetch(`https://api.coinpaprika.com/v1/coins/${data[i].id}/ohlcv/latest/`);
    let getUrlde = await getUrl.json();
    await coindetail.push(getUrlde);
  }
  console.log(coindetail);
  for(let i =0; i< coindetail.length; i++){
    let l = coindetail[i][0].low === undefined ? 0 : coindetail[i][0].low;
    let h = coindetail[i][0].high;
    let c = coindetail[i][0].close;

    let g = h - l;
    let mg = map(g, 0, 1000, 0, 3000);

    let x = 200 + (i * 100);
    let y = HEIGHT - 100;
    
    
    // circle(x, y, log(mg) * 10);
    console.log(mg);
    triangle(x, y, x+50, (y - abs(log(mg) * 20)), x + 100, y);
  }
}


  function setup() {
    createCanvas(5000, HEIGHT);
    stroke(255);
    // strokeWeight(5);
    background(0);
    fetchData();
    
  
  
  }
  
  
  
  function draw() {
    // strokeWeight(15);
    
    
  
  }




