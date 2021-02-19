const request = require('request')

//const address = 'India';
const geocode = (addr, (error, data) => {
      const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + addr + '.json?limit=2&access_token=pk.eyJ1IjoiYW1pdHNpbmdoMTEiLCJhIjoiY2tqNWEzZzZwMDFkdjJ4cnVicGMxOGV6MiJ9.xV_mY5FUSp48NcqchgSS-w';

      request({ uri: geoURL, json: true }, (error, response) => {

            if (error) {
                  callback("Unable to locate service.", undefined)
            } else if (response.body.features.length === 0) {
                  callback("Unable to genearte.. Try Again !!", undefined)
            }
            else {
                  callback(undefined, {
                        latitude: response.body.features[0].center[0],
                        longitude: response.body.features[0].center[1],
                        place: response.body.features[0].place_name
                  })
            }
      })


})

module.exports = geocode