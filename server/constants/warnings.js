const SERVER_SESSION_SECRET_WARNING = `
----------------------------

*** WARNING ***
Your server is not very secure.
You need to set SERVER_SESSION_SECRET to a better secret.
It should be at least 8 characters.

If this warning is showing on Heroku,
add or change your SERVER_SESSION_SECRET environment variable!

----------------------------`;

module.exports = {
    SERVER_SESSION_SECRET_WARNING
};
