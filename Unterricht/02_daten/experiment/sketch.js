let baseUrl = "https://api.coinpaprika.com/v1";
let getData;
let coindetail = [];

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
  for(let i =0; i < 50; i++){
    let getUrl = await fetch(`https://api.coinpaprika.com/v1/coins/${data[i].id}/ohlcv/latest/`);
    let getUrlde = await getUrl.json();
    await coindetail.push(getUrlde);
  }
  console.log(coindetail);
  for(let i =0; i< coindetail.length; i++){
    line(i * 20, 0, i * 20, coindetail[i][0].high - coindetail[i][0].low);
  }
}


  function setup() {
    createCanvas(5000, 5000);
    stroke(255);
    background(0);
    fetchData();
    
  
  
  }
  
  
  
  function draw() {
    // strokeWeight(15);
    
    
  
  }




