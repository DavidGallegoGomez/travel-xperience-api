const express = require('express');
const router = express.Router();
const amadeus = require('../controllers/amadeus.controller');
const secure = require('../middlewares/secure.mid');

router.get('/flight', secure.isAuthenticated, amadeus.getFlight);
router.get('/hotel', secure.isAuthenticated, amadeus.getHotel);
router.get('/poi', secure.isAuthenticated, amadeus.getPOI);
router.get('/cities', secure.isAuthenticated, amadeus.getCities);

module.exports = router;
