const place=window.prompt("eneter you location");

const body = document.querySelector('body');
      
async function getWeather() {
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=db1523dad67a486ebf184235231809&q=${place}`, {mode: 'cors'});
  const weather = await response.json();
  const weth=document.createElement('p');
//   weth.textContent=`${weather}`;
//   body.appendChild(weth);
console.log(weather["location"]["name"]);
console.log(weather["current"]["temp_f"]);
console.log(weather["current"]["temp_c"]);
}
//commit common
getWeather();