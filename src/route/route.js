import Controller from '../controller/controller.js'

const routes = (app) => {

    app.route('/')
        .get((request, response) => {
            response.render('home')
        })

    app.route('/viewWeather')
        .get((request, response) => {
            response.render('weather')
        })

    app.route('/viewWeather')
        .post((request, response) => {
            var controller = new Controller()
            controller.getWeatherForCity(request, response)
        })

    app.route('/api/viewWeather')
        .post((request, response) => {
            var controller = new Controller()
            controller.getWeatherForAPIRequest(request, response)
        })

    app.route('/api/dialogflow//viewWeather')
        .post((request, response) => {
            var controller = new Controller()
            controller.getWeatherForAPIRequest(request, response)
        })



}
export default routes