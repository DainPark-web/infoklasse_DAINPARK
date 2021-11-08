const dateh = document.querySelector(".date");


let getDate = new Date();

dateh.innerText = `Updated: ${getDate.getDate()}.${getDate.getMonth() + 1}.${getDate.getFullYear()}`
console.log(dateh);

