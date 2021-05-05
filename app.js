const request = require('request');

const url = "http://api.weatherstack.com/current?access_key=b1ddcca8a8bf51f3c7189b83026d7a6b&query=los%20angeles";

request({ url:url, json:true }, ( error, response ) => {
  if ( error ){
    console.log('Unable to connect to the weather service');
  } else if (response.body.error){
    console.log (`Error ${response.body.error.code}: ${response.body.error.type}. ${response.body.error.info}`);
  }else {
    const {temperature, feelslike} =  response.body.current;
    console.log(`It is currently ${temperature} degrees out and it feels like ${feelslike} out`); 
  }
});

const mb_token = "pk.eyJ1IjoiZmxha3N0ZXIiLCJhIjoiY2tvYW10OHl1MnI1ZjJ2cXczZHM5MTQ3MyJ9.lszDUNg2VGn-clH44vTCjw";
const geocodeURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoiZmxha3N0ZXIiLCJhIjoiY2tvYW10OHl1MnI1ZjJ2cXczZHM5MTQ3MyJ9.lszDUNg2VGn-clH44vTCjw&limit=1";
//console.log(geocodeURL);
request({url:geocodeURL, json:true }, (error, response) => {
  if ( error ) {
    console.log('Error: can\'t connect to the location service');
  } else if(response.body.message){
    console.log(`Error: ${response.body.message}`);
  } else {
    const [lon,lat] = response.body.features[0].center;
    console.log(`Longitude: ${lon}, Latitude: ${lat}`)
  }
});