/* exported MovieModel */

/**
 * Base class for movies
 * @param {Object} options
 */
function MovieModel(options) {
    if (this instanceof MovieModel) {
        throw 'Can not instantiate an abstract class';
    }

    /**
     * Movie id
     * @type {Integer}
     */
    this.id = options.id;

    /**
     * Movie title
     * @type {String}
     */
    this.title = options.title;

    /**
     * URL to movie
     * @type {String}
     */
    this.url = '#/movie/' + this.id + '/' + EH.urlTitle(this.title);

    /**
     * Return URL to a poster for this movie
     * @return {String}
     */
    this.poster = (function() {
        if (options.poster) {
            return EH.url.movie.poster + options.poster;
        }
        return EH.url.movie.poster + EH.url.defaultImage.poster;
    })();

    /**
     * Return URL to a thumbnail for this movie
     * @return {String}
     */
    this.thumbnail = (function() {
        if (options.thumbnail) {
            return 'http://img.episodehunter.tv/' + options.thumbnail + '/4';
        }
        return EH.url.series.episode + EH.url.defaultImage.episode;
    })();

}
