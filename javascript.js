const apiKey= "2ab66c99a4a95153cb618340d97a0d3c";

let searchURL="http://api.openweathermap.org/data/2.5/forecast?q=Charlotte&appid=2ab66c99a4a95153cb618340d97a0d3c"

function fetchweather(){
fetch(searchURL)
.then(response=> response.json())
.then(data=> console.log(data));
}
document.getElementById("myBtn").addEventListener("click",fetchweather);




