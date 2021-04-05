const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config')

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllProfil);
router.get('/:id', userCtrl.getProfilById);

router.put('/:id', auth, multer, userCtrl.profilUpdate);

router.delete('/:id', auth, userCtrl.deleteMyProfil);

module.exports = router;