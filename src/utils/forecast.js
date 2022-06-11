const axios = require("axios");

const forecast = (latitude, longitude, callback) => {
  const access_key_weatherstack = "1a691ebe443d0960ebaee797db9a9a96";
  axios
    .get(
      `http://api.weatherstack.com/current?access_key=${access_key_weatherstack}&query=${latitude},${longitude}`
    )
    .then(({ data }) => {
      if (data.error) {
        callback(data.error.info, undefined);
      } else {
        callback(
          undefined,
          `Local time: ${data.location.localtime}. It's currently ${data.current.temperature} degrees С and the weather is ${data.current.weather_descriptions[0]}!`
        );
      }
    })
    .catch(() => {
      callback("Something went wrong!", undefined);
    });
};

module.exports = forecast;
