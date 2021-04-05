const dB =  require('../sql/dbConnect');

let User = (user) => {
    this.mail = user.mail;
    this.password = user.password;
    this.user_pict = user.userPict;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.bio = user.bio;
    this.admin = 0;
};


User.create = (user, result) => {
    dB.query('INSERT INTO Users SET ?', user, (error, res) => { 
        if (error) {
            result(error, null);
            return error;
        }
        result(null, { id: res.insertId, ...user });
    });
};

User.getAll = (result) => {
    dB.query('SELECT id, mail, firstname, lastname, bio FROM Users', (error, res) => {
        if (error) {
            result(error, null);
            return error;
        }
        result(null, res);
    });
};

User.getOne = (mail, result) => {
    dB.query('SELECT * FROM Users WHERE mail = ?', mail, (error, res) => {
        if (error) {
            result(error, null);
            return error;
        }
        if (res.length) {
            return result(null, res[0]);
        }
        result({ message: 'Utilisateur inconnue' }, null);
    });
};

User.getById = (id, result) => {
    dB.query('SELECT * FROM Users WHERE id = ?', id, (error, res) => {
        if (error) {
            result(error, null);
            return error;
        }
        if (res.length) {
            return result(null, res[0]);
        }
        result({ message: 'Utilisateur inconnue' }, null);
    });
};

User.updateProfil = (user, result) => {
    dB.query('UPDATE Users SET user_pict = ?, firstname=?, lastname=?, bio=? WHERE id = ?', user, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

User.delete = (id, result) => {
    dB.query('DELETE FROM Users WHERE id=?', id, (err, res) => {
        if (err) {
            result(err, null);
            return err;
        }
        result(null, res);
    });
};

module.exports = User;

