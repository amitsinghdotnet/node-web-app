//const geocode = require('./Test')
const forecast = require('./forecast')

const geocode = require('./chaining')


geocode('India', (error, data) => {
      console.log('Error:', error)
      console.log('Data:', data)
        
})

forecast(20.1234,30.345, (error, data) => {
    console.log('Error : ', error)
    console.log('Data :', data)
})