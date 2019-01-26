// include dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

// initialize express
const app = express();

// middleware
app.use(bodyParser.json());

// connect to the database
const db = require('./config/mongoose');

// routes
// const index = require('./routes/index');
// app.use('/', index);
app.use('/api/items', items);

// export the app
module.exports = app;
