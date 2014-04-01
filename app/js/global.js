/* exported local, p */
var EH = {};
var local = true;

EH.url = {
    'api': '/api/',
    'movie': {
        'poster': 'http://img.episodehunter.tv/movie/poster/',
        'fanart': 'http://img.episodehunter.tv/movie/fanart/'
    },
    'series': {
        'poster': 'http://img.episodehunter.tv/serie/poster/',
        'fanart': 'http://img.episodehunter.tv/',
        'episode': 'http://img.episodehunter.tv/episode/'
    },
    'defaultImage': {
        'poster': '1363113862.png',
        'episode': '1363113862.png'
    }
};

EH.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
EH.month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
EH.monthShortName = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];


/**
 * Shortcut for printing
 * @return {null}
 */
function p() {
    console.log.apply(console, arguments);
}

/**
 * Determines if a reference is a string
 * @param  object str
 * @return boolean
 */
EH.isString = function(str) {
    console.warn('EH.isString is obsolescent, use angular.isString(value) instead');
    return (typeof str === 'string' || str instanceof String);
};

/**
 * Determines if a reference is an Array
 * @param  object arr
 * @return boolean
 */
EH.isArray = function(arr) {
    console.warn('EH.isArray is obsolescent, use angular.isArray(value) instead');
    return arr instanceof Array;
};

/**
 * Determines if a reference is an integer
 * @param  object n
 * @return boolean
 */
EH.isInt = function(n) {
    console.warn('using EH.isInt');
    return n === +n && n === (n|0);
};

/**
 * Return the local time
 * @return undefined
 */
EH.time = function() {
    return new Date().getTime();
};

/**
 * Determines if a reference is defined
 * @param  object variable
 * @return boolean
 */
EH.isset = function(variable) {
    console.warn('using EH.isset');
    return (typeof(variable) !== 'undefined' && variable !== null);
};

/**
 * Convert object to int
 * @param  object obj
 * @return int
 */
EH.int = function(obj) {
    return obj|0;
};

/**
 * Convert JSON string to an object.
 * @param  string obj
 * @return object
 */
EH.jsonParse = function(obj) {
    console.warn('EH.jsonParse is obsolescent, use angular.fromJson(value) instead');
    try {
        obj = JSON.parse(obj);
    } catch(e) {}
    return obj;
};

/**
 * Start "loading" effect
 * @return undefined
 */
EH.ajaxStart = function() {
    var $loader = $('.loader');
    $loader.fadeIn("fast");
    $loader.animate({
        width: "80%",
    }, 800 );
};

/**
 * Stop "loading" effect
 * @return undefined
 */
EH.ajaxStop = function() {
    var $loader = $('.loader');
    $loader.animate({
        width: "100%",
    }, 200 );

    setTimeout(function() {
        $loader.fadeOut("slow", function() {
            $loader.css({'width': '0%'});
        });
    }, 200);
};

/**
 * Convert a UTC date to a local timezone
 * @param  int unixtimestamp
 * @return Date
 */
EH.convertUTCDateToLocalDate = function(unixtimestamp) {
    var utcDate = new Date(unixtimestamp * 1000);

    var offset = utcDate.getTimezoneOffset() / 60;
    var hours = utcDate.getHours();

    utcDate.setHours(hours - offset);

    return utcDate;
};

/**
 * Generate next Sunday, basted on day d
 * @param  Date d
 * @return Date
 */
EH.getNextSunday = function(d) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay() + 7);
};

/**
 * Generate a date 'n' days from now
 * @param  int n
 * @return string on form YYYY-MM-DD
 */
EH.getFutureDate = function(n) {
    var d = new Date();
    d = new Date(this.time() + (n || 0) * 86400000);
    var month = d.getMonth() + 1;
    return [
        d.getFullYear(),
        (month < 10 ? '0' + month : month),
        (d.getDate() < 10 ? '0' + d.getDate() : d.getDate())
    ].join('-');
};

/**
 * Generate a URL friendly title
 * @param  string text
 * @return string
 */
EH.urlTitle = function(text) {
    if (text) {
        return text.toLowerCase()
                   .replace(/[^\w ]+/g,'')
                   .replace(/ +/g,'-');
    }
    return '';
};

/**
 * Generate a episode number on form SXXEXX
 * @param  int|string season
 * @param  int|string episode
 * @return string
 */
EH.episodeNumber = function(season, episode) {
    var SE = 'S';
    if (season < 10) {
        SE += '0' + season;
    } else {
        SE += season;
    }
    SE += 'E';
    if (episode < 10) {
        SE += '0' + episode;
    } else {
        SE += episode;
    }
    return SE;
};
