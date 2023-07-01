const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/login', authController.loginView);
router.post('/authenticate', authController.authenticate);
router.post('/exit', authController.verifiyAuthentication, authController.exit);

module.exports = router;
