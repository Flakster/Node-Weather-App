const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=b1ddcca8a8bf51f3c7189b83026d7a6b&query=bogota";

request({ url }, ( error, response ) => {
  const data = JSON.parse(response.body)
  console.log(data.current);
});