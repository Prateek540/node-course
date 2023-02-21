const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=b7e8f328535925552ac4ed7c315a9ca7&query=" +
    latitude +
    "," +
    longitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.request.query +
          " It is currently " +
          response.body.current.temperature +
          " degress out. There is a " +
          response.body.current.precip +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
