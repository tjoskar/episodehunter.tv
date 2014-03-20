/*
  Saves values as object:
  key: {
    value: mix,
    expiration: milliseconds
  }
*/

angular.module("EHW").factory('storage', function() {

    var obsolete = false;
    var prefix = 'EH_';

    var storage = {};

    storage.isObsolete = function() {
        return obsolete;
    };

    storage.setObsolete = function(bool) {
        obsolete = bool;
    };

    storage.removeItem = function(key) {
        window.localStorage.removeItem(prefix + key);
    };

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

    storage.refresh = function(key, expiration) {
        var value = storage.get(key);
        if (value && !storage.isObsolete()) {
            storage.set(key, value, expiration);
            return value;
        }
        return undefined;
    };

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

    storage.clearAll = function() {
        window.localStorage.clear();
    };

    return storage;

});
