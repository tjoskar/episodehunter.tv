/* exported EpisodeModel */

/**
 * Base class for episodes
 * @param {Object} options
 */
function EpisodeModel(options) {
    if (this instanceof EpisodeModel) {
        throw 'Can not instantiate an abstract class';
    }

    /**
     * Episode id
     * If episode id is false, use the series id instead
     * @type {Integer}
     */
    this.id = options.id || options.seriesID;

    /**
     * Series id
     * @type {Integer}
     */
    this.seriesID = options.seriesID;

    /**
     * Series name
     * @type {String}
     */
    this.seriesName = options.seriesName;

    /**
     * Episode name
     * @type {String}
     */
    this.episodeName = options.episodeName;

    /**
     * Title of current object
     * Can be used instead of episode/series name
     * @type {String}
     */
    this.title = options.title || this.seriesName || this.episodeName;

    /**
     * URL series page for this episode
     * @type {String}
     */
    this.url = (function(scope) {
        var url = '#/tv/' + scope.seriesID + '/' + EH.urlTitle(scope.seriesName);
        if (scope.id) {
            url += '/' + scope.id;
        }
        return url;
    })(this);


    /**
     * Season number
     * @type {Integer}
     */
    this.season = options.season;

    /**
     * Episode number
     * @type {Integer}
     */
    this.episode = options.episode;

    /**
     * Air date
     * @type {Date|null}
     */
    this.airTimestamp = options.airDate ? new Date(options.airDate) : null;

    /**
     * Return URL to a poster for this episode
     * @return {String}
     */
    this.poster = (function() {
        if (options.poster) {
            return EH.url.series.poster + options.poster;
        }
        return EH.url.series.poster + EH.url.defaultImage.poster;
    })();

    /**
     * Return URL to a thumbnail for this episode
     * @return {String}
     */
    this.thumbnail = (function() {
        if (options.thumbnail) {
            return EH.url.series.episode + options.thumbnail;
        }
        return EH.url.series.episode + EH.url.defaultImage.episode;
    })();

    /**
     * Return current episode number
     * @return {String}
     */
    this.episodeNumber = EH.episodeNumber(this.season, this.episode);

}
