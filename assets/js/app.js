
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


function DOMCurrentWeather() {
  $.get(currentWeather + `q=${searchKey}`)
    .then(currData => {
      var iconcode = currData.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
      //$('#wicon').attr('src', iconurl);

      // lat and lon saved for forecast 
      var lat = currData.coord.lat;
      var lon = currData.coord.lon;
      console.log('current Latitude coords: ', lat);
      console.log('Current longetitude coords: ', lon);

      console.log('Current weather: ', currData);
      console.log('Search Location name : ', currData.name);
      console.log('Current weather temp: ', Math.round(currData.main.temp));
      console.log('Current Wind speed: ', Math.round(currData.wind.speed) + " KPH");
      console.log('Current humidity: ', Math.round(currData.main.humidity) + "%");
      console.log('Todays date: ', moment(new Date()).format("DD/MM/YYYY"));
      console.log('Current weather icon: ', iconurl);


      // getForeCast();
    })
}

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

function featchCurrentWeather() {
  DOMCurrentWeather();
}
featchCurrentWeather();
