export const utility = {
    is: {

        /**
         * Determines if a reference is a string
         * @param  {object} str
         * @return {boolean}
         */
        string: function(str) {
            return (typeof str === 'string' || str instanceof String);
        },

        /**
         * Determines if a reference is an Array
         * @param  {object} arr
         * @return {boolean}
         */
        array: function(arr) {
            return Array.isArray(arr);
        },

        /**
         * Determines if a reference is an integer
         * @param  {object} n
         * @return {boolean}
         */
        int: function(n) {
            return n === +n && n === (n | 0);
        },

        /**
         * Determines if a reference is defined or not null
         * @param  {object} variable
         * @return {boolean}
         */
        set: function(variable) {
            return (typeof variable !== 'undefined' && variable !== null);
        }

    },

    to: {

        /**
         * Convert object to int
         * @param  {object} obj
         * @return {integer}
         */
        int: function(obj) {
            return obj | 0;
        }

    },

    time: {

        /**
         * Return date object of today
         * @return {Date}
         */
        today() {
            const d = new Date();
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            return d;
        },

        /**
         * Return the local time
         * @return {integer}    Unixtimestamp * 1000
         */
        now: function() {
            return new Date().getTime();
        },

        /**
         * Convert a UTC date to a local timezone
         * @param  {integer} unixtimestamp
         * @return {Date}
         */
        convertUTCDateToLocalDate: function(unixtimestamp) {
            const utcDate = new Date(unixtimestamp * 1000);

            const offset = utcDate.getTimezoneOffset() / 60;
            const hours = utcDate.getHours();

            utcDate.setHours(hours - offset);

            return utcDate;
        },

        /**
         * Generate next Sunday, basted on day d
         * @param  {Date} d
         * @return {Date}
         */
        nextSunday: function(d) {
            return new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay() + 7, 23, 59, 59);
        },

        /**
         * Generate a date 'n' days from now
         * @param  {integer} n
         * @return {Date}
         */
        futureDate: function(n) {
            const d = utility.time.today();
            d.setDate(d.getDate() + n);
            return d;
        },

        /**
         * Generate a short month string
         * @param  {Date} d
         * @return {string}
         */
        shortMonth(d: Date) {
            return [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
            ][d.getMonth()];
        },

        padDateWithZero(n) {
            return ('0' + n).slice(-2);
        },

        isValidDate(d) {
            return d instanceof Date && isFinite(d);
        },

        convertToDateString(d: Date): string {
            const year = d.getFullYear();
            const month = utility.time.padDateWithZero(d.getMonth() + 1);
            const date = utility.time.padDateWithZero(d.getDate());
            return `${year}-${month}-${date}`;
        }

    },

    /**
     * Convert JSON string to an object.
     * @param  {string} obj
     * @return {object}
     */
    jsonParser: function(obj) {
        try {
            return JSON.parse(obj);
        } catch (e) {
            return null;
        }
    },

    /**
     * Generate a URL friendly title
     * @param  {string} text
     * @return {string}
     */
    urlTitle: function(text) {
        if (text) {
            return text.toLowerCase()
                       .replace(/[^\w ]+/g, '')
                       .replace(/ +/g, '-');
        }
        return '';
    },

    /**
     * Generate a episode number on form SXXEXX
     * @param  {integer} season
     * @param  {integer} episode
     * @return {string}
     */
    episodeNumber: function(season, episode) {
        let SE = 'S';

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
    }

};

export default utility;
