/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

 var getFutureDate = function(n) {
   var d = new Date();
   d = new Date((new Date()).getTime() + (n || 0) * 86400000);
   var month = d.getMonth() + 1;
   return [
     d.getFullYear(),
     (month < 10 ? '0' + month : month),
     (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
   ].join('-');
 };

module.exports = {
    drawRoutes: function(app) {

        app.get('/api/v2/user', function(req, res) {
            res.json({
                'status': 200,
                'message': 'OK',
                'value': {
                    'username': 'john_doe',
                    'timezone': 'Europe/Stockholm'
                }
            });
        });

        app.get('/api/v2/tv/upcoming', function(req, res) {
            // res.statusCode = 401;
            res.json({
                    'status': 200,
                    'message': 'OK',
                    'value':
                        [{
                          "tv_id": "24",
                          "episode_id": null,
                          "shown_name": "The Walking Dead",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "168",
                          "episode_id": null,
                          "shown_name": "The Newsroom (2012)",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "17",
                          "episode_id": null,
                          "shown_name": "Sons of Anarchy",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "528",
                          "episode_id": null,
                          "shown_name": "The Blacklist",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "12",
                          "episode_id": null,
                          "shown_name": "Hell on Wheels",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "20",
                          "episode_id": null,
                          "shown_name": "The Big Bang Theory",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "160",
                          "episode_id": null,
                          "shown_name": "Marvel's Agents of S.H.I.E.L.D.",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": ""
                        },
                        {
                          "tv_id": "67",
                          "episode_id": null,
                          "shown_name": "Arrow",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "159",
                          "episode_id": null,
                          "shown_name": "Ray Donovan",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "144",
                          "episode_id": null,
                          "shown_name": "Vikings",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "158",
                          "episode_id": null,
                          "shown_name": "Under The Dome",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "26",
                          "episode_id": null,
                          "shown_name": "True Blood",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "8",
                          "episode_id": null,
                          "shown_name": "Family Guy",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "165",
                          "episode_id": null,
                          "shown_name": "Orange Is the New Black",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "23",
                          "episode_id": null,
                          "shown_name": "The Vampire Diaries",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "10",
                          "episode_id": null,
                          "shown_name": "Game of Thrones",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "139",
                          "episode_id": null,
                          "shown_name": "Suits",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "52",
                          "episode_id": null,
                          "shown_name": "Solsidan",
                          "timestamp": null,
                          "season": null,
                          "episode": null,
                          "episode_name": null,
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "74",
                          "episode_id": "46266",
                          "shown_name": "Homeland",
                          "timestamp": getFutureDate(1),
                          "season": "3",
                          "episode": "12",
                          "episode_name": "TBA",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "14",
                          "episode_id": "16745",
                          "shown_name": "How I Met Your Mother",
                          "timestamp": getFutureDate(2),
                          "season": "9",
                          "episode": "13",
                          "episode_name": "Bass Player Wanted",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "106",
                          "episode_id": "39390",
                          "shown_name": "Justified",
                          "timestamp": getFutureDate(3),
                          "season": "5",
                          "episode": "1",
                          "episode_name": "A Murder Of Crowes",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "108",
                          "episode_id": "14038",
                          "shown_name": "Banshee",
                          "timestamp": getFutureDate(7),
                          "season": "2",
                          "episode": "1",
                          "episode_name": "Armies Of One",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "107",
                          "episode_id": "52557",
                          "shown_name": "The Following",
                          "timestamp": getFutureDate(7),
                          "season": "2",
                          "episode": "1",
                          "episode_name": "Resurrection",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "110",
                          "episode_id": "77648",
                          "shown_name": "The Americans (2013)",
                          "timestamp": getFutureDate(8),
                          "season": "2",
                          "episode": "1",
                          "episode_name": "Comrades",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "111",
                          "episode_id": "39130",
                          "shown_name": "House Of Cards (2013)",
                          "timestamp": getFutureDate(8),
                          "season": "2",
                          "episode": "1",
                          "episode_name": "TBA",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "5",
                          "episode_id": "37961",
                          "shown_name": "Continuum",
                          "timestamp": getFutureDate(100),
                          "season": "3",
                          "episode": "1",
                          "episode_name": "TBA",
                          "image": "525b1c9cf2968.jpg"
                        },
                        {
                          "tv_id": "7",
                          "episode_id": "37960",
                          "shown_name": "Falling Skies",
                          "timestamp": getFutureDate(121),
                          "season": "4",
                          "episode": "1",
                          "episode_name": "Ghost in the Machine",
                          "image": "525b1c9cf2968.jpg"
                        }]
                    });
        });

        app.get('/api/v2/nowwatcing', function(req, res) {
          res.json({
            'status': 200,
            'message': 'OK',
            'value': {
              'movies': [
                {
                  'movie_id': '1',
                  'title': 'The Hunger Games',
                  'progress': '0.7',
                  'image': '504238b57b1e2.jpg'
                }, {
                  'movie_id': '1178',
                  'title': 'The Hunger Games',
                  'progress': '0.3',
                  'image': '52261a42c6e5c.jpg'
                }
              ],
              'tv_shows':[
                {
                  'tv_id': '24',
                  'shown_name': 'The Walking Dead',
                  'progress': '0.4',
                  'image': '525b1c9cf2968.jpg'
                },{
                  'tv_id': '24',
                  'shown_name': 'Sherlock',
                  'progress': '0.2',
                  'image': '50b220731c0b4.jpg'
                }
              ]
            }
          });
        });

        app.get('/api/v2/tv/populate/:time', function(req, res) {
            setTimeout(function() {
                if (req.params.time == 31536000) {
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': [
                            {
                                'tv_id': '24',
                                'shown_name': 'The Walking Dead',
                                'views': '1027',
                                'image': '525b1c9cf2968.jpg',
                                'order': '1'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '509',
                                'image': '50b220731c0b4.jpg',
                                'order': '2'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '1008',
                                'image': '50b220731c0b4.jpg',
                                'order': '3'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '1123',
                                'image': '50b220731c0b4.jpg',
                                'order': '4'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '423',
                                'image': '50b220731c0b4.jpg',
                                'order': '5'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '987',
                                'image': '50b220731c0b4.jpg',
                                'order': '6'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '223',
                                'image': '50b220731c0b4.jpg',
                                'order': '7'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '123',
                                'image': '50b220731c0b4.jpg',
                                'order': '8'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '58',
                                'image': '50b220731c0b4.jpg',
                                'order': '9'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '79',
                                'image': '50b220731c0b4.jpg',
                                'order': '10'
                            }
                        ]
                    });
                } else {
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': [
                            {
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '1027',
                                'image': '525b1c9cf2968.jpg',
                                'order': '1'
                            },{
                                'tv_id': '24',
                                'shown_name': 'The Walking Dead',
                                'views': '509',
                                'image': '504241d7e6a13-2.jpg',
                                'order': '2'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Game of thrones',
                                'views': '1008',
                                'image': '50b220731c0b4.jpg',
                                'order': '3'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '1123',
                                'image': '50b220731c0b4.jpg',
                                'order': '4'
                            },{
                                'tv_id': '24',
                                'shown_name': 'Sherlock',
                                'views': '423',
                                'image': '504241d7e6a13-2.jpg',
                                'order': '5'
                            }
                        ]
                    });
                }
            }, 1000);
        });

    }
};
