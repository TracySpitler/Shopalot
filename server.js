// include dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// initialize express
const app = express();

// middleware
app.use(bodyParser.json());

// export the app
module.exports = app;
