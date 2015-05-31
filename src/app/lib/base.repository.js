'use strict';

/**
 * Repository
 * Wrapper for all HTTP cals
 * This file should be loaded as a module; no IIFE needed
 */

import syncEvent from './event';

/**
 * Number of ongoing HTTP calls
 * @type {Number}
 */
var ongoingHTTPCounter = 0;

/**
 * Start "loading" effect if it is the first call.
 * Broadcast 'httpStart' event
 * @return {null}
 */
var httpStart = function httpStart() {
    ongoingHTTPCounter++;

    if (ongoingHTTPCounter === 1) {
        syncEvent.trigger('httpStart', ongoingHTTPCounter);
    }
};

/**
 * Stop "loading" effect
 * Broadcast 'httpEnd' event
 * @return {null}
 */
var httpEnd = function httpEnd() {
    ongoingHTTPCounter--;

    if (ongoingHTTPCounter === 0) {
        syncEvent.trigger('httpEnd', ongoingHTTPCounter);
    }
};


class BaseRepository {

    constructor(http, notify) {
        this.http = http;
        this.notify = notify;
    }

    /**
     * Create an GET request
     * @param  {string} url
     * @return {promise}
     */
    get(url) {
        httpStart();

        url = url || this.apiEndpoint;

        return this.http
            .get(url)
            .then(data => data.data)
            .catch(error => this.errorHandler(error))
            .finally(httpEnd);
    }

    /**
     * Create an POST request
     * @param  {string} url
     * @param  {object} postData
     * @return {promise}
     */
    post(url, postData, config = {}) {
        httpStart();

        url = url || this.apiEndpoint;

        return this.http
            .post(url, postData, config)
            .then(data => data.data)
            .catch(error => this.errorHandler(error))
            .finally(httpEnd);
    }

    /**
     * An global error handler
     * @param  {object} error   Error object
     * @return {promise}
     */
    errorHandler(error) {
        var serverError;
        if (error.status === 401) {
            console.log('Logout user');
            serverError = this.notify.createError('action', 'Logout user');
        } else {
            var errorObject = (error && error.data && error.data.error) ? error.data.error : {};
            serverError = this.notify.createError(errorObject.type, errorObject.humanError);
        }
        return Promise.reject(serverError);
    };

}

export default BaseRepository;
