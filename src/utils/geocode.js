const axios = require("axios");

const geocode = (address, callback) => {
  const access_key_positionstack = "01573d4ca8bc590f1107b20ca7ef5781";
  const limit = 1;
  axios
    .get(
      `http://api.positionstack.com/v1/forward?access_key=${access_key_positionstack}&query=${encodeURIComponent(
        address
      )}&limit=${limit}`
    )
    .then(({ data }) => {
      callback(undefined, {
        latitude: data.data[0].latitude,
        longitude: data.data[0].longitude,
        location: data.data[0].label,
      });
    })
    .catch(() => {
      callback("Something went wrong!", undefined);
    });
};

module.exports = geocode;
