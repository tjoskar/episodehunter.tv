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
    if (EH.isset(v)) {
      try {
        v = JSON.parse(v);
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
      return EH.jsonParse(v.value);
    }
    return undefined;
  };

  storage.refresh = function(key, expiration) {
    var v = storage.get(key);
    if (EH.isset(v) && !storage.isObsolete()) {
      storage.set(key, v, expiration);
      return v;
    }
    return undefined;
  };

  storage.set = function(key, value, expiration) {
    expiration = expiration || 0;
    if (expiration !== 0) {
      expiration += EH.time();
    }
    if (!EH.isString(value)) {
      value = JSON.stringify(value);
    }
    window.localStorage.setItem(prefix + key, JSON.stringify({
      'expiration': expiration,
      'value': value
    }));
  };

  storage.clear = function() {
    window.localStorage.clear();
  };

  return storage;
});
