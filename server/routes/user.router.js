const express = require('express');
const encryptLib = require('../modules/encryption');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const userStrategy = require('../strategies/local.strategy');
const User = require('../models/User');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
});

router.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const encryptedPassword = encryptLib.encryptPassword(password);
        User.create({ username: username, password: encryptedPassword }).then(() => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(error);
            res.sendStatus(500);
        });
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

router.post('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
