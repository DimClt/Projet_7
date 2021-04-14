const dB = require('../sql/dbConnect');

let Article = (article) => {
    this.title = article.title;
    this.date_document = article.date_document;
    this.article_text = article.article_text;
    this.author = article.author;
};

Article.createNewArticle = (article, result) => {
    dB.query('INSERT INTO Articles SET ?', article, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, { article_id: res.insertId, ...article });
    });
};

Article.getAll = (result) => {
    dB.query('SELECT * FROM Articles INNER JOIN Users ON Articles.author = Users.id ORDER BY date_document DESC', (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

Article.getOne = (article_id, result) => {
    dB.query('SELECT * FROM Articles INNER JOIN Users ON Articles.author = Users.id WHERE Articles.article_id=?', article_id, (err, res) => {
        if (err) {
            return result(err, null);
        }
        if (res.length) {
            return result(null, res);
        }
        return result({ message: 'Article inexistant !' }, null);
    });
};

Article.updateArticle = (article, result) => {
    dB.query('UPDATE Articles SET Articles.title=?, Articles.article_text=? WHERE Articles.article_id=?', article, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

Article.delete = (article_id, result) => {
    dB.query('DELETE FROM Articles WHERE article_id=?', article_id, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

module.exports = Article;