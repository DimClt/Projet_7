const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment');

router.post('/comment', commentCtrl.createComment);

router.get('/:comment_article', commentCtrl.getAllCommentById);

router.put('/:article_id', auth, commentCtrl.updateComment);

router.delete('/:article_id', auth, commentCtrl.deleteComment);

module.exports = router;