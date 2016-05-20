var mongoose = require('mongoose');

var db = mongoose.connection;

mongoose.connect('mongodb://localhost/shortlydb');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongodb connection is open!');
});

module.exports = db;
