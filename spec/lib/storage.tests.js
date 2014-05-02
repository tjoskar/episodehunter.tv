/* global inject */
describe('Storage: ', function(){
    var _storage;

    beforeEach(module('EHW'));

    beforeEach(inject(function(storage) {
        _storage = storage;
        _storage.clearAll();
    }));

    it('should be able to store a string', function() {
        var key = 'key';
        var val = 'value';
        _storage.set(key, val);
        var actual = _storage.get(key);

        expect(actual).toEqual(val);
    });

    it('should be able to store an object', function() {
        var key = 'key';
        var val = {
            'key': 'val'
        };
        _storage.set(key, val);
        var actual = _storage.get(key);

        expect(actual).toEqual(val);
    });

    it('stored object should get obsolete over time', function() {
        var key = 'key';
        var val = 'val';

        _storage.set(key, val, -1);
        var storageData = _storage.get(key);
        expect(storageData).toEqual(val);
        expect(_storage.isObsolete()).toBeTruthy();
    });

    it('stored object should not be obsolete if the expiration date is in the future', function() {
        var key = 'key';
        var val = 'val';

        _storage.set(key, val, 1000);
        var storageData = _storage.get(key);
        expect(storageData).toEqual(val);
        expect(_storage.isObsolete()).toBeFalsy();
    });

});
