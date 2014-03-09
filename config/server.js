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
    app.post('/api/tv/upcoming', function(req, res) {
        res.json({
                'status': 200,
                'msg': 'OK',
                'value':
                    [{
                      "showid": "24",
                      "episodeid": null,
                      "showname": "The Walking Dead",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "504242b7ca765.jpg"
                    },
                    {
                      "showid": "168",
                      "episodeid": null,
                      "showname": "The Newsroom (2012)",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "5203eb438c731.jpg"
                    },
                    {
                      "showid": "17",
                      "episodeid": null,
                      "showname": "Sons of Anarchy",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "5042422b31a72.jpg"
                    },
                    {
                      "showid": "528",
                      "episodeid": null,
                      "showname": "The Blacklist",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "52415b9d98758.jpg"
                    },
                    {
                      "showid": "12",
                      "episodeid": null,
                      "showname": "Hell on Wheels",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "504241ddb05a1.jpg"
                    },
                    {
                      "showid": "20",
                      "episodeid": null,
                      "showname": "The Big Bang Theory",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "5042424330b51.jpg"
                    },
                    {
                      "showid": "160",
                      "episodeid": null,
                      "showname": "Marvel's Agents of S.H.I.E.L.D.",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "51aba6515d049.jpg"
                    },
                    {
                      "showid": "67",
                      "episodeid": null,
                      "showname": "Arrow",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "506b560ddfb55.jpg"
                    },
                    {
                      "showid": "159",
                      "episodeid": null,
                      "showname": "Ray Donovan",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "259866-5.jpg"
                    },
                    {
                      "showid": "144",
                      "episodeid": null,
                      "showname": "Vikings",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "512ae1e0c63e0.jpg"
                    },
                    {
                      "showid": "158",
                      "episodeid": null,
                      "showname": "Under The Dome",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "51aba64f781e1.jpg"
                    },
                    {
                      "showid": "26",
                      "episodeid": null,
                      "showname": "True Blood",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "504242c5e6610.jpg"
                    },
                    {
                      "showid": "8",
                      "episodeid": null,
                      "showname": "Family Guy",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "504241ce81356.jpg"
                    },
                    {
                      "showid": "165",
                      "episodeid": null,
                      "showname": "Orange Is the New Black",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "5203e5a16ffd4.jpg"
                    },
                    {
                      "showid": "23",
                      "episodeid": null,
                      "showname": "The Vampire Diaries",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "504242af75cd7.jpg"
                    },
                    {
                      "showid": "10",
                      "episodeid": null,
                      "showname": "Game of Thrones",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "504241d8bbe1d-1.jpg"
                    },
                    {
                      "showid": "139",
                      "episodeid": null,
                      "showname": "Suits",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "5122f8cab6cc9.jpg"
                    },
                    {
                      "showid": "52",
                      "episodeid": null,
                      "showname": "Solsidan",
                      "timestamp": null,
                      "season": null,
                      "episode": null,
                      "episodename": null,
                      "image": "5060d41ee3959.jpg"
                    },
                    {
                      "showid": "74",
                      "episodeid": "46266",
                      "showname": "Homeland",
                      "timestamp": getFutureDate(1),
                      "season": "3",
                      "episode": "12",
                      "episodename": "TBA",
                      "image": "50b21fdebd663.jpg"
                    },
                    {
                      "showid": "14",
                      "episodeid": "16745",
                      "showname": "How I Met Your Mother",
                      "timestamp": getFutureDate(2),
                      "season": "9",
                      "episode": "13",
                      "episodename": "Bass Player Wanted",
                      "image": "5042420779317.jpg"
                    },
                    {
                      "showid": "106",
                      "episodeid": "39390",
                      "showname": "Justified",
                      "timestamp": getFutureDate(3),
                      "season": "5",
                      "episode": "1",
                      "episodename": "A Murder Of Crowes",
                      "image": "50bb4f6c9ce25.jpg"
                    },
                    {
                      "showid": "108",
                      "episodeid": "14038",
                      "showname": "Banshee",
                      "timestamp": getFutureDate(7),
                      "season": "2",
                      "episode": "1",
                      "episodename": "Armies Of One",
                      "image": "50e1526c80642.jpg"
                    },
                    {
                      "showid": "107",
                      "episodeid": "52557",
                      "showname": "The Following",
                      "timestamp": getFutureDate(7),
                      "season": "2",
                      "episode": "1",
                      "episodename": "Resurrection",
                      "image": "50cdf863dfd5b.jpg"
                    },
                    {
                      "showid": "110",
                      "episodeid": "77648",
                      "showname": "The Americans (2013)",
                      "timestamp": getFutureDate(8),
                      "season": "2",
                      "episode": "1",
                      "episodename": "Comrades",
                      "image": "50e3b0f897b9b.jpg"
                    },
                    {
                      "showid": "111",
                      "episodeid": "39130",
                      "showname": "House Of Cards (2013)",
                      "timestamp": getFutureDate(8),
                      "season": "2",
                      "episode": "1",
                      "episodename": "TBA",
                      "image": "50e3b0f9db0eb.jpg"
                    },
                    {
                      "showid": "5",
                      "episodeid": "37961",
                      "showname": "Continuum",
                      "timestamp": getFutureDate(100),
                      "season": "3",
                      "episode": "1",
                      "episodename": "TBA",
                      "image": "504241956e53f.jpg"
                    },
                    {
                      "showid": "7",
                      "episodeid": "37960",
                      "showname": "Falling Skies",
                      "timestamp": getFutureDate(121),
                      "season": "4",
                      "episode": "1",
                      "episodename": "Ghost in the Machine",
                      "image": "504241a7afd0f.jpg"
                    }]
                });
    });
  }
};
