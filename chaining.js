const request = require('request')

const geocode = (address, (error, data) => {

    const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=2&access_token=pk.eyJ1IjoiYW1pdHNpbmdoMTEiLCJhIjoiY2tqNWEzZzZwMDFkdjJ4cnVicGMxOGV6MiJ9.xV_mY5FUSp48NcqchgSS-w';

    request({ uri: geoURL, json: true }, (error, response) => {

        if (error) {
            console.log("Unable to locate service.")
        } else if (response.body.features.length === 0) {
            console.log("Unable to genearte.. Try Again !!")
        }
        else {
            const latitude = response.body.features[0].center[0];
            const longitude = response.body.features[0].center[1];
            console.log(latitude, longitude);
        }
    })
})

module.exports = geocode