const createError = require('http-errors');
const Amadeus = require('amadeus');
const constants = require('../constants');

// TODO: Meter esta parte en un config, exportarlo e importar ese config
let amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET
});

module.exports.getFlight = (req, res, next) => {
  // TODO: Llevar a un Service!!!
  amadeus.shopping.flightOffers.get({
    origin: req.query.origin,
    destination: req.query.destination,
    departureDate: req.query.departureDate,
    returnDate: req.query.returnDate,
    nonStop: true
  })
    .then( response => { 
      // console.log(response.body);   //=> The raw body
      console.log(response.result); //=> The fully parsed result
      res.status(200).json(response.result);
      // console.log(response.data);
    })
    .catch( error => { 
      // console.log(error.response); //=> The response object with (un)parsed data
      // console.log(error.response.request); //=> The details of the request made
      console.log(error.code); //=> A unique error code to identify the type of error
    });
}

module.exports.getHotel = (req, res, next) => {
  amadeus.shopping.hotelOffers.get( { cityCode: req.query.cityCode } )
    .then( response => { res.status(200).json(response.result); } )
    .catch( error => { console.log(error.code); } )
}

module.exports.getPOI = (req, res, next) => {
  amadeus.referenceData.locations.pointsOfInterest.get({
    latitude: req.query.latitude,
    longitude: req.query.longitude,
    radius: 20 // Debe ser un entero en el rango 0-20
  })
    .then( response => { res.status(200).json(response.result); } )
    .catch( error => { console.log(error.code); } )
}

module.exports.getCities = (req, res, next) => {
  amadeus.referenceData.locations.get(
    { keyword: req.query.keyword,
      countryCode: req.query.countryCode,
      subType: 'AIRPORT'
    }
  )
  .then( response => { 
    console.log('***********************');
    console.log(req.query);
    console.log('***********************');
    res.status(200).json(response.data);
  })
  .catch( error => { console.log(error.code); } )
}
