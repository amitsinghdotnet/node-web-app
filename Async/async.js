// console.log("Start Executing")

// setTimeout( () => {
//     console.log("Timer Execute")
// },2000)


// setTimeout( () =>
// {
//     console.log("Second Timer")
// },0)


// console.log("Stop Executing")

const request = require('request')

// postman-request

const url = 'http://api.weatherstack.com/current?access_key=3c394d46c26510448b66ce147f897979&query=37.8267,-122.4233';

request({ uri : url,json:true}, (error, response) =>{
      //console.log(response);
      //const data = JSON.parse(response.body.current);
      //console.log(response.body);

      //const data = JSON.parse(response.body);
      //console.log(data.current)

      //console.log(response.body);

     
})


const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW1pdHNpbmdoMTEiLCJhIjoiY2tqNWEzZzZwMDFkdjJ4cnVicGMxOGV6MiJ9';

request({ uri:geoURL, json:true}, (error, response) => {

      if(error){
            console.log("Unable to locate service.")
      }else if(response.body.features.length === 0){
            console.log("Unable to genearte.. Try Again !!")
      }
      else
      {

        const latitude = response.body.features[0].center[0];
       const longitude = response.body.features[0].center[1];
       console.log(latitude, longitude);
      }

      //


})