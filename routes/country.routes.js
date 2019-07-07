const express = require('express');
const router = express.Router();
const country = require('../controllers/country.controller');
const secure = require('../middlewares/secure.mid');

router.get('/countries', secure.isAuthenticated, country.getCountries);
router.get('/code', secure.isAuthenticated, country.getCountryCode);

module.exports = router;
