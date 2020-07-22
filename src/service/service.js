import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

// Service class
class Service {

    constructor() {
    }

    // Get OpenWeather data
    async getWeatherData(cityName) {

        const apiKey = process.env.apiKey
        let weatherUrl = process.env.openWeatherURL || 'http://api.openweathermap.org/data/2.5/'
        weatherUrl = weatherUrl + 'weather?q='+ cityName + '&units=metric&appid=' + apiKey

        return new Promise(function (resolve, reject) {
            try {
                axios.get(weatherUrl, {
                    headers: {
                        Accept: 'application/json'
                    }
                })
                    .then(response => {
                        console.log(response.data);
                        resolve(response.data)
                    })
                    .catch(error => {
                        console.log(error);
                        let err_response = {
                            error: error
                        };
                        reject(err_response)
                    });
            }
            catch (e) {
                console.error(e)
                throw Error(e)
            }
        })
    }

}
export default Service