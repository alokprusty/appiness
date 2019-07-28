var app = require('express')();
var database = require('./config'); //Database Connection to MongoServer
var bodyParser = require('body-parser')
var router = require('./routes/route') //Importing router file

app.use(bodyParser.json()) //Adding parser for reading JSON Data
app.use('/api', router) //Adding URI to route file location

app.listen(3001,(err)=>{ //Running server on PORT 3001
    if(err){
        console.log(err)
    }else{
        console.log('Server Runing on 3001')
    }
});