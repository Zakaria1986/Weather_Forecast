# Weather_Forecast

This weather dashboard allow you as a traveler to see the weather outlook for multiple cities so that you can plan a trip accordingly and see the forecast of the current weather along with next fives days in an interval of every 3 hours in each day. 

##### Project Repository:  [(http://github.com)](https://github.com/Zakaria1986/Weather_Forecast) 

##### Live page:  [https://zakaria1986.github.io/Weather_Forecast/](https://zakaria1986.github.io/Weather_Forecast/) 

## Over view of the app



![alt text](/assets/img/Weather_Dashboard.gif)



## Weather Dashboard feature

 - Search box take a city name 
 - Search box in not case sensetive however do type in the correct city name
 - Search history which stored the search history which then can be used to retype and search, simply just click
 - Body has two section:
    - Currend day section at the top which shows the weather for current day 
    - Section bellow shows forecasting for the next 3 days in 3 hour interval 

# Dashboard Business logic

  



![alt text](/assets/img/code_overview.gif)



* Dashbaord take a user request 
* User submits the request 
    - Search key gets entered into local databaase 
    - Then then API takes the request and gets the weather details and out puts on to the client browser
* If search history exist
    - user click the search key 
    - Value gets passed on to the api and then get output inthe browser
