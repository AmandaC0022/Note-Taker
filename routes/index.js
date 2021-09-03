//Think like a directory, like a Table of Contents for all of your routes 
const express = require('express');
const notesRouter = require('./notes'); 

const app = express();

//tells the router how to get to the html file 
app.use('/notes', notesRouter); 

module.exports = app;