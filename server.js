// server init + mods
var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connect to db
/*mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
  .then(() => console.log('\nDB Connected!'))
  .catch(err => {
    console.log('\nDB Connection Error: ${err.message}');
  });
*/
app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile('/index.html');
});

app.use(express.static('public'));

http.listen(3000, function(){
    console.log('\nServer up on *:3000');
  });
