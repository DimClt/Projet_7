const express = require('express');
const router = express.Router();

const articleCtrl = require('../controllers/article');
const auth = require('../middleware/auth');

router.post('/publish', auth, articleCtrl.createArticle);

router.get('/', articleCtrl.getAllArticle);
router.get('/:article_id', articleCtrl.getOneArticle);

router.put('/:article_id', auth, articleCtrl.updateOneArticle);

router.delete('/:article_id', auth, articleCtrl.deleteArticle);

module.exports = router;