const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const articleCtrl = require('../controllers/article');
const commentCtrl = require('../controllers/comment');

router.post('/publish', articleCtrl.createArticle);
router.post('/:article_id', commentCtrl.createComment);

router.get('/', articleCtrl.getAllArticle);
router.get('/:article_id', articleCtrl.getOneArticle);
router.get('/:article_id', commentCtrl.getAllCommentById);

router.put('/:article_id', auth, articleCtrl.updateOneArticle);
router.put('/:article_id', auth, commentCtrl.updateComment);

router.delete('/:article_id', auth, articleCtrl.deleteArticle);
router.delete('/:article_id', auth, commentCtrl.deleteComment);

module.exports = router;