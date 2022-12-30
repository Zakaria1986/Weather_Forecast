
// this will be Dynamic 
var searchKey = 'London';

// Weather API key, urls variables 
var apiKey = '6e2c9a825d52912ed09435216f712368';
var baseUrl = 'https://api.openweathermap.org/data/2.5/';
var currentWeather = baseUrl + 'weather?&appid=' + apiKey + '&units=metric&';
var forcast = baseUrl + 'forecast?&appid=' + apiKey + '&units=metric&';

console.log('Current weather link: ', currentWeather);
console.log('Forecast current weather link: ', forcast);

// Getting locally stored search keys if it exist if not create an empty array
function getLocalStoredItems() {
  var HistorySearchKey = JSON.parse(localStorage.getItem("SearchKey")) || [];
  return HistorySearchKey;
}

function featchCurrentWeather() {
  $.get(currentWeather + `q=${searchKey}`)
    .then(currData => {
      console.log('Current weather: ', currData);
      console.log('pressure: ', currData.main.pressure);
      console.log('temp: ', Math.round(currData.main.temp));
      console.log('Wind speed: ', Math.round(currData.wind.speed));

      console.log('Name: ', currData.name);
      console.log('Weather : ', currData.weather[0].description);
      console.log('Main : ', currData.weather[0].main);
      console.log('Icon : ', currData.weather[0].icon);

      getForeCast()

      // var iconcode = a.weather[0].icon;
      // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      // $('#wicon').attr('src', iconurl);
    })
}
featchCurrentWeather();

function getForeCast() {
  console.log('This is where the forecast is being printed')
  $.get(forcast + `q=${searchKey}`).then(data => {
    console.log(data);
    console.log('Name: ', data.city.name);
    console.log('humidity: ', data.list[0].main.humidity);
    console.log('pressure: ', data.list[0].main.pressure);
    console.log('temp: ', Math.round(data.list[0].main.temp));
    console.log('Wind speed: ', Math.round(data.list[0].wind.speed));

  })
}