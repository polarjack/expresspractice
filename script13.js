var express = require('express')

var app = express()

app.get('/helloThere', function(require, response) {
  response.send("hello there, from express")
});

app.listen(5000, function() {
  console.log('Listening at Port 5000')
})