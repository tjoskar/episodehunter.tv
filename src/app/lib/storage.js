'use strict';
import utility from './utility';

/**
 * Saves values in localStorage as object:
 * key: {
 *   value: mix,
 *   expiration: milliseconds
 * }
 */

class Storage {

    constructor() {
        this.prefix = 'EH_';
    }

    /**
     * Remove a specific key from the storage
     * @param  {string} key
     * @return {null}
     */
    remove(key) {
        window.localStorage.removeItem(this.prefix + key);
    };

    /**
     * Get an object from storage
     * @param  {string} key
     * @return {undefined|Object}
     */
    get(key) {
        var value = window.localStorage.getItem(this.prefix + key);
        if (value) {
            var storageObject;
            try {
                storageObject = angular.fromJson(value);
            } catch(e) {
                this.removeItem(key);
                return undefined;
            }

            if (storageObject.expiration === 0 || storageObject.expiration >= utility.time.now()) {
                storageObject.obsolete = false;
            } else {
                storageObject.obsolete = true;
            }

            storageObject.data = angular.fromJson(storageObject.data);
            return storageObject;
        }

        return undefined;
    };

    /**
     * Get an object from storage and update its expiration date
     * @param  {String}             key
     * @param  {int}                expiration     milliseconds for the object to be valid
     * @return {undefined|Object}
     */
    refresh(key, expiration) {
        var storageObject = this.get(key);
        if (storageObject && !storageObject.obsolete) {
            this.set(key, storageObject.data, expiration);
        }
        return storageObject;
    };

    /**
     * Save a object to storage
     * @param {string}          key
     * @param {Object|String}   value
     * @param {int}             expiration      milliseconds for the object to be valid
     */
    save(key, value, expiration = 0) {
        if (expiration !== 0) {
            expiration += utility.time.now();
        }

        var jsonValue = value = angular.toJson(value);

        window.localStorage.setItem(this.prefix + key, angular.toJson({
            obsolete: false,
            expiration: expiration,
            data: jsonValue
        }));
        return value;
    };

    /**
     * Delete the whole storage
     * @return {undefined}
     */
    clearAll() {
        window.localStorage.clear();
    };
}

var bind = () => {
    var directiveName = 'EH.service.storage';

    angular
        .module(directiveName, [])
        .service('storage', Storage);

    return directiveName;
};

export default {bind};
