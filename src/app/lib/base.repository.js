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

/**
 * An global error handler
 * @param  {object} error   Error object
 * @return {promise}
 */
var errorHandler = function errorHandler(error) {
    if (error.status === 401) {
        console.log('Logout user');
    } else {
        console.log('Show error message', error);
    }
    return Promise.reject(error);
};



class BaseRepository {

    constructor(http) {
        this.http = http;
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
            .catch(errorHandler)
            .finally(httpEnd);
    }

    /**
     * Create an POST request
     * @param  {string} url
     * @param  {object} postData
     * @return {promise}
     */
    post(url, postData) {
        httpStart();

        url = url || this.apiEndpoint;

        return this.http
            .post(url, postData)
            .then(data => data.value)
            .catch(errorHandler)
            .finally(httpEnd);
    }


}

export default BaseRepository;
