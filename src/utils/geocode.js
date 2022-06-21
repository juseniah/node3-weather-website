const request = require("request");

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoianVzc2lkb2hlcnR5IiwiYSI6ImNsNGVkanAzdjAwcnIzYnJqbWU4dG5yMmYifQ.9z4MdGgGKXposdu6F6g1pA&limit=1'
  // Note that encodeURIComponent encodes special characters like ? into %3F

  request({ url, json: true}, (error, { body }) => {
    if (error) {
      callback('Unable to connect to location services!', undefined)
    } else if (body.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode