/**
 * Generate a random integer between
 * lower and uper
 * @param {integer} lower
 * @param {integer} uper
 * @return {integer}
 */
var randomInt = function(lower, uper) {
    return Math.floor((Math.random() * (Math.abs(uper) + Math.abs(lower))) - Math.abs(lower) + 1);
};

/**
 * Generate random date
 * @return {!Date}
 */
var randomDate = function() {
    var now = new Date();
    var past = now.getTime() + (randomInt(-3, 14) * 86400000);
    now.setTime(past);
    return now;
};

/**
 * Return a random value from an array
 * @param {Array} a
 * @return {mixed}
 */
var randomValueFromArray = function(a) {
    return a[Math.floor(Math.random() * a.length)];
};

var faker = {
    data: {
        episodeTitles: [
            'Pretty Much Dead Already',
            'The End',
            'You Win or You Die',
            'To the Future!',
            'Goodbye, Michael',
            'Winter Is Coming',
            'Surprise, Motherfucker!',
            'The Dark... Whatever',
            'I am the one who knocks',
            'This Is the Way the World Ends'
        ],
        showTitles: [
            'Game of Thrones',
            'The Walking Dead',
            'Dexter',
            'Breaking Bad',
            'Lost'
        ],
        fanarts: [
            'http://img.episodehunter.tv/serie/fanart/504242b7ca765.jpg', // TWD
            'http://img.episodehunter.tv/serie/fanart/504241d8bbe1d-1.jpg', // GOT
            'http://img.episodehunter.tv/serie/fanart/504241a3587b9-1.jpg', // Dexter
            'http://img.episodehunter.tv/serie/fanart/504241832a7d3.jpg', // BB
            'http://img.episodehunter.tv/serie/fanart/5042421e66688.jpg' // Lost
        ]
    },

    episodeId: function() {
        return randomInt(50, 1000);
    },

    showId: function() {
        return randomInt(1, 100);
    },

    season: function() {
        return randomInt(1, 5);
    },

    episode: function() {
        return randomInt(1, 10);
    },

    airs: function() {
        return randomDate().toISOString();
    },

    year: function() {
        return randomInt(2000, 2015);
    },

    episodeTitle: function() {
        return randomValueFromArray(faker.data.episodeTitles);
    },

    showTitle: function() {
        return randomValueFromArray(faker.data.showTitles);
    },

    fanart: function() {
        return randomValueFromArray(faker.data.fanarts);
    }

};

/**
 * Generate n number of upcoming episodes
 * @param  {integer} n
 * @return {object}
 */
module.exports = function(n) {
    var upcoming = [];
    for (var i = 0; i < n; i++) {
        upcoming.push({
            ids: {
                id: faker.episodeId(),
                show: faker.showId()
            },
            title: faker.episodeTitle(),
            season: faker.season(),
            episode: faker.episode(),
            airs: randomDate().toISOString(),
            thumbnail: 'something.jpg',
            show: {
                ids: {
                    id: faker.showId()
                },
                title: faker.showTitle(),
                year: faker.year(),
                poster: 'poster.jpg',
                fanart: faker.fanart()
            }
        });
    }
    return {
        'episodes': upcoming
    };
};
