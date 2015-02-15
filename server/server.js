var app = require('express')();
var upcoming = require('./upcoming');

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', function (req, res) {
  res.json([{
      'title': 'Katten'
  }]);
});

app.get('/user/upcoming', function(req, res) {
    res.json(upcoming(15));
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
