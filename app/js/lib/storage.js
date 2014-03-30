/**
 * Saves values in localStorage as object:
 * key: {
 *   value: mix,
 *   expiration: milliseconds
 * }
 */

angular.module('EHW').factory('storage', function() {

    /**
     * Determines if the object is obsolete
     * @type {Boolean}
     */
    var obsolete = false;

    /**
     * Saved prefix
     * @type {String}
     */
    var prefix = 'EH_';

    /**
     * @type {Object}
     */
    var storage = {};

    /**
     * Check if saved object is obsolete
     * @return {Boolean}
     */
    storage.isObsolete = function() {
        return obsolete;
    };

    /**
     * Setter for obsolete variable
     * @param {Boolean} bool
     */
    storage.setObsolete = function(bool) {
        obsolete = bool;
    };

    /**
     * Remove a specific key from the storage
     * @param  {string} key
     * @return {null}
     */
    storage.removeItem = function(key) {
        window.localStorage.removeItem(prefix + key);
    };

    /**
     * Get an object from storage
     * @param  {string} key
     * @return {undefined|Object}
     */
    storage.get = function(key) {
        var v = window.localStorage.getItem(prefix + key);
        if (v) {
            try {
                v = angular.fromJson(v);
            } catch(e) {
                storage.setObsolete(false);
                storage.removeItem(key);
                return undefined;
            }

            if (v.expiration === 0 || v.expiration >= EH.time()) {
                storage.setObsolete(false);
            } else {
                storage.setObsolete(true);
            }

            return angular.fromJson(v.value);
        }

        return undefined;
    };

    /**
     * Get an object from storage and update its expiration date
     * @param  {String}             key
     * @param  {int}                expiration     milliseconds for the object to be valid
     * @return {undefined|Object}
     */
    storage.refresh = function(key, expiration) {
        var value = storage.get(key);
        if (value && !storage.isObsolete()) {
            storage.set(key, value, expiration);
            return value;
        }
        return undefined;
    };

    /**
     * Save a object to storage
     * @param {string}          key
     * @param {Object|String}   value
     * @param {int}             expiration      milliseconds for the object to be valid
     */
    storage.set = function(key, value, expiration) {
        expiration = expiration || 0;

        if (expiration !== 0) {
            expiration += EH.time();
        }

        value = angular.toJson(value);

        window.localStorage.setItem(prefix + key, angular.toJson({
            'expiration': expiration,
            'value': value
        }));
    };

    /**
     * Delete the whole storage
     * @return {[type]} [description]
     */
    storage.clearAll = function() {
        window.localStorage.clear();
    };

    return storage;

});
