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
    origin: 'MAD',
    destination: 'BOS',
    departureDate: '2019-08-19',
    returnDate: '2019-10-08',
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
  amadeus.shopping.hotelOffers.get( { cityCode: 'AGP' } )
    .then( response => { res.status(200).json(response.result); } )
    .catch( error => { console.log(error.code); } )
}

module.exports.getPOI = (req, res, next) => {
  amadeus.referenceData.locations.pointsOfInterest.get({
    latitude: 41.397158,
    longitude: 2.160873,
    radius: 2.00
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
    // const { name, id, iataCode, subType, timeZoneOffset, geoCode } = cities[1]; // response.data[1]
    // 'name' tiene el valor de response.data[i].name
  })
  .catch( error => { console.log(error.code); } )
}
