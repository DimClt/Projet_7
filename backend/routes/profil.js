const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllProfil);
router.get('/:id', userCtrl.getProfilById);

router.put('/:id', auth, userCtrl.profilUpdate);

router.delete('/:id', auth, userCtrl.deleteMyProfil);

module.exports = router;