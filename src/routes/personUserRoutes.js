const express = require('express');
const router = express.Router();

const personUserController = require('../controllers/personUserController');
// const authController = require('../controllers/authController');

router.get('/personUser/createPersonUser', personUserController.createView);
router.post('/personUser/createPersonUser', personUserController.createPersonUser);

// router.get('/pessoa/listar', authController.verifiyAuthentication, personController.readView);

// router.get('/pessoa/editar/:id', authController.verifiyAuthentication, personController.updateView);
// router.post('/pessoa/editar', authController.verifiyAuthentication, personController.updatePerson);

// router.post('/pessoa/excluir', authController.verifiyAuthentication, personController.deletePerson);

module.exports = router;