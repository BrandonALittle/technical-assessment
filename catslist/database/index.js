const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catslist');

// create collection schema
let catSchema = mongoose.Schema({
  name: String,
  image: String,
  owner: String,
  description: String,
});

// create model with schema
let Cat = mongoose.model('Cat', catSchema);

// create methods for db interaction

// save() - insert a new document into the collection
let save = (cat) => {
  Cat.create(cat, function(err, newCat) {
    if (err) return handleError(err);
    console.log('Cat added to database: ', cat.name);
  });
}

// remove() - remove a document from the collection
let remove = (cat) => {
  Cat.remove(cat, function(err, removedCat) {
    if (err) return handleError(err);
    console.log('Cat removed from database: ', cat.name);
  });
}

// retrieve() - retrieve a document from the collection
let retrieve = (cat, callback) => {
  Cat.find(cat, function(err, results) {
    if (err) return handleError(err);
    console.log(results);
    callback(results);
  })
}

// retrieveAll() - retrieve all documents from the collection
let retrieveAll = (callback) => {
  Cat.find({}, function(err, results) {
    if (err) return handleError(err);
    console.log(results);
    callback(results);
  })
}

module.exports.save = save;
module.exports.remove = remove;
module.exports.retrieve = retrieve;
module.exports.retrieveAll = retrieveAll;