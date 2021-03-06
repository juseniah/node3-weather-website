const request = require('request');

const forecast = (lat, long, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=e841a096ae24abc51d948a2bfb4b345d&query=' + lat + ',' + long + '&units=f'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out, and it feels like ' + body.current.feelslike + ' degrees. The UV index is ' + body.current.uv_index + '.')
    }
  })
}

module.exports = forecast