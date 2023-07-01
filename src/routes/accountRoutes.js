const express = require('express');
const router = express.Router();

const accountController = require('../controllers/accountController');
const authController = require('../controllers/authController');

router.get('/account/createAccount', authController.verifiyAuthentication, accountController.createView);
router.post('/account/createAccount', authController.verifiyAuthentication, accountController.createAccount);

router.get('/account/indexAccount', authController.verifiyAuthentication, accountController.readView);
router.get('/account/infoAccount/:id', authController.verifiyAuthentication, accountController.readSingleView);

// router.get('/account/infoAccount/:id', authController.verifiyAuthentication, accountController.updateView);
// router.post('/account/infoAccount', authController.verifiyAuthentication, accountController.updateAccount);

// router.get('/account/updateAccount/:id', authController.verifiyAuthentication, accountController.updateView);
// router.post('/account/updateAccount', authController.verifiyAuthentication, accountController.updateAccount);

// router.post('/account/deleteAccount', authController.verifiyAuthentication, accountController.deleteAccount);

module.exports = router;
