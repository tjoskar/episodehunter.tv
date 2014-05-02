/* global Collection: true */
describe('Collection: ', function(){
    var collection;

    beforeEach(module('EHW'));

    beforeEach(function() {
        collection = new Collection();
    });

    it('should be able to get all objects after insertion', function() {
        expect(collection.getAll()).toEqual([]);

        collection.add('el');
        collection.add('em');
        collection.add('en');
        collection.add('ts');
        expect(collection.getAll()).toEqual(['el', 'em', 'en', 'ts']);
    });

    it('should get the current size of an collection of various size', function() {
        expect(collection.size()).toEqual(0);
        expect(collection.length).toEqual(0);
        collection.add('el');
        expect(collection.size()).toEqual(1);
        expect(collection.length).toEqual(1);
        collection.add('em');
        expect(collection.size()).toEqual(2);
        expect(collection.length).toEqual(2);
        collection.remove(0);
        expect(collection.size()).toEqual(1);
        expect(collection.length).toEqual(1);
        collection.remove(0);
        expect(collection.size()).toEqual(0);
        expect(collection.length).toEqual(0);
        collection.remove(0);
        expect(collection.size()).toEqual(0);
        expect(collection.length).toEqual(0);
    });

    it('should be able to sort on a specific key', function() {
        collection.add({'o': 0});
        collection.add({'o': 5});
        collection.add({'o': 2});
        expect(collection.getAll()).toEqual([{'o': 0}, {'o': 5}, {'o': 2}]);
        collection.sortOn('o');
        expect(collection.getAll()).toEqual([{'o': 0}, {'o': 2}, {'o': 5}]);
        collection.sortOn('o', true);
        expect(collection.getAll()).toEqual([{'o': 5}, {'o': 2}, {'o': 0}]);
    });

});
