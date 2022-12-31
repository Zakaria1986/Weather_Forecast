
// this will be Dynamic 
var GetsearchKey = $("button.btn");
GetsearchKey.click(function (e) {
  e.preventDefault();
  var userSearchInput = $("input#search-input").val();
  // var weatherForToday = $('.currentWeather');

  DOMCurrentWeather(userSearchInput);

});

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

function DOMCurrentWeather(searchInput) {
  var todaysDate = moment(new Date()).format("DD/MM/YYYY");
  var weatherForToday = $('#today');
  $.get(currentWeather + `q=${searchInput}`)
    .then(currData => {

      var iconcode = currData.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

      // lat and lon saved for forecast 
      var lat = currData.coord.lat;
      var lon = currData.coord.lon;

      // HTML output for current weather section
      var currDOMoutPut = `    
            <h5 class="card-title">${currData.name} (${todaysDate}) <img src='${iconurl}'></h5>
            <p>Temp: ${Math.round(currData.main.temp)}
            <span>&#176;</span>C</p>
            <p>Wind:  ${parseFloat(currData.wind.speed).toPrecision(2)} KPH</p>
            <p>Humidity: ${Math.round(currData.main.humidity)}%</p>
            `
      // append html into  today's weather section:  $( ".container" ).append( $( "h2" ) );

      // resetting the container before appending new search result
      weatherForToday.text(" ");
      weatherForToday.append(currDOMoutPut);

      getForeCast(lat, lon);
    })
}

function getForeCast(lat, lon) {

  var forecast = $('#forecast');
  // emptying the container of previouse result
  forecast.text(" ");
  console.log('This is where the forecast is being printed')
  $.get(forcast + `&lat=${lat}&lon=${lon}`).then(forecastData => {

    // var foreCastIconCode = forecastData.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/";
    var png = ".png";
    console.log(forecastData);
    forecastData.list.forEach(element => {
      // console.log(element.dt_txt + ": Temp: " + iconurl + element.weather[0].icon + png + " Temp: " + element.main.temp + " Wind speed: " + element.wind.speed + " KPH  humidity " + element.main.humidity + "%");

      var forecastCard = `<div class="card col-md-3 mr-3 mb-3">
      <div class="card-body">
        <h5 class="card-title">${element.dt_txt}</h5>
        <img class ='cloudIcon' src="${iconurl + element.weather[0].icon + png}" class="card-img-top" alt="${element.weather[0].icon + png}">
        <p class="card-text">Temp: ${element.main.temp} <span>&#176;</span>C</p>
        <p class="card-text">Wind: ${element.wind.speed} KPH</p>
        <p class="card-text">Humidity: ${element.main.humidity}%</p>
      </div>
    </div>`

      // resetting the container before appending new search result

      forecast.append(forecastCard);
    })
  })
}

// function featchCurrentWeather() {
//   DOMCurrentWeather();
// }
// featchCurrentWeather();
