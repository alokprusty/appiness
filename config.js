var mongoose = require('mongoose');
var databaseLink = 'mongodb://127.0.0.1:27017/appiness' //Database URL

var database = mongoose.connect(databaseLink, { useNewUrlParser: true, useFindAndModify: false}, (error, db) => {
    if (error) {
        console.log('Error Occuered ', error);
        return null;
    } else {
        return db;
    }
});

module.exports = database;