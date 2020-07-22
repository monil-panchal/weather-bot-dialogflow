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
                let weatherObj = `Current temperature is ${responseObj.main.temp} degrees in ${responseObj.name}!`;
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
            let cityName = request.body.cityName

            let jobService = new Service()
            let responseObj = await jobService.getWeatherData(cityName)
            console.log(`responseObj from service:`, responseObj)


            if (responseObj.main == undefined) {
                response.status(500).send('Error, please try again')
            } else {
                response.send(responseObj);
            }

        } catch (e) {
            console.error(e)
            response.status(500).send(e.error);
        }
    }
}
export default Controller