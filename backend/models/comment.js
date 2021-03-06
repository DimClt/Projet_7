const dB = require('../sql/dbConnect');

let Comment = (comment) => {
    this.comment_article = comment.comment_article;
    this.comment_author = comment.comment_author;
    this.comment_date = comment.comment_date;
    this.comment_text = comment.comment_text;
};

Comment.create = (comment, result) => {
    dB.query('INSERT INTO Comments SET ?', comment, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, { comment_id: res.insertId, ...comment });
    });
};

Comment.getAllById = (comment_article, result) => {
    dB.query('SELECT * FROM Comments INNER JOIN Users ON Comments.comment_author = Users.id WHERE Comments.comment_article=? ORDER BY comment_date ASC', comment_article, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

Comment.update = (comment, result) => {
    dB.query('UPDATE Comments SET comment_text=? WHERE comment_id=?', comment, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

Comment.delete = (commentId, result) => {
    dB.query('DELETE FROM Comments WHERE comment_id=?', commentId, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

module.exports = Comment;