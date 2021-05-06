const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=b1ddcca8a8bf51f3c7189b83026d7a6b&query='+ latitude +','+longitude;
  request( { url: url , json:true }, (error, response) => {
    if ( error ){
      callback('Unable to connect to the weather service', undefined);
    } else if ( response.body.error ){
      callback(`Error ${response.body.error.code}: ${response.body.error.type}. ${response.body.error.info}`, undefined);
    } else {
      const {temperature, feelslike} =  response.body.current;
      callback(undefined, `It is currently ${temperature} degrees out and it feels like ${feelslike} out`); 
    }
  });
};
module.exports = forecast;