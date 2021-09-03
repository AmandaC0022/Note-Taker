//Think like a directory, like a Table of Contents for all of your routes 

const express = require('express');

const app = express();

const notes = require('./notes'); 

//tells the router how to get to the html file 
app.use('/api', notes); 


module.exports = app;