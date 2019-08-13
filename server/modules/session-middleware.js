const cookieSession = require('cookie-session');
const warnings = require('../constants/warnings');

const MIN_SECRET_LENGTH = 8;
const MAX_SESSION_MS = 60000;

const serverSessionSecret = () => {
    const secret = process.env.SERVER_SESSION_SECRET;
    if (!secret || secret.length < MIN_SECRET_LENGTH) {
        console.log(warnings.SERVER_SESSION_SECRET_WARNING);
    }
    return secret;
};

module.exports = cookieSession({
    secret: serverSessionSecret(),
    key: 'user',
    resave: 'false',
    saveUninitialized: false,
    cookie: { maxage: MAX_SESSION_MS, secure: false },
});