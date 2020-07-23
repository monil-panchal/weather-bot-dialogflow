# WeatherBot, a NodeJs-Express web application powered by Google's Dialogflow to check the current weather of any city.

This is a NodeJs-express web application built using Express for fetching current weather of any city.


Weather information can be fetched either by typing the name of the city or by interacting with a Chatbot built using Google's [Dialogflow](https://cloud.google.com/dialogflow/docs). The weather data is fetched using the OpenWeathermap [api](https://openweathermap.org/current).

This application exposes an API endpoint `/api/dialogflow//viewWeather` which serves as a webhook point for the Dialogflow's fulfillment.

## Live Demo


[weather-bot](http://weather-bot-openweather.herokuapp.com/)


## This is how the application looks like

![Home Page](/resources/screenshots/home.png)
> Home page


![Check weather](/resources/screenshots/check_weather.png)
> Check weather

![Bot weather](/resources/screenshots/bot_1.png)
> Bot weather check

![Bot weather](/resources/screenshots/bot_2.png)
> Bot weather check

 
## Installation

Import this project in any IDE

Using [npm](https://www.npmjs.com/), build the project by running following command:

```
npm install
```

#### Generate OpenWeatherMap [key](https://openweathermap.org/current)
```
Add the key to `apiKey` system variable.
```

#### Run the project
```
node index.js
```

This will spawn an embedded web server running on port: `http://localhost:8080/.`

## Google's [Dialogflow](https://cloud.google.com/dialogflow/docs) setup <Optional>

You can setup your own WeatherBot Agent in Dialogflow and upload this [base](/resources/WeatherIntent.json) intent.

Built the intent as per the requirement and add this application's URL in the fulfillment webhook. 
More information can be found at [DialogFlow](https://cloud.google.com/dialogflow/docs/fulfillment-webhook).


## Usage

Either enter the city name manually or use the bot service to get the weather information.

## Libraries and APIs used

Either enter the city name manually or use the bot service to get the weather information.

1) Template engine using [EJS](https://ejs.co/)
2) NodeJs and ExpressJS
3) OpenWeathermap [api](https://openweathermap.org/current)