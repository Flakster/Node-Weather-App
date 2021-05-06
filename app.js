const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const place = geocode('Boston', (error, data) => {
  console.log("Error", error );
  console.log("Data", data );
});

forecast(50, 20, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})