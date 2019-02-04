// include dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// initialize express
const app = express();

// middleware
app.use(bodyParser.json());

// connect to the database
const db = require('./config/mongoose');

// routes
const items = require('./routes/api/items');
app.use('/api/items', items);

// user route
const Users = require('./routes/api/users');
app.use('/api/users', Users);
// google route
const passport = require("passport");
app.use(passport.initialize());
require("./config/passport");


// serve static assets (build) if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  //load index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// export the app
module.exports = app;
