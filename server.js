const express = require('express');
const path = require('path');
const api = require('./routes/index.js');
const { clog } = require('./middleware/clog');

//allows for Heroku port or my own at 3001
const PORT = process.env.PORT || 3001;

const app = express(); 
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

//Heroku Notes
//To login: heroku auth:login
// Once you finish the project, login into heroku. then heroku create. then git push heroku main