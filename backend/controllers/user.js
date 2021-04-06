const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs')

/*************** Creation compte / connexion ****************************/

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            let user = {
                mail: req.body.mail,
                password: hash,
                user_pict: '',
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                bio: null
            };
            User.create(user, (err, data) => {
                if (err) {
                    res.status(400).json({ message: 'Utilisateur non créé' });
                } else {
                    res.send(data);
                }
            })
        })
        .catch(error => res.status(500).json({ message: 'Erreur bcrypt' }));
};

exports.login = (req, res, next) => {
    User.getOne(req.body.mail, (err, user) => {
        if (err) {
           return res.status(401).json(err);
        }
        if (user) {
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({ message: 'Mot de passe incorrect' })
                }
                res.status(200).json({
                    userId: user.id,
                    token: jwt.sign(
                        { userId: user.id },
                        'GROUPOMANIA_TOKEN_SECRET',
                        {expiresIn: '6h' }
                    )
                });
            })
            .catch(error => res.status(500).json({ message: 'bcrypt erreur' }));
        }
    });
};
/********************************* ***************************************/
/* Pofile : Consultation des profiles - Consultation profile perso / modification / suppression */

exports.getAllProfil = (req, res, next) => {
    User.getAll((error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.getProfilById = (req, res, next) => {
    User.getById(req.params.id, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.profilUpdate = (req, res, next) => {
    let userUpdate = req.file ?
    [
        `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        req.body.firstname, 
        req.body.lastname, 
        req.body.bio, 
        req.params.id
    ]: [
        req.body.user_pict,
        req.body.firstname, 
        req.body.lastname, 
        req.body.bio, 
        req.params.id
    ];
    User.updateProfil(userUpdate, (error, data) => {
        if (error) {
            res.status(400).json({ error });
        }
        res.send(data);
    });
};

exports.deleteMyProfil = (req, res, next) => {
    User.delete(req.params.id, (error, data) => {
        if (error) {
            res.status(500).json({ error });
        }
        res.send(data);
    });
};