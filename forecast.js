const request = require('request')


const forecast = (latitude, longitude, callback) => {
    
    const geoURL = 'http://api.weatherstack.com/current?access_key=3c394d46c26510448b66ce147f897979&query=' + latitude + ',' + longitude + '&units=f';
       request({ uri: geoURL, json: true }, (error, response) => {

        if (error) {
            callback('Unable to locate service.', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.weather_code + " degress out.")
        }
    })
}

module.exports = forecast