const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentCtrl = require('../controllers/comment');

router.post('/comment', auth, commentCtrl.createComment);

router.get('/:comment_article', commentCtrl.getAllCommentById);

router.put('/:comment_id', auth, commentCtrl.updateComment);

router.delete('/:comment_id', auth, commentCtrl.deleteComment);

module.exports = router;