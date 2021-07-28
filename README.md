This project is a simple web application built using REACT.js.

Application  displays the weather forecast for the current day and the next 5 days.

You can search by cities from around the world, autocomplete in the search field helps you with it.

The data for the weather forecast are based on the Open Weather Map API (https://openweathermap.org/api)  and the list of cities comes from their included json file http://bulk.openweathermap.org/sample/.

![image](https://user-images.githubusercontent.com/75543782/127379615-934824dc-4537-4dec-88d7-2e58a884e997.png)

The result of the search is then clearly compiled on the display into a list sorted by  individual days and 3 hour intervals.

![image](https://user-images.githubusercontent.com/75543782/127380091-d8747594-58c3-4153-aaf2-f73625b99e4a.png)

---------------


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application is divided into individual components - while the search result - the SelectCity component passes information about the chosen city by user, and the Row and RowList components then render the weather forecast for each day in the main Application - App.js component.

Application is responsive for the mobile devices.

App was deployed on netlify.app and you can find it in this address: https://five-days-weather-forecast-app.netlify.app. Enjoy :-)

