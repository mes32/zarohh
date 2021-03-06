const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const sessionMiddleware = require('./modules/session-middleware');
const passportLocal = require('./strategies/local.strategy');

const DATABASE_URI = process.env.MONGOLAB_URI || 'mongodb://localhost/zarohh';

const app = express();

// Configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure session and local passport authentication
app.use(sessionMiddleware);
app.use(passportLocal.initialize());
app.use(passportLocal.session());

// Connect to database
mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useCreateIndex: true, }, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + DATABASE_URI + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + DATABASE_URI);
    }
});

// Configure routes
const userRouter = require('./routes/user.router');
const venueRouter = require('./routes/venue.router');

app.use('/api/user', userRouter);
app.use('/api/venue', venueRouter);

// Serve the static site files
app.use(express.static('public'));

// Start the server listening for connections
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server listening on port: ${port}`) });

module.exports = app;