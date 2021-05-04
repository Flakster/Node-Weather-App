const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=b1ddcca8a8bf51f3c7189b83026d7a6b&query=bogota";

request({ url:url, json:true }, ( error, response ) => {
  const {temperature, feelslike} =  response.body.current;
  console.log(`It is currently ${temperature} degrees out and it feels like ${feelslike} out`); 
});