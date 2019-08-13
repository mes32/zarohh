const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const encryptAPI = require('../modules/encryption');
const User = require('../models/User');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((err, result) => {
        if (err) {
            console.log('Error in local.strategy deserializeUser(),', err);
            done(err);
        }
        
        const user = result;
        if (user) {
            delete user.password; // remove password so it doesn't get sent
            done(null, user);
        } else {
            done(null, false, { message: 'Incorrect credentials.' });
        }
    });

    // pool.query('SELECT * FROM person WHERE id = $1', [id]).then((result) => {
    //     const user = result && result.rows && result.rows[0];
    //     if (!user) {
    //         done(null, false, { message: 'Incorrect credentials.' });
    //     } else {
    //         delete user.password; // remove password so it doesn't get sent
    //         done(null, user);
    //     }
    // }).catch((err) => {
    //     console.log('query err ', err);
    //     done(err);
    // });
});

passport.use('local', new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'username',
}, ((req, username, password, done) => {
    User.findOne({ username: `${username}` }).then((err, result) => {
        if (err) {
            console.log('error', err);
            done(null, {});
        }

        const user = result;
        if (user && encryptAPI.comparePassword(password, user.password)) {
            done(null, user);
        } else if (user) {
            done(null, false, { message: 'Incorrect credentials.' });
        } else {
            done(null, false);
        }
    });

    // pool.query('SELECT * FROM person WHERE username = $1', [username])
    //     .then((result) => {
    //         const user = result && result.rows && result.rows[0];
    //         if (user && encryptAPI.comparePassword(password, user.password)) {
    //             done(null, user);
    //         } else if (user) {
    //             done(null, false, { message: 'Incorrect credentials.' });
    //         } else {
    //             done(null, false);
    //         }
    //     }).catch((err) => {
    //         console.log('error', err);
    //         done(null, {});
    //     });
})));

module.exports = passport;
