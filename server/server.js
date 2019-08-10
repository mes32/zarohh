const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Configure body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure routes

// Serve the static site files

// Start the server listening for connections
const port = process.env.PORT || 5000;
app.listen(port, () => { console.log(`Server listening on port: ${port}`) });

module.exports = app;