const Comment = require('../models/comment');

exports.createComment = (req, res, next) => {
    let comment = {
        comment_article: req.body.comment_article,
        comment_author: req.body.userId,
        comment_date: new Date(),
        comment_text: req.body.comment_text,
    };
    Comment.create(comment, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.getAllCommentById = (req, res, next) => {
    Comment.getAllById(req.params.comment_article, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.updateComment = (req, res, next) => {
    let commentUpdate = {
        comment_text: req.body.comment_text,
        article_id: req.params.article_id
    };
    Comment.update(commentUpdate, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.deleteComment = (req, res, next) => {
    Comment.delete(req.params.comment_id, (error, data) => {
        if (error) {
            res.status(500).json({ error });
        }
        res.send(data);
    });
};