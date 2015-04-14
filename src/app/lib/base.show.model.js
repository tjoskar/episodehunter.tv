'use strict';

/**
 * @type {utility}
 */
import u from './utility';

/**
 * @type {config}
 */
import config from '../config'

/**
 * Base class for show
 * @param {Object} options
 */
function ShowModel(options) {
    if (this instanceof ShowModel) {
        throw 'Can not instantiate an abstract class';
    }

    /**
     * Series id
     * @type {integer}
     */
    this.id = options.ids.id;

    /**
     * Series name
     * @type {string}
     */
    this.title = options.title;

    /**
     * Year
     * @type {integear}
     */
    this.year = options.year;

    /**
     * URL series page for this show
     * @type {string}
     */
    this.url = '#/tv/' + this.id + '/' + u.urlTitle(this.title);

    /**
     * Return URL to a poster for this series
     * @return {string}
     */
    this.poster = config.url.series.poster + options.poster;

    /**
     * Return URL to a fanart for this show
     * @return {string}
     */
    this.fanart = config.url.series.fanart + options.fanart;

}

export default ShowModel;
