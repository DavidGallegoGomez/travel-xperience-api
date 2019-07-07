const createError = require('http-errors');
const constants = require('../constants');
const countryList = require('country-list'); // https://www.npmjs.com/package/country-list

module.exports.getCountries = (req, res, next) => {
  const countries = countryList.getData(); // TODO: Controlar cnd no va bien 500 o 404
  console.log(countries);
  res.status(200).json(countries);
    /*.then( response => { 
      console.log(response);
      res.status(200).json(response);
    })
    .catch( error => {
      console.log(error);
    });*/
}

module.exports.getCountryCode = (req, res, next) => {
  // req = 'Spain';
  const code = countryList.getCode(req.query.countryName); // TODO: Controlar cnd no va bien 500 o 404
  console.log(code);
  res.status(200).json(code);
}
