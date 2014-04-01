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
                        "series_name": "The Walking Dead",
                        "timestamp": null,
                        "season": null,
                        "episode": null,
                        "episode_name": null,
                        "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "168",
                      "episode_id": null,
                      "series_name": "The Newsroom (2012)",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "17",
                      "episode_id": null,
                      "series_name": "Sons of Anarchy",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "528",
                      "episode_id": null,
                      "series_name": "The Blacklist",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "12",
                      "episode_id": null,
                      "series_name": "Hell on Wheels",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "20",
                      "episode_id": null,
                      "series_name": "The Big Bang Theory",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "160",
                      "episode_id": null,
                      "series_name": "Marvel's Agents of S.H.I.E.L.D.",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": ""
                    },
                    {
                      "tv_id": "67",
                      "episode_id": null,
                      "series_name": "Arrow",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "159",
                      "episode_id": null,
                      "series_name": "Ray Donovan",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "144",
                      "episode_id": null,
                      "series_name": "Vikings",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "158",
                      "episode_id": null,
                      "series_name": "Under The Dome",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "26",
                      "episode_id": null,
                      "series_name": "True Blood",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "8",
                      "episode_id": null,
                      "series_name": "Family Guy",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "165",
                      "episode_id": null,
                      "series_name": "Orange Is the New Black",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "23",
                      "episode_id": null,
                      "series_name": "The Vampire Diaries",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "10",
                      "episode_id": null,
                      "series_name": "Game of Thrones",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "139",
                      "episode_id": null,
                      "series_name": "Suits",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "52",
                      "episode_id": null,
                      "series_name": "Solsidan",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episode_name": null,
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "74",
                      "episode_id": "46266",
                      "series_name": "Homeland",
                      "timestamp": getFutureDate(1),
                      "season": "3",
                      "episode": "12",
                      "episode_name": "TBA",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "14",
                      "episode_id": "16745",
                      "series_name": "How I Met Your Mother",
                      "timestamp": getFutureDate(2),
                      "season": "9",
                      "episode": "13",
                      "episode_name": "Bass Player Wanted",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "106",
                      "episode_id": "39390",
                      "series_name": "Justified",
                      "timestamp": getFutureDate(3),
                      "season": "5",
                      "episode": "1",
                      "episode_name": "A Murder Of Crowes",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "108",
                      "episode_id": "14038",
                      "series_name": "Banshee",
                      "timestamp": getFutureDate(7),
                      "season": "2",
                      "episode": "1",
                      "episode_name": "Armies Of One",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "107",
                      "episode_id": "52557",
                      "series_name": "The Following",
                      "timestamp": getFutureDate(7),
                      "season": "2",
                      "episode": "1",
                      "episode_name": "Resurrection",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "110",
                      "episode_id": "77648",
                      "series_name": "The Americans (2013)",
                      "timestamp": getFutureDate(8),
                      "season": "2",
                      "episode": "1",
                      "episode_name": "Comrades",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "111",
                      "episode_id": "39130",
                      "series_name": "House Of Cards (2013)",
                      "timestamp": getFutureDate(8),
                      "season": "2",
                      "episode": "1",
                      "episode_name": "TBA",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "5",
                      "episode_id": "37961",
                      "series_name": "Continuum",
                      "timestamp": getFutureDate(100),
                      "season": "3",
                      "episode": "1",
                      "episode_name": "TBA",
                      "image": "525b1c9cf2968.jpg"
                    },
                    {
                      "tv_id": "7",
                      "episode_id": "37960",
                      "series_name": "Falling Skies",
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
                    'tv_shows': [
                        {
                          'tv_id': '24',
                          'series_name': 'The Walking Dead',
                          'progress': '0.4',
                          'image': '525b1c9cf2968.jpg'
                        },{
                          'tv_id': '24',
                          'series_name': 'Sherlock',
                          'progress': '0.2',
                          'image': '50b220731c0b4.jpg'
                        }
                    ]
                }
            });
        });

        app.get('/api/v2/tv/popular/:time', function(req, res) {
            setTimeout(function() {
                if (req.params.time == 31536000) {
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': [
                            {
                                'tv_id': '24',
                                'series_name': 'The Walking Dead',
                                'views': '1027',
                                'image': '525b1c9cf2968.jpg',
                                'order': '1'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '509',
                                'image': '50b220731c0b4.jpg',
                                'order': '2'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1008',
                                'image': '50b220731c0b4.jpg',
                                'order': '3'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1123',
                                'image': '50b220731c0b4.jpg',
                                'order': '4'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '423',
                                'image': '50b220731c0b4.jpg',
                                'order': '5'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '987',
                                'image': '50b220731c0b4.jpg',
                                'order': '6'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '223',
                                'image': '50b220731c0b4.jpg',
                                'order': '7'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '123',
                                'image': '50b220731c0b4.jpg',
                                'order': '8'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '58',
                                'image': '50b220731c0b4.jpg',
                                'order': '9'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
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
                                'series_name': 'Sherlock',
                                'views': '1027',
                                'image': '525b1c9cf2968.jpg',
                                'order': '1'
                            },{
                                'tv_id': '24',
                                'series_name': 'The Walking Dead',
                                'views': '509',
                                'image': '504241d7e6a13-2.jpg',
                                'order': '2'
                            },{
                                'tv_id': '24',
                                'series_name': 'Game of thrones',
                                'views': '1008',
                                'image': '50b220731c0b4.jpg',
                                'order': '3'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1123',
                                'image': '50b220731c0b4.jpg',
                                'order': '4'
                            },{
                                'tv_id': '24',
                                'series_name': 'Sherlock',
                                'views': '423',
                                'image': '504241d7e6a13-2.jpg',
                                'order': '5'
                            }
                        ]
                    });
                }
            }, 1000);
        });

        app.get('/api/v2/movie/popular/:time', function(req, res) {
            setTimeout(function() {
                if (req.params.time == 31536000) {
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': [
                            {
                                'id': '24',
                                'title': 'The Wolverine',
                                'views': '1027',
                                'image': '520a7b2c85e78.jpg',
                                'order': '1'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '509',
                                'image': '527d71a2c065c.jpg',
                                'order': '2'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '1008',
                                'image': '527d71a2c065c.jpg',
                                'order': '3'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '1123',
                                'image': '527d71a2c065c.jpg',
                                'order': '4'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '423',
                                'image': '527d71a2c065c.jpg',
                                'order': '5'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '987',
                                'image': '527d71a2c065c.jpg',
                                'order': '6'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '223',
                                'image': '52261a42c6e5c.jpg',
                                'order': '7'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '123',
                                'image': '52261a42c6e5c.jpg',
                                'order': '8'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '58',
                                'image': '52261a42c6e5c.jpg',
                                'order': '9'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '79',
                                'image': '52261a42c6e5c.jpg',
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
                                'id': '24',
                                'title': 'World War Z',
                                'views': '1027',
                                'image': '52261a42c6e5c.jpg',
                                'order': '1'
                            },{
                                'id': '24',
                                'title': 'Prisoners',
                                'views': '509',
                                'image': '5288a1b355181.jpg',
                                'order': '2'
                            },{
                                'id': '24',
                                'title': 'Oblivion',
                                'views': '1008',
                                'image': '51f0984449972.jpg',
                                'order': '3'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '1123',
                                'image': '52261a42c6e5c.jpg',
                                'order': '4'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '423',
                                'image': '52261a42c6e5c.jpg',
                                'order': '5'
                            }
                        ]
                    });
                }
            }, 1000);
        });

        app.get('/api/v2/history/:batch', function(req, res) {
            if (req.params.batch >= 3) {
                res.json({
                    'status': 200,
                    'message': 'OK',
                    'value': {
                        'movies': [],
                        'tv_shows': []
                    }
                });
                return;
            } else if (req.params.batch === 'number-watched') {
                res.json({
                    'status': 200,
                    'message': 'OK',
                    'value': {
                        'movies': 876,
                        'episodes': 1020,
                        'tv_shows': 86
                    }
                });
                return;
            }

            setTimeout(function() {
                var date_diff = 0;
                if (req.params.batch == 0) {
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': {
                            'movies': [
                            {
                                'movie_id': '1',
                                'title': 'The Hunger Games',
                                'utc_timestamp': '1341508668',
                                'image': '504238b57b1e2.jpg'
                            },
                            {
                                "movie_id": "2380",
                                "title": "Thor: The Dark World",
                                "image": "52754703ecf68.jpg",
                                "watched_id": "15162",
                                "utc_timestamp": "1392067934"
                            },
                            {
                                "movie_id": "2827",
                                "title": "Ender's Game",
                                "image": "52a0f73d53161.jpg",
                                "watched_id": "14604",
                                "utc_timestamp": "1391378523"
                            },
                            {
                                "movie_id": "376",
                                "title": "Silver Linings Playbook",
                                "image": "5158f8370df31.jpg",
                                "watched_id": "14522",
                                "utc_timestamp": "1391293298"
                            },
                            {
                                "movie_id": "97",
                                "title": "Gladiator",
                                "image": "504238ddc03fa.jpg",
                                "watched_id": "14513",
                                "utc_timestamp": "1391284779"
                            },
                            {
                                "movie_id": "97",
                                "title": "Gladiator",
                                "image": "504238ddc03fa.jpg",
                                "watched_id": "14043",
                                "utc_timestamp": "1391120740"
                            },
                            {
                                "movie_id": "1",
                                "title": "The Hunger Games",
                                "image": "504238b58ea27.jpg",
                                "watched_id": "12810",
                                "utc_timestamp": "1390604020"
                            },
                            {
                                "movie_id": "2140",
                                "title": "Runner Runner",
                                "image": "526dce836274d.jpg",
                                "watched_id": "11985",
                                "utc_timestamp": "1390082432"
                            },
                            {
                                "movie_id": "1019",
                                "title": "Pacific Rim",
                                "image": "5212642ba69f5.jpg",
                                "watched_id": "11832",
                                "utc_timestamp": "1389909514"
                            },
                            {
                                "movie_id": "2842",
                                "title": "Escape Plan",
                                "image": "52a0f73283abc.jpg",
                                "watched_id": "11178",
                                "utc_timestamp": "1389389355"
                            },
                            {
                                "movie_id": "70",
                                "title": "Red",
                                "image": "504238d220b6b.jpg",
                                "watched_id": "10715",
                                "utc_timestamp": "1389128253"
                            },
                            {
                                "movie_id": "3143",
                                "title": "The Hobbit: The Desolation of Smaug",
                                "image": "52bf766a9db52.jpg",
                                "watched_id": "10192",
                                "utc_timestamp": "1388838337"
                            },
                            {
                                "movie_id": "3091",
                                "title": "Easy Money 3",
                                "image": "52b72afb22e64.jpg",
                                "watched_id": "9850",
                                "utc_timestamp": "1388700621"
                            },
                            {
                                "movie_id": "1261",
                                "title": "Riddick",
                                "image": "52326f4b51a21.jpg",
                                "watched_id": "9799",
                                "utc_timestamp": "1388613597"
                            },
                            {
                                "movie_id": "2673",
                                "title": "Don Jon",
                                "image": "528b9916c6250.jpg",
                                "watched_id": "9714",
                                "utc_timestamp": "1388441488"
                            },
                            {
                                "movie_id": "1193",
                                "title": "Kick-Ass 2",
                                "image": "5227cbdb31e2a.jpg",
                                "watched_id": "8734",
                                "utc_timestamp": "1386454473"
                            },
                            {
                                "movie_id": "1940",
                                "title": "Only God Forgives",
                                "image": "525ae902a5d1b.jpg",
                                "watched_id": "8690",
                                "utc_timestamp": "1386368084"
                            },
                            {
                                "movie_id": "1217",
                                "title": "The World's End",
                                "image": "522b33bb02dcd.jpg",
                                "watched_id": "8689",
                                "utc_timestamp": "1386367592"
                            },
                            {
                                "movie_id": "2569",
                                "title": "Prisoners",
                                "image": "5288a1b37de7a.jpg",
                                "watched_id": "8330",
                                "utc_timestamp": "1385852912"
                            },
                            {
                                "movie_id": "759",
                                "title": "Elysium",
                                "image": "520a7b2d1bf61.jpg",
                                "watched_id": "8313",
                                "utc_timestamp": "1385816913"
                            },
                            {
                                "movie_id": "759",
                                "title": "Elysium",
                                "image": "520a7b2d1bf61.jpg",
                                "watched_id": "8297",
                                "utc_timestamp": "1385764084"
                            },
                            {
                                "movie_id": "344",
                                "title": "Life of Pi",
                                "image": "512ae1e184607.jpg",
                                "watched_id": "7302",
                                "utc_timestamp": "1384688264"
                            },
                            {
                                "movie_id": "1262",
                                "title": "This Is the End",
                                "image": "523294cbf3df3.jpg",
                                "watched_id": "7267",
                                "utc_timestamp": "1384552810"
                            },
                            {
                                "movie_id": "758",
                                "title": "The Wolverine",
                                "image": "520a7b2c9ff85.jpg",
                                "watched_id": "6903",
                                "utc_timestamp": "1384035876"
                            },
                            ],
                            'tv_shows': [
                            {
                                "tv_id": "67",
                                "series_name": "Arrow",
                                "episode_id": "5929",
                                "episode_name": "Vertigo",
                                "image": "52aa88b7540ac.jpg",
                                "season": "1",
                                "episode": "12",
                                "watched_id": "325656",
                                "utc_timestamp": "1392241578"
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52333",
                                "episode_name": "III.",
                                "image": "525b1c95ec228.jpg",
                                "season": "1",
                                "episode": "3",
                                "watched_id": "325654",
                                "utc_timestamp": "1392241457"
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "38357",
                                "episode_name": "How Your Mother Met Me",
                                "image": "52e1e7a8e8907.jpg",
                                "season": "9",
                                "episode": "16",
                                "watched_id": "316664",
                                "utc_timestamp": "1392156280"
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "41172",
                                "episode_name": "Unpause",
                                "image": "52e0961fc8782.jpg",
                                "season": "9",
                                "episode": "15",
                                "watched_id": "314596",
                                "utc_timestamp": "1392136948"
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "38356",
                                "episode_name": "Slapsgiving 3: Slappointment in Slapmarra ",
                                "image": "52cccf9d66ac4.jpg",
                                "season": "9",
                                "episode": "14",
                                "watched_id": "308010",
                                "utc_timestamp": "1392055102"
                            },
                            {
                                "tv_id": "88",
                                "series_name": "Sherlock",
                                "episode_id": "7136",
                                "episode_name": "The Great Game",
                                "image": "50b22072c3c57.jpg",
                                "season": "1",
                                "episode": "3",
                                "watched_id": "305550",
                                "utc_timestamp": "1391982913"
                            },
                            {
                                "tv_id": "1246",
                                "series_name": "Helix",
                                "episode_id": "95944",
                                "episode_name": "The White Room",
                                "image": "52e48a9b65a0b.jpg",
                                "season": "1",
                                "episode": "5",
                                "watched_id": "300188",
                                "utc_timestamp": "1391635613"
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52332",
                                "episode_name": "II.",
                                "image": "525b1c94c6251.jpg",
                                "season": "1",
                                "episode": "2",
                                "watched_id": "291518",
                                "utc_timestamp": "1391464042"
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "16745",
                                "episode_name": "Bass Player Wanted",
                                "image": "52aa88b6f1b7d.jpg",
                                "season": "9",
                                "episode": "13",
                                "watched_id": "290010",
                                "utc_timestamp": "1391458921"
                            },
                            {
                                "tv_id": "8",
                                "series_name": "Family Guy",
                                "episode_id": "93526",
                                "episode_name": "Grimm Job",
                                "image": "52d3672fdcfb2.jpg",
                                "season": "12",
                                "episode": "10",
                                "watched_id": "282800",
                                "utc_timestamp": "1391108607"
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52331",
                                "episode_name": "I.",
                                "image": "525b1c9378db2.jpg",
                                "season": "1",
                                "episode": "1",
                                "watched_id": "275683",
                                "utc_timestamp": "1391034579"
                            }]
                        }
                    });
                }
                if (req.params.batch == 1) {
                    date_diff = -15724800;
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': {
                            'movies': [
                            {
                                'movie_id': '1',
                                'title': 'The Hunger Games',
                                'image': '504238b57b1e2.jpg',
                                "watched_id": "15162",
                                'utc_timestamp': '1341508668' - date_diff
                            },
                            {
                                "movie_id": "2380",
                                "title": "Thor: The Dark World",
                                "image": "52754703ecf68.jpg",
                                "watched_id": "15162",
                                "utc_timestamp": "1392067934" - date_diff
                            },
                            {
                                "movie_id": "2827",
                                "title": "Ender's Game",
                                "image": "52a0f73d53161.jpg",
                                "watched_id": "14604",
                                "utc_timestamp": "1391378523" - date_diff
                            },
                            {
                                "movie_id": "376",
                                "title": "Silver Linings Playbook",
                                "image": "5158f8370df31.jpg",
                                "watched_id": "14522",
                                "utc_timestamp": "1391293298" - date_diff
                            },
                            {
                                "movie_id": "97",
                                "title": "Gladiator",
                                "image": "504238ddc03fa.jpg",
                                "watched_id": "14513",
                                "utc_timestamp": "1391284779" - date_diff
                            }
                            ],
                            'tv_shows': [
                            {
                                "tv_id": "67",
                                "series_name": "Arrow",
                                "episode_id": "5929",
                                "episode_name": "Vertigo",
                                "image": "52aa88b7540ac.jpg",
                                "season": "1",
                                "episode": "12",
                                "watched_id": "325656",
                                "utc_timestamp": "1392241578" - date_diff
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52333",
                                "episode_name": "III.",
                                "image": "525b1c95ec228.jpg",
                                "season": "1",
                                "episode": "3",
                                "watched_id": "325654",
                                "utc_timestamp": "1392241457" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "38357",
                                "episode_name": "How Your Mother Met Me",
                                "image": "52e1e7a8e8907.jpg",
                                "season": "9",
                                "episode": "16",
                                "watched_id": "316664",
                                "utc_timestamp": "1392156280" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "41172",
                                "episode_name": "Unpause",
                                "image": "52e0961fc8782.jpg",
                                "season": "9",
                                "episode": "15",
                                "watched_id": "314596",
                                "utc_timestamp": "1392136948" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "38356",
                                "episode_name": "Slapsgiving 3: Slappointment in Slapmarra ",
                                "image": "52cccf9d66ac4.jpg",
                                "season": "9",
                                "episode": "14",
                                "watched_id": "308010",
                                "utc_timestamp": "1392055102" - date_diff
                            },
                            {
                                "tv_id": "88",
                                "series_name": "Sherlock",
                                "episode_id": "7136",
                                "episode_name": "The Great Game",
                                "image": "50b22072c3c57.jpg",
                                "season": "1",
                                "episode": "3",
                                "watched_id": "305550",
                                "utc_timestamp": "1391982913" - date_diff
                            },
                            {
                                "tv_id": "1246",
                                "series_name": "Helix",
                                "episode_id": "95944",
                                "episode_name": "The White Room",
                                "image": "52e48a9b65a0b.jpg",
                                "season": "1",
                                "episode": "5",
                                "watched_id": "300188",
                                "utc_timestamp": "1391635613" - date_diff
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52332",
                                "episode_name": "II.",
                                "image": "525b1c94c6251.jpg",
                                "season": "1",
                                "episode": "2",
                                "watched_id": "291518",
                                "utc_timestamp": "1391464042" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "16745",
                                "episode_name": "Bass Player Wanted",
                                "image": "52aa88b6f1b7d.jpg",
                                "season": "9",
                                "episode": "13",
                                "watched_id": "290010",
                                "utc_timestamp": "1391458921" - date_diff
                            },
                            {
                                "tv_id": "8",
                                "series_name": "Family Guy",
                                "episode_id": "93526",
                                "episode_name": "Grimm Job",
                                "image": "52d3672fdcfb2.jpg",
                                "season": "12",
                                "episode": "10",
                                "watched_id": "282800",
                                "utc_timestamp": "1391108607" - date_diff
                            }
                            ]
                        }
                    });
                }
                if (req.params.batch == 2) {
                    date_diff = -31449600;
                    res.json({
                        'status': 200,
                        'message': 'OK',
                        'value': {
                            'movies': [
                            {
                                'movie_id': '1',
                                'title': 'The Hunger Games',
                                'image': '504238b57b1e2.jpg',
                                "watched_id": "15162",
                                'utc_timestamp': '1341508668' - date_diff
                            },
                            {
                                "movie_id": "2380",
                                "title": "Thor: The Dark World",
                                "image": "52754703ecf68.jpg",
                                "watched_id": "15162",
                                "utc_timestamp": "1392067934" - date_diff
                            },
                            {
                                "movie_id": "2827",
                                "title": "Ender's Game",
                                "image": "52a0f73d53161.jpg",
                                "watched_id": "14604",
                                "utc_timestamp": "1391378523" - date_diff
                            },
                            {
                                "movie_id": "376",
                                "title": "Silver Linings Playbook",
                                "image": "5158f8370df31.jpg",
                                "watched_id": "14522",
                                "utc_timestamp": "1391293298" - date_diff
                            },
                            {
                                "movie_id": "97",
                                "title": "Gladiator",
                                "image": "504238ddc03fa.jpg",
                                "watched_id": "14513",
                                "utc_timestamp": "1391284779" - date_diff
                            }
                            ],
                            'tv_shows': [
                            {
                                "tv_id": "67",
                                "series_name": "Arrow",
                                "episode_id": "5929",
                                "episode_name": "Vertigo",
                                "image": "52aa88b7540ac.jpg",
                                "season": "1",
                                "episode": "12",
                                "watched_id": "325656",
                                "utc_timestamp": "1392241578" - date_diff
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52333",
                                "episode_name": "III.",
                                "image": "525b1c95ec228.jpg",
                                "season": "1",
                                "episode": "3",
                                "watched_id": "325654",
                                "utc_timestamp": "1392241457" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "38357",
                                "episode_name": "How Your Mother Met Me",
                                "image": "52e1e7a8e8907.jpg",
                                "season": "9",
                                "episode": "16",
                                "watched_id": "316664",
                                "utc_timestamp": "1392156280" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "41172",
                                "episode_name": "Unpause",
                                "image": "52e0961fc8782.jpg",
                                "season": "9",
                                "episode": "15",
                                "watched_id": "314596",
                                "utc_timestamp": "1392136948" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "38356",
                                "episode_name": "Slapsgiving 3: Slappointment in Slapmarra ",
                                "image": "52cccf9d66ac4.jpg",
                                "season": "9",
                                "episode": "14",
                                "watched_id": "308010",
                                "utc_timestamp": "1392055102" - date_diff
                            },
                            {
                                "tv_id": "88",
                                "series_name": "Sherlock",
                                "episode_id": "7136",
                                "episode_name": "The Great Game",
                                "image": "50b22072c3c57.jpg",
                                "season": "1",
                                "episode": "3",
                                "watched_id": "305550",
                                "utc_timestamp": "1391982913" - date_diff
                            },
                            {
                                "tv_id": "1246",
                                "series_name": "Helix",
                                "episode_id": "95944",
                                "episode_name": "The White Room",
                                "image": "52e48a9b65a0b.jpg",
                                "season": "1",
                                "episode": "5",
                                "watched_id": "300188",
                                "utc_timestamp": "1391635613" - date_diff
                            },
                            {
                                "tv_id": "703",
                                "series_name": "Black Sails",
                                "episode_id": "52332",
                                "episode_name": "II.",
                                "image": "525b1c94c6251.jpg",
                                "season": "1",
                                "episode": "2",
                                "watched_id": "291518",
                                "utc_timestamp": "1391464042" - date_diff
                            },
                            {
                                "tv_id": "14",
                                "series_name": "How I Met Your Mother",
                                "episode_id": "16745",
                                "episode_name": "Bass Player Wanted",
                                "image": "52aa88b6f1b7d.jpg",
                                "season": "9",
                                "episode": "13",
                                "watched_id": "290010",
                                "utc_timestamp": "1391458921" - date_diff
                            },
                            {
                                "tv_id": "8",
                                "series_name": "Family Guy",
                                "episode_id": "93526",
                                "episode_name": "Grimm Job",
                                "image": "52d3672fdcfb2.jpg",
                                "season": "12",
                                "episode": "10",
                                "watched_id": "282800",
                                "utc_timestamp": "1391108607" - date_diff
                            }
                            ]
                        }
                    });
                }
            }, 1000);
        });
    }
};
