const express = require('express');
const router = express.Router();
const amadeus = require('../controllers/amadeus.controller');
const secure = require('../middlewares/secure.mid');

router.get('/flight', secure.isAuthenticated, amadeus.getFlight);

module.exports = router;
