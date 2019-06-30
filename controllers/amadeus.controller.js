const createError = require('http-errors');
const Amadeus = require('amadeus');

// TODO: Meter esta parte en un config, exportarlo e importar ese config
let amadeus = new Amadeus({
  clientId: process.env.AMADEUS_API_KEY,
  clientSecret: process.env.AMADEUS_API_SECRET
});

module.exports.getFlight = (req, res, next) => {
  /*
  User.findOne( {email: req.body.email} )
    .then( user => {
      if (user) throw createError(409, 'User already registered')
      else return new User(req.body).save()
    } )
    .then( user => res.status(201).json(user) )
    .catch(next)
  */
  amadeus.shopping.flightOffers.get({
    origin: 'MAD',
    destination: 'BOS',
    departureDate: '2019-08-19',
    returnDate: '2019-10-08',
    nonStop: true
  })
    .then( response => { 
      // console.log(response.body);   //=> The raw body
      
      // res.json(res.result);
      
      console.log(response.result); //=> The fully parsed result
      res.status(200).json(response.result);
      
      // console.log( JSON.stringify( response.data ) );
      
      // console.log(response.data);
    })
    .catch( error => { 
      // console.log(error.response); //=> The response object with (un)parsed data
      // console.log(error.response.request); //=> The details of the request made
      console.log(error.code); //=> A unique error code to identify the type of error
    });
}
