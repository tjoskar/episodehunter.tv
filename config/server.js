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
                        "seriesID": "24",
                        "id": null,
                        "seriesName": "The Walking Dead",
                        "airDate": null,
                        "season": null,
                        "episode": null,
                        "episodeName": null,
                        "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "168",
                      "id": null,
                      "seriesName": "The Newsroom (2012)",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "17",
                      "id": null,
                      "seriesName": "Sons of Anarchy",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "528",
                      "id": null,
                      "seriesName": "The Blacklist",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "12",
                      "id": null,
                      "seriesName": "Hell on Wheels",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "20",
                      "id": null,
                      "seriesName": "The Big Bang Theory",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "160",
                      "id": null,
                      "seriesName": "Marvel's Agents of S.H.I.E.L.D.",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": ""
                    },
                    {
                      "seriesID": "67",
                      "id": null,
                      "seriesName": "Arrow",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "159",
                      "id": null,
                      "seriesName": "Ray Donovan",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "144",
                      "id": null,
                      "seriesName": "Vikings",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "158",
                      "id": null,
                      "seriesName": "Under The Dome",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "26",
                      "id": null,
                      "seriesName": "True Blood",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "8",
                      "id": null,
                      "seriesName": "Family Guy",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "165",
                      "id": null,
                      "seriesName": "Orange Is the New Black",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "23",
                      "id": null,
                      "seriesName": "The Vampire Diaries",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "10",
                      "id": null,
                      "seriesName": "Game of Thrones",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "139",
                      "id": null,
                      "seriesName": "Suits",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "52",
                      "id": null,
                      "seriesName": "Solsidan",
                      "airDate": null,
                      "season": null,
                      "episode": null,
                      "episodeName": null,
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "74",
                      "id": "46266",
                      "seriesName": "Homeland",
                      "airDate": getFutureDate(1),
                      "season": "3",
                      "episode": "12",
                      "episodeName": "TBA",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "14",
                      "id": "16745",
                      "seriesName": "How I Met Your Mother",
                      "airDate": getFutureDate(2),
                      "season": "9",
                      "episode": "13",
                      "episodeName": "Bass Player Wanted",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "106",
                      "id": "39390",
                      "seriesName": "Justified",
                      "airDate": getFutureDate(3),
                      "season": "5",
                      "episode": "1",
                      "episodeName": "A Murder Of Crowes",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "108",
                      "id": "14038",
                      "seriesName": "Banshee",
                      "airDate": getFutureDate(7),
                      "season": "2",
                      "episode": "1",
                      "episodeName": "Armies Of One",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "107",
                      "id": "52557",
                      "seriesName": "The Following",
                      "airDate": getFutureDate(7),
                      "season": "2",
                      "episode": "1",
                      "episodeName": "Resurrection",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "110",
                      "id": "77648",
                      "seriesName": "The Americans (2013)",
                      "airDate": getFutureDate(8),
                      "season": "2",
                      "episode": "1",
                      "episodeName": "Comrades",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "111",
                      "id": "39130",
                      "seriesName": "House Of Cards (2013)",
                      "airDate": getFutureDate(8),
                      "season": "2",
                      "episode": "1",
                      "episodeName": "TBA",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "5",
                      "id": "37961",
                      "seriesName": "Continuum",
                      "airDate": getFutureDate(100),
                      "season": "3",
                      "episode": "1",
                      "episodeName": "TBA",
                      "poster": "525b1c9cf2968.jpg"
                    },
                    {
                      "seriesID": "7",
                      "id": "37960",
                      "seriesName": "Falling Skies",
                      "airDate": getFutureDate(121),
                      "season": "4",
                      "episode": "1",
                      "episodeName": "Ghost in the Machine",
                      "poster": "525b1c9cf2968.jpg"
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
                          'id': '1',
                          'title': 'The Hunger Games',
                          'progress': '0.7',
                          'poster': '504238b57b1e2.jpg'
                        }, {
                          'id': '1178',
                          'title': 'The Hunger Games',
                          'progress': '0.3',
                          'poster': '52261a42c6e5c.jpg'
                        }
                    ],
                    'tv_shows': [
                        {
                          'series_id': '24',
                          'series_name': 'The Walking Dead',
                          'progress': '0.4',
                          'poster': '525b1c9cf2968.jpg'
                        },{
                          'series_id': '24',
                          'series_name': 'Sherlock',
                          'progress': '0.2',
                          'poster': '50b220731c0b4.jpg'
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
                                'series_id': '24',
                                'series_name': 'The Walking Dead',
                                'views': '1027',
                                'poster': '525b1c9cf2968.jpg',
                                'order': '1'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '509',
                                'poster': '50b220731c0b4.jpg',
                                'order': '2'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1008',
                                'poster': '50b220731c0b4.jpg',
                                'order': '3'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1123',
                                'poster': '50b220731c0b4.jpg',
                                'order': '4'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '423',
                                'poster': '50b220731c0b4.jpg',
                                'order': '5'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '987',
                                'poster': '50b220731c0b4.jpg',
                                'order': '6'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '223',
                                'poster': '50b220731c0b4.jpg',
                                'order': '7'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '123',
                                'poster': '50b220731c0b4.jpg',
                                'order': '8'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '58',
                                'poster': '50b220731c0b4.jpg',
                                'order': '9'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '79',
                                'poster': '50b220731c0b4.jpg',
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
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1027',
                                'poster': '525b1c9cf2968.jpg',
                                'order': '1'
                            },{
                                'series_id': '24',
                                'series_name': 'The Walking Dead',
                                'views': '509',
                                'poster': '504241d7e6a13-2.jpg',
                                'order': '2'
                            },{
                                'series_id': '24',
                                'series_name': 'Game of thrones',
                                'views': '1008',
                                'poster': '50b220731c0b4.jpg',
                                'order': '3'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '1123',
                                'poster': '50b220731c0b4.jpg',
                                'order': '4'
                            },{
                                'series_id': '24',
                                'series_name': 'Sherlock',
                                'views': '423',
                                'poster': '504241d7e6a13-2.jpg',
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
                                'poster': '520a7b2c85e78.jpg',
                                'order': '1'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '509',
                                'poster': '527d71a2c065c.jpg',
                                'order': '2'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '1008',
                                'poster': '527d71a2c065c.jpg',
                                'order': '3'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '1123',
                                'poster': '527d71a2c065c.jpg',
                                'order': '4'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '423',
                                'poster': '527d71a2c065c.jpg',
                                'order': '5'
                            },{
                                'id': '24',
                                'title': 'Escape Plan',
                                'views': '987',
                                'poster': '527d71a2c065c.jpg',
                                'order': '6'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '223',
                                'poster': '52261a42c6e5c.jpg',
                                'order': '7'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '123',
                                'poster': '52261a42c6e5c.jpg',
                                'order': '8'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '58',
                                'poster': '52261a42c6e5c.jpg',
                                'order': '9'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '79',
                                'poster': '52261a42c6e5c.jpg',
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
                                'poster': '52261a42c6e5c.jpg',
                                'order': '1'
                            },{
                                'id': '24',
                                'title': 'Prisoners',
                                'views': '509',
                                'poster': '5288a1b355181.jpg',
                                'order': '2'
                            },{
                                'id': '24',
                                'title': 'Oblivion',
                                'views': '1008',
                                'poster': '51f0984449972.jpg',
                                'order': '3'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '1123',
                                'poster': '52261a42c6e5c.jpg',
                                'order': '4'
                            },{
                                'id': '24',
                                'title': 'World War Z',
                                'views': '423',
                                'poster': '52261a42c6e5c.jpg',
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
                                'id': '1',
                                'title': 'The Hunger Games',
                                'utcTimestamp': '1341508668',
                                'thumbnail': '504238b57b1e2.jpg',
                                'watchedID': '15162',
                            },
                            {
                                "id": "2380",
                                "title": "Thor: The Dark World",
                                "thumbnail": "52754703ecf68.jpg",
                                "watchedID": "15162",
                                "utcTimestamp": "1392067934"
                            },
                            {
                                "id": "2827",
                                "title": "Ender's Game",
                                "thumbnail": "52a0f73d53161.jpg",
                                "watchedID": "14604",
                                "utcTimestamp": "1391378523"
                            },
                            {
                                "id": "376",
                                "title": "Silver Linings Playbook",
                                "thumbnail": "5158f8370df31.jpg",
                                "watchedID": "14522",
                                "utcTimestamp": "1391293298"
                            },
                            {
                                "id": "97",
                                "title": "Gladiator",
                                "thumbnail": "504238ddc03fa.jpg",
                                "watchedID": "14513",
                                "utcTimestamp": "1391284779"
                            },
                            {
                                "id": "97",
                                "title": "Gladiator",
                                "thumbnail": "504238ddc03fa.jpg",
                                "watchedID": "14043",
                                "utcTimestamp": "1391120740"
                            },
                            {
                                "id": "1",
                                "title": "The Hunger Games",
                                "thumbnail": "504238b58ea27.jpg",
                                "watchedID": "12810",
                                "utcTimestamp": "1390604020"
                            },
                            {
                                "id": "2140",
                                "title": "Runner Runner",
                                "thumbnail": "526dce836274d.jpg",
                                "watchedID": "11985",
                                "utcTimestamp": "1390082432"
                            },
                            {
                                "id": "1019",
                                "title": "Pacific Rim",
                                "thumbnail": "5212642ba69f5.jpg",
                                "watchedID": "11832",
                                "utcTimestamp": "1389909514"
                            },
                            {
                                "id": "2842",
                                "title": "Escape Plan",
                                "thumbnail": "52a0f73283abc.jpg",
                                "watchedID": "11178",
                                "utcTimestamp": "1389389355"
                            },
                            {
                                "id": "70",
                                "title": "Red",
                                "thumbnail": "504238d220b6b.jpg",
                                "watchedID": "10715",
                                "utcTimestamp": "1389128253"
                            },
                            {
                                "id": "3143",
                                "title": "The Hobbit: The Desolation of Smaug",
                                "thumbnail": "52bf766a9db52.jpg",
                                "watchedID": "10192",
                                "utcTimestamp": "1388838337"
                            },
                            {
                                "id": "3091",
                                "title": "Easy Money 3",
                                "thumbnail": "52b72afb22e64.jpg",
                                "watchedID": "9850",
                                "utcTimestamp": "1388700621"
                            },
                            {
                                "id": "1261",
                                "title": "Riddick",
                                "thumbnail": "52326f4b51a21.jpg",
                                "watchedID": "9799",
                                "utcTimestamp": "1388613597"
                            },
                            {
                                "id": "2673",
                                "title": "Don Jon",
                                "thumbnail": "528b9916c6250.jpg",
                                "watchedID": "9714",
                                "utcTimestamp": "1388441488"
                            },
                            {
                                "id": "1193",
                                "title": "Kick-Ass 2",
                                "thumbnail": "5227cbdb31e2a.jpg",
                                "watchedID": "8734",
                                "utcTimestamp": "1386454473"
                            },
                            {
                                "id": "1940",
                                "title": "Only God Forgives",
                                "thumbnail": "525ae902a5d1b.jpg",
                                "watchedID": "8690",
                                "utcTimestamp": "1386368084"
                            },
                            {
                                "id": "1217",
                                "title": "The World's End",
                                "thumbnail": "522b33bb02dcd.jpg",
                                "watchedID": "8689",
                                "utcTimestamp": "1386367592"
                            },
                            {
                                "id": "2569",
                                "title": "Prisoners",
                                "thumbnail": "5288a1b37de7a.jpg",
                                "watchedID": "8330",
                                "utcTimestamp": "1385852912"
                            },
                            {
                                "id": "759",
                                "title": "Elysium",
                                "thumbnail": "520a7b2d1bf61.jpg",
                                "watchedID": "8313",
                                "utcTimestamp": "1385816913"
                            },
                            {
                                "id": "759",
                                "title": "Elysium",
                                "thumbnail": "520a7b2d1bf61.jpg",
                                "watchedID": "8297",
                                "utcTimestamp": "1385764084"
                            },
                            {
                                "id": "344",
                                "title": "Life of Pi",
                                "thumbnail": "512ae1e184607.jpg",
                                "watchedID": "7302",
                                "utcTimestamp": "1384688264"
                            },
                            {
                                "id": "1262",
                                "title": "This Is the End",
                                "thumbnail": "523294cbf3df3.jpg",
                                "watchedID": "7267",
                                "utcTimestamp": "1384552810"
                            },
                            {
                                "id": "758",
                                "title": "The Wolverine",
                                "thumbnail": "520a7b2c9ff85.jpg",
                                "watchedID": "6903",
                                "utcTimestamp": "1384035876"
                            },
                            ],
                            'tv_shows': [
                            {
                                "seriesID": "67",
                                "seriesName": "Arrow",
                                "id": "5929",
                                "episodeName": "Vertigo",
                                "thumbnail": "52aa88b7540ac.jpg",
                                "season": "1",
                                "episode": "12",
                                "watchedID": "325656",
                                "utcTimestamp": "1392241578"
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52333",
                                "episodeName": "III.",
                                "thumbnail": "525b1c95ec228.jpg",
                                "season": "1",
                                "episode": "3",
                                "watchedID": "325654",
                                "utcTimestamp": "1392241457"
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "38357",
                                "episodeName": "How Your Mother Met Me",
                                "thumbnail": "52e1e7a8e8907.jpg",
                                "season": "9",
                                "episode": "16",
                                "watchedID": "316664",
                                "utcTimestamp": "1392156280"
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "41172",
                                "episodeName": "Unpause",
                                "thumbnail": "52e0961fc8782.jpg",
                                "season": "9",
                                "episode": "15",
                                "watchedID": "314596",
                                "utcTimestamp": "1392136948"
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "38356",
                                "episodeName": "Slapsgiving 3: Slappointment in Slapmarra ",
                                "thumbnail": "52cccf9d66ac4.jpg",
                                "season": "9",
                                "episode": "14",
                                "watchedID": "308010",
                                "utcTimestamp": "1392055102"
                            },
                            {
                                "seriesID": "88",
                                "seriesName": "Sherlock",
                                "id": "7136",
                                "episodeName": "The Great Game",
                                "thumbnail": "50b22072c3c57.jpg",
                                "season": "1",
                                "episode": "3",
                                "watchedID": "305550",
                                "utcTimestamp": "1391982913"
                            },
                            {
                                "seriesID": "1246",
                                "seriesName": "Helix",
                                "id": "95944",
                                "episodeName": "The White Room",
                                "thumbnail": "52e48a9b65a0b.jpg",
                                "season": "1",
                                "episode": "5",
                                "watchedID": "300188",
                                "utcTimestamp": "1391635613"
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52332",
                                "episodeName": "II.",
                                "thumbnail": "525b1c94c6251.jpg",
                                "season": "1",
                                "episode": "2",
                                "watchedID": "291518",
                                "utcTimestamp": "1391464042"
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "16745",
                                "episodeName": "Bass Player Wanted",
                                "thumbnail": "52aa88b6f1b7d.jpg",
                                "season": "9",
                                "episode": "13",
                                "watchedID": "290010",
                                "utcTimestamp": "1391458921"
                            },
                            {
                                "seriesID": "8",
                                "seriesName": "Family Guy",
                                "id": "93526",
                                "episodeName": "Grimm Job",
                                "thumbnail": "52d3672fdcfb2.jpg",
                                "season": "12",
                                "episode": "10",
                                "watchedID": "282800",
                                "utcTimestamp": "1391108607"
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52331",
                                "episodeName": "I.",
                                "thumbnail": "525b1c9378db2.jpg",
                                "season": "1",
                                "episode": "1",
                                "watchedID": "275683",
                                "utcTimestamp": "1391034579"
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
                                'id': '1',
                                'title': 'The Hunger Games',
                                'thumbnail': '504238b57b1e2.jpg',
                                "watchedID": "15162",
                                'utcTimestamp': '1341508668' - date_diff
                            },
                            {
                                "id": "2380",
                                "title": "Thor: The Dark World",
                                "thumbnail": "52754703ecf68.jpg",
                                "watchedID": "15162",
                                "utcTimestamp": "1392067934" - date_diff
                            },
                            {
                                "id": "2827",
                                "title": "Ender's Game",
                                "thumbnail": "52a0f73d53161.jpg",
                                "watchedID": "14604",
                                "utcTimestamp": "1391378523" - date_diff
                            },
                            {
                                "id": "376",
                                "title": "Silver Linings Playbook",
                                "thumbnail": "5158f8370df31.jpg",
                                "watchedID": "14522",
                                "utcTimestamp": "1391293298" - date_diff
                            },
                            {
                                "id": "97",
                                "title": "Gladiator",
                                "thumbnail": "504238ddc03fa.jpg",
                                "watchedID": "14513",
                                "utcTimestamp": "1391284779" - date_diff
                            }
                            ],
                            'tv_shows': [
                            {
                                "seriesID": "67",
                                "seriesName": "Arrow",
                                "id": "5929",
                                "episodeName": "Vertigo",
                                "thumbnail": "52aa88b7540ac.jpg",
                                "season": "1",
                                "episode": "12",
                                "watchedID": "325656",
                                "utcTimestamp": "1392241578" - date_diff
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52333",
                                "episodeName": "III.",
                                "thumbnail": "525b1c95ec228.jpg",
                                "season": "1",
                                "episode": "3",
                                "watchedID": "325654",
                                "utcTimestamp": "1392241457" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "38357",
                                "episodeName": "How Your Mother Met Me",
                                "thumbnail": "52e1e7a8e8907.jpg",
                                "season": "9",
                                "episode": "16",
                                "watchedID": "316664",
                                "utcTimestamp": "1392156280" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "41172",
                                "episodeName": "Unpause",
                                "thumbnail": "52e0961fc8782.jpg",
                                "season": "9",
                                "episode": "15",
                                "watchedID": "314596",
                                "utcTimestamp": "1392136948" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "38356",
                                "episodeName": "Slapsgiving 3: Slappointment in Slapmarra ",
                                "thumbnail": "52cccf9d66ac4.jpg",
                                "season": "9",
                                "episode": "14",
                                "watchedID": "308010",
                                "utcTimestamp": "1392055102" - date_diff
                            },
                            {
                                "seriesID": "88",
                                "seriesName": "Sherlock",
                                "id": "7136",
                                "episodeName": "The Great Game",
                                "thumbnail": "50b22072c3c57.jpg",
                                "season": "1",
                                "episode": "3",
                                "watchedID": "305550",
                                "utcTimestamp": "1391982913" - date_diff
                            },
                            {
                                "seriesID": "1246",
                                "seriesName": "Helix",
                                "id": "95944",
                                "episodeName": "The White Room",
                                "thumbnail": "52e48a9b65a0b.jpg",
                                "season": "1",
                                "episode": "5",
                                "watchedID": "300188",
                                "utcTimestamp": "1391635613" - date_diff
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52332",
                                "episodeName": "II.",
                                "thumbnail": "525b1c94c6251.jpg",
                                "season": "1",
                                "episode": "2",
                                "watchedID": "291518",
                                "utcTimestamp": "1391464042" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "16745",
                                "episodeName": "Bass Player Wanted",
                                "thumbnail": "52aa88b6f1b7d.jpg",
                                "season": "9",
                                "episode": "13",
                                "watchedID": "290010",
                                "utcTimestamp": "1391458921" - date_diff
                            },
                            {
                                "seriesID": "8",
                                "seriesName": "Family Guy",
                                "id": "93526",
                                "episodeName": "Grimm Job",
                                "thumbnail": "52d3672fdcfb2.jpg",
                                "season": "12",
                                "episode": "10",
                                "watchedID": "282800",
                                "utcTimestamp": "1391108607" - date_diff
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
                                'id': '1',
                                'title': 'The Hunger Games',
                                'thumbnail': '504238b57b1e2.jpg',
                                "watchedID": "15162",
                                'utcTimestamp': '1341508668' - date_diff
                            },
                            {
                                "id": "2380",
                                "title": "Thor: The Dark World",
                                "thumbnail": "52754703ecf68.jpg",
                                "watchedID": "15162",
                                "utcTimestamp": "1392067934" - date_diff
                            },
                            {
                                "id": "2827",
                                "title": "Ender's Game",
                                "thumbnail": "52a0f73d53161.jpg",
                                "watchedID": "14604",
                                "utcTimestamp": "1391378523" - date_diff
                            },
                            {
                                "id": "376",
                                "title": "Silver Linings Playbook",
                                "thumbnail": "5158f8370df31.jpg",
                                "watchedID": "14522",
                                "utcTimestamp": "1391293298" - date_diff
                            },
                            {
                                "id": "97",
                                "title": "Gladiator",
                                "thumbnail": "504238ddc03fa.jpg",
                                "watchedID": "14513",
                                "utcTimestamp": "1391284779" - date_diff
                            }
                            ],
                            'tv_shows': [
                            {
                                "seriesID": "67",
                                "seriesName": "Arrow",
                                "id": "5929",
                                "episodeName": "Vertigo",
                                "thumbnail": "52aa88b7540ac.jpg",
                                "season": "1",
                                "episode": "12",
                                "watchedID": "325656",
                                "utcTimestamp": "1392241578" - date_diff
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52333",
                                "episodeName": "III.",
                                "thumbnail": "525b1c95ec228.jpg",
                                "season": "1",
                                "episode": "3",
                                "watchedID": "325654",
                                "utcTimestamp": "1392241457" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "38357",
                                "episodeName": "How Your Mother Met Me",
                                "thumbnail": "52e1e7a8e8907.jpg",
                                "season": "9",
                                "episode": "16",
                                "watchedID": "316664",
                                "utcTimestamp": "1392156280" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "41172",
                                "episodeName": "Unpause",
                                "thumbnail": "52e0961fc8782.jpg",
                                "season": "9",
                                "episode": "15",
                                "watchedID": "314596",
                                "utcTimestamp": "1392136948" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "38356",
                                "episodeName": "Slapsgiving 3: Slappointment in Slapmarra ",
                                "thumbnail": "52cccf9d66ac4.jpg",
                                "season": "9",
                                "episode": "14",
                                "watchedID": "308010",
                                "utcTimestamp": "1392055102" - date_diff
                            },
                            {
                                "seriesID": "88",
                                "seriesName": "Sherlock",
                                "id": "7136",
                                "episodeName": "The Great Game",
                                "thumbnail": "50b22072c3c57.jpg",
                                "season": "1",
                                "episode": "3",
                                "watchedID": "305550",
                                "utcTimestamp": "1391982913" - date_diff
                            },
                            {
                                "seriesID": "1246",
                                "seriesName": "Helix",
                                "id": "95944",
                                "episodeName": "The White Room",
                                "thumbnail": "52e48a9b65a0b.jpg",
                                "season": "1",
                                "episode": "5",
                                "watchedID": "300188",
                                "utcTimestamp": "1391635613" - date_diff
                            },
                            {
                                "seriesID": "703",
                                "seriesName": "Black Sails",
                                "id": "52332",
                                "episodeName": "II.",
                                "thumbnail": "525b1c94c6251.jpg",
                                "season": "1",
                                "episode": "2",
                                "watchedID": "291518",
                                "utcTimestamp": "1391464042" - date_diff
                            },
                            {
                                "seriesID": "14",
                                "seriesName": "How I Met Your Mother",
                                "id": "16745",
                                "episodeName": "Bass Player Wanted",
                                "thumbnail": "52aa88b6f1b7d.jpg",
                                "season": "9",
                                "episode": "13",
                                "watchedID": "290010",
                                "utcTimestamp": "1391458921" - date_diff
                            },
                            {
                                "seriesID": "8",
                                "seriesName": "Family Guy",
                                "id": "93526",
                                "episodeName": "Grimm Job",
                                "thumbnail": "52d3672fdcfb2.jpg",
                                "season": "12",
                                "episode": "10",
                                "watchedID": "282800",
                                "utcTimestamp": "1391108607" - date_diff
                            }
                            ]
                        }
                    });
                }
            }, 1000);
        });
    }
};
