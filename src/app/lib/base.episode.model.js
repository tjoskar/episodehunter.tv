'use strict';

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
     * @type {integer}
     */
    this.id = options.ids.id;

    /**
     * Series id
     * @type {integer}
     */
    this.seriesId = options.ids.show;

    /**
     * Episode name
     * @type {string}
     */
    this.title = options.title;

    /**
     * Season number
     * @type {integer}
     */
    this.season = options.season;

    /**
     * Episode number
     * @type {integer}
     */
    this.episode = options.episode;

    /**
     * Air date
     * @type {Date}
     */
    this.airs = options.airs ? new Date(options.airs) : undefined;

    /**
     * Return URL to a thumbnail for this episode
     * @return {string}
     */
    this.thumbnail = (function() {
        return '';
    })();

}

export default EpisodeModel;
