const Article = require('../models/article');

exports.createArticle = (req, res, next) => {
    let article = {
        title: req.body.title,
        date_document: new Date(),
        article_text: req.body.article_text,
        author: req.body.userId
    };
    Article.createNewArticle(article, (error, data) => {
        if (error) {
            res.status(400).json({ message: 'Article non créé !' });
        } else {
            res.send(data);
        }
    });
};

exports.getAllArticle = (req, res, next) => {
    Article.getAll((error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.getOneArticle = (req, res, next) => {
    Article.getOne(req.params.article_id, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.updateOneArticle = (req, res, next) => {
    let articleUpdate = {
        title: req.body.title, 
        article_text: req.body.article_text, 
        article_id: req.params.article_id
    };
    Article.updateArticle(articleUpdate, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.deleteArticle = (req, res, next) => {
    Article.delete(req.params.article_id, (error, data) => {
        if (error) {
            res.status(500).json({ error });
        }
        res.send(data);
    });
};