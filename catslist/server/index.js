// foreign modules
const express = require('express');
const app = express();
const parse = require('body-parser');

// local modules
const db = require ('./database/index.js');

// middleware
  // serve static files
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/src/components'));
app.use(express.static(__dirname + '/../client/styles'));

  // augment requests
app.use(parse.urlencoded({ extended: true }));
// app.use(parse.json());

// routes
  // unnecessary ? serve index.html
app.get('/', function(request, response) {

});

  // add cat to database
app.post('/cats', function(request, response) {

});

  // get all cats from database
app.get('/cats', function(request, response) {

});

  // delete a cat from database
app.delete('/cats', function(request, response) {

});

 // unnecessary ? update a cat in database
app.put('/cats', function(request, response) {

});

let port = 3000;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});