const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config')

const userCtrl = require('../controllers/user');

router.post('/login', multer, userCtrl.login);
router.post('/signup', userCtrl.signup);

module.exports = router;