var app = require('express')();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

var upcoming = {
    episodes: [
        {
            ids: {
                id: 567,
                show: 2
            },
            title: 'All men must die',
            season: 3,
            episode: 2,
            airs: '2015-02-18T01:00:00.000Z',
            thumbnail: 'something.jpg',
            show: {
                ids: {
                    id: 2
                },
                title: 'Game of thrones',
                year: 2005,
                poster: 'poster.jpg',
                fanart: 'fanart.jpg'
            }
        }, {
            ids: {
                id: 568,
                show: 2
            },
            title: 'Yoo',
            season: 3,
            episode: 3,
            airs: '2015-02-25T01:00:00.000Z',
            thumbnail: 'something.jpg',
            show: {
                ids: {
                    id: 2
                },
                title: 'Game of thrones',
                year: 2005,
                poster: 'poster.jpg',
                fanart: 'fanart.jpg'
            }
        }
    ]
};


app.get('/', function (req, res) {
  res.json([{
      'title': 'Katten'
  }]);
});

app.get('/user/upcoming', function(req, res) {
    res.json(upcoming);
});

var server = app.listen(8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
