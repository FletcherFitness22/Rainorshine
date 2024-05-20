
const apiKey="2ab66c99a4a95153cb618340d97a0d3c"

const searchURL="http://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid=2ab66c99a4a95153cb618340d97a0d3c";



function fetchweather (){
    const apiKey="2ab66c99a4a95153cb618340d97a0d3c";
    const city = document.getElementById('city').value; }

   

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${2ab66c99a4a95153cb618340d97a0d3c}';

    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${2ab66c99a4a95153cb618340d97a0d3c}';
  
  
  function fetchweather() {
    fetch(searchURL)
.then(response => response.json())
.then(data => console.log(data));
  }
document.getElementById("myBtn").addEventListener("click",fetchweather);


