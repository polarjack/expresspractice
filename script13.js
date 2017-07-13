var express = require('express');
var path = require('path')
var fs = require('fs')
var app = express();


app.use('/cssFile', express.static(__dirname + '/assets'))

app.get('/', function(req, res) {
  res.sendfile('index.html', {root: path.join(__dirname, './files')})
})

app.get(/^(.+)$/, function(req, res) {
  console.log(path.join(__dirname, './files/', req.params[0]+'.html'));
  try{
    if(fs.statSync(path.join(__dirname, './files/', req.params[0])).isFile()) {
      res.sendfile(req.params[0] + '.html', {root: path.join(__dirname, './files')})
    }
  }catch(err) {
    res.sendfile('404.html', {root: path.join(__dirname, './files')})
  }
  
})


app.listen(5000, function() {
  console.log('Listening at Port 5000')
})