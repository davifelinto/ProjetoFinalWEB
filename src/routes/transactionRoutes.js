const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transactionController');
const authController = require('../controllers/authController');

router.get('/transaction/createTransaction', authController.verifiyAuthentication, transactionController.createView);
router.post('/transaction/createTransaction', authController.verifiyAuthentication, transactionController.createTransaction);

// router.get('/transaction/depositTransaction', authController.verifiyAuthentication, transactionController.depositView);
// router.post('/transaction/depositTransaction', authController.verifiyAuthentication, transactionController.depositTransaction);

router.get('/transaction/readTransaction', authController.verifiyAuthentication, transactionController.readView);

// router.get('/transaction/update/:id', authController.verifiyAuthentication, transactionController.updateView);
// router.post('/transaction/update', authController.verifiyAuthentication, transactionController.updateTransaction);

// router.post('/transaction/delete', authController.verifiyAuthentication, transactionController.deleteTransaction);

module.exports = router;
