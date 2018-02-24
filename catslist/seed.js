/**
 *  This file should be a standalone script that seeds your database,
 *  making testing interactions with your database much easier.
 *
 *  You should be able to run this file from Terminal with:
 *
 *    node ./seed.js
 *
 *  And populate your database with all the data from `data.json`
 */
const db = require('./database/index.js');
const cats = require('./data.json');

// Step 1: Drop old data
cats.forEach(function(cat) {
  db.remove(cat);
})

// Step 2: Add data from `data.json`
cats.forEach(function(cat) {
  db.save(cat);
});

