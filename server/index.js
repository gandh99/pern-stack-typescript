"use strict";
var express = require('express');
var dotenv = require('dotenv');
var passport = require("passport");
// const connectDB = require('./config/db')
// Init
var app = express();
dotenv.config({ path: './config/.env' });
// Connect to DB
// connectDB()
// Passport
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());
// Bodyparser
app.use(express.json());
// Routes
// app.use('/diary', require('./routes/api/diary'))
// app.use('/friends', require('./routes/api/friends'))
// app.use('/notifications', require('./routes/api/notifications'))
// Start the server and IO connection
var port = process.env.SERVER_PORT || 5000;
var server = app.listen(port, function () { return console.log("Server started on port " + port + "..."); });
