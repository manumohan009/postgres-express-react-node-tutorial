/*
Morgan is a HTTP request logger middleware for node.js
Using body parser allows you to access req.body from within your routes, and use that data for example to create a user in a database.





*/

const express = require('express'); // initialize express variable
const logger = require('morgan');   // initialize morgan variable
const bodyParser = require('body-parser'); // initialize body-parser variable

//Set up express app
const app = express();

//Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Require our routes into the application.
require('./server/routes')(app);
//Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;