const dB = require('../sql/dbConnect');

let Article = (article) => {
    this.title = article.title;
    this.date_document = article.date_document;
    this.article_text = article.article_text;
    this.author = article.author;
};

Article.createNew = (article, result) => {
    dB.query('INSERT INTO Articles SET ?', article, (err, res) => {
        if (err) {
            result(err, null);
            throw err;
        }
        result(null, { article_id: res.insertId, ...article });
    });
};

Article.getAll = (result) => {
    dB.query('SELECT * FROM Articles INNER JOIN Users ON Articles.author = Users.id', (err, res) => {
        if (err) {
            result(err, null);
            throw err;
        }
        result(null, res);
    });
};

Article.getOne = (article_id, result) => {
    dB.query('SELECT * FROM Articles INNER JOIN Users ON Articles.author = Users.id WHERE article_id=?', article_id, (err, res) => {
        if (err) {
            result(err, null);
            throw err;
        }
        if (res.length) {
            return result(null, res);
        }
        result({ message: 'Article inexistant !' }, null);
    });
};

Article.updateArticle = (article, result) => {
    dB.query('UPDATE Articles SET title=?, article_text=? WHERE article_id=?', article, (err, res) => {
        if (err) {
            result(err, null);
            throw err;
        }
        result(null, res);
    });
};

Article.delete = (articleId, result) => {
    dB.query('DELETE FROM Articles WHERE article_id=?', articleId, (err, res) => {
        if (err) {
            result(err, null);
            throw err;
        }
        result(null, res);
    });
};

module.exports = Article;