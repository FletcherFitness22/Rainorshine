const apiKey="2ab66c99a4a95153cb618340d97a0d3c";

let searchURL="api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid=2ab66c99a4a95153cb618340d97a0d3c";



function fetchweather(){
  fetch(searchURL)
.then(response => response.json())
.then(data => console.log(data));
}
document.getElementById("text").addEventListener("click",fetchweather);


