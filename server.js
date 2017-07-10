var http = require('http');
var server = http.createServer(engine)


server.listen(5555, function() {
  console.log('server is on')
})

function engine(request, response) {
  // console.log(response)
  response.writeHead(200, {"Content-Type": "text/plain"});
  
  response.end('request from page' + request.url);

}


