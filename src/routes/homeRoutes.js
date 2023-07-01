const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController')

router.get('/home', authController.verifiyAuthentication, homeController.homeView);

module.exports = router;