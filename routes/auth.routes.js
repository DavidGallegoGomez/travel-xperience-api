const express  = require('express');
const router   = express.Router();
const auth     = require('../controllers/auth.controller');
const secure   = require('../middlewares/secure.mid');
// const uploader = require('../configs/storage.config');

router.post('/register', auth.register);
router.post('/authenticate', auth.authenticate);
router.get('/logout', auth.logout);

router.get('/profile', secure.isAuthenticated, auth.getProfile);
router.put('/profile', secure.isAuthenticated, /* uploader.single('avatar'), */ auth.editProfile);

module.exports = router;