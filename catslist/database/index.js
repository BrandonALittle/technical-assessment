const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/catslist');

// create collection schema

// create model with schema

// create methods for db interaction

// save() - insert a new document into the collection

// remove() - remove a document from the collection

// retrieve() - retrieve a document from the collection

// retrieveAll() - retrieve all documents from the collection

module.exports.save = save;
module.exports.remove = remove;
module.exports.retrieve = retrieve;
module.exports.retrieveAll = retrieveAll;