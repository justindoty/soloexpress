
var express = require("express");
var app = express();
var helloRouter = require('./hello')
app.get('/', function (request, response){
  response.send('Hello World!');
});

app.use('/hello', helloRouter);

app.listen(3000, function(){
  console.log('Server Running, CNTRL C to stop');
});
