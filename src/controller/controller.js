import joi from 'joi'
import Service from '../service/service.js'

// Schema
const citySchema = joi.object().keys({

    // jobName is required
    cityName: joi.string().required(),

});

// Controller class for handling job related operation
class Controller {

    constructor() {
    }

    // Get all jobs
    async getWeatherForCity(request, response) {

        try {

            console.log('request')
            console.log(request.body)
            let cityName = request.body.cityName

            let jobService = new Service()
            let responseObj = await jobService.getWeatherData(cityName)
            console.log(`responseObj from service:`, responseObj)


            if (responseObj.main == undefined) {
                response.render('weather', { error: 'Error, please try again' });
            } else {
                let weatherObj = `Current temperature in ${responseObj.name} is ${responseObj.main.temp} °C but 
                it feels like ${responseObj.main.feels_like} °C. \n\n
                Expect the weather to have ${responseObj.weather[0].description}.`
                response.render('weather', { weather: weatherObj });
            }

        } catch (e) {
            console.error(e)
            response.render('weather', { error: e.error });
        }
    }

    async getWeatherForAPIRequest(request, response) {

        try {

            console.log('request')
            console.log(request.body)
            let cityName = request.body.cityName || request.body.queryResult.queryText

            let jobService = new Service()
            let responseObj = await jobService.getWeatherData(cityName)
            console.log(`responseObj from service:`, responseObj)


            if (responseObj.main == undefined) {
                response.status(500).send('Error, please try again')
            } else {

                let weatherObj = `Current temperature in ${responseObj.name} is ${responseObj.main.temp} °C but it feels like ${responseObj.main.feels_like} °C. Expect the weather to have ${responseObj.weather[0].description}.`

                let res = null
                if (request.body.queryResult && request.body.queryResult.queryText) {
                    res = {
                        "fulfillmentMessages": [
                            {
                                "text": {
                                    "text": [
                                        weatherObj
                                    ]
                                }
                            }
                        ]
                    }
                } else {
                    res = {
                        'message': weatherObj
                    }
                }
                response.send(res);


            }

        } catch (e) {
            console.error(e)
            response.status(500).send(e.error);
        }
    }
}
export default Controller