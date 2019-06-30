const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  daycontent: {
    type: [String],
    required: 'Content is required',
    unique: true,
    minlength: [50, 'More info, please']
  }
}, {
  timestamps: true,
  toJSON: {
    transform: (doc, ret) => {
      ret.id = doc._id;
      delete ret._id;
      delete ret.__v;      
      return ret;
    }
  }
});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;


/*
{
  "data": [
      {
          "type": "flight-offer",
          "id": "1561894961632--1902359008",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "AY",
                                      "number": "5645",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "5645"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "S",
                                      "availability": 9,
                                      "fareBasis": "SHX8C7B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "BA",
                                      "number": "4264",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "4264"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "488.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "488.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632-65190348",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "IB",
                                      "number": "6165",
                                      "aircraft": {
                                          "code": "330"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "6165"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "S",
                                      "availability": 9,
                                      "fareBasis": "SHX8C7B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "IB",
                                      "number": "6166",
                                      "aircraft": {
                                          "code": "330"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "6166"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "500.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "500.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632-1370570258",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "BA",
                                      "number": "4263",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "4263"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "L",
                                      "availability": 9,
                                      "fareBasis": "LHX2C1B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "BA",
                                      "number": "4264",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "4264"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "690.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "690.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632--1220606613",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "BA",
                                      "number": "4263",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "4263"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "L",
                                      "availability": 9,
                                      "fareBasis": "LHX2C1B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "AY",
                                      "number": "5648",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "5648"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "678.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "678.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632-1442673179",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "BA",
                                      "number": "4263",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "4263"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "L",
                                      "availability": 9,
                                      "fareBasis": "LHX2C1B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "IB",
                                      "number": "6166",
                                      "aircraft": {
                                          "code": "330"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "6166"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "690.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "690.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632--1915975039",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "AY",
                                      "number": "5645",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "5645"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "S",
                                      "availability": 9,
                                      "fareBasis": "SHX8C7B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "IB",
                                      "number": "6166",
                                      "aircraft": {
                                          "code": "330"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "6166"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "488.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "488.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632--1668992598",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "IB",
                                      "number": "6165",
                                      "aircraft": {
                                          "code": "330"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "6165"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "S",
                                      "availability": 9,
                                      "fareBasis": "SHX8C7B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "AY",
                                      "number": "5648",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "5648"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "488.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "488.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632-1235157497",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "IB",
                                      "number": "6165",
                                      "aircraft": {
                                          "code": "330"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "6165"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "S",
                                      "availability": 9,
                                      "fareBasis": "SHX8C7B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "BA",
                                      "number": "4264",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "4264"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "500.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "500.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      },
      {
          "type": "flight-offer",
          "id": "1561894961632-81185448",
          "offerItems": [
              {
                  "services": [
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-08-19T12:45:00+02:00"
                                      },
                                      "arrival": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-08-19T14:35:00-04:00"
                                      },
                                      "carrierCode": "AY",
                                      "number": "5645",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "5645"
                                      },
                                      "duration": "0DT7H50M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "S",
                                      "availability": 9,
                                      "fareBasis": "SHX8C7B4"
                                  }
                              }
                          ]
                      },
                      {
                          "segments": [
                              {
                                  "flightSegment": {
                                      "departure": {
                                          "iataCode": "BOS",
                                          "terminal": "E",
                                          "at": "2019-10-08T17:20:00-04:00"
                                      },
                                      "arrival": {
                                          "iataCode": "MAD",
                                          "terminal": "4S",
                                          "at": "2019-10-09T06:20:00+02:00"
                                      },
                                      "carrierCode": "AY",
                                      "number": "5648",
                                      "aircraft": {
                                          "code": "333"
                                      },
                                      "operating": {
                                          "carrierCode": "IB",
                                          "number": "5648"
                                      },
                                      "duration": "0DT7H0M"
                                  },
                                  "pricingDetailPerAdult": {
                                      "travelClass": "ECONOMY",
                                      "fareClass": "O",
                                      "availability": 9,
                                      "fareBasis": "OLN8T7B4"
                                  }
                              }
                          ]
                      }
                  ],
                  "price": {
                      "total": "475.40",
                      "totalTaxes": "196.40"
                  },
                  "pricePerAdult": {
                      "total": "475.40",
                      "totalTaxes": "196.40"
                  }
              }
          ]
      }
  ],
  "dictionaries": {
      "carriers": {
          "AY": "FINNAIR",
          "IB": "IBERIA",
          "BA": "BRITISH AIRWAYS"
      },
      "currencies": {
          "EUR": "EURO"
      },
      "aircraft": {
          "330": "AIRBUS INDUSTRIE A330",
          "333": "AIRBUS INDUSTRIE A330-300"
      },
      "locations": {
          "MAD": {
              "subType": "AIRPORT",
              "detailedName": "ADOLFO SUAREZ BARAJAS"
          },
          "BOS": {
              "subType": "AIRPORT",
              "detailedName": "EDWARD L LOGAN INTL"
          }
      }
  },
  "meta": {
      "links": {
          "self": "https://test.api.amadeus.com/v1/shopping/flight-offers?origin=MAD&destination=BOS&departureDate=2019-08-19&returnDate=2019-10-08&adults=1&nonStop=true"
      },
      "currency": "EUR",
      "defaults": {
          "adults": 1
      }
  }
}

*/