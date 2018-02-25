// foreign modules
const express = require('express');
const app = express();
const parse = require('body-parser');

// local modules
const db = require ('../database/index.js');

// middleware
  // serve static files
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/components'));
app.use(express.static(__dirname + '/../client/styles'));
app.use(express.static(__dirname + '/../data.json'));
app.use(express.static(__dirname + '/../client/services'));

  // augment requests
app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

  // add cat to database
app.post('/cats', function(request, response) {
  let cat = request.body;
  db.save(cat);
  response.redirect(301, '/');
});

  // get all cats from database
app.get('/cats', function(request, response) {
  db.retrieveAll(function(results) {
    response.send(results);
  });
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