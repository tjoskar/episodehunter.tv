/**
 * @type {utility}
 */
import utility from '../src/app/lib/utility';

describe('Utility functions: ', function() {

    describe('isString', () => {

        it('should equal true on string', () => {
            expect(utility.is.string('string')).toEqual(true);
        });

        it('should equal false on NaN', () => {
            expect(utility.is.string(NaN)).toEqual(false);
        });

        it('should equal false on integer', () => {
            expect(utility.is.string(1)).toEqual(false);
        });

        it('should equal false on null', () => {
            expect(utility.is.string(null)).toEqual(false);
        });

        it('should equal false on boolean', () => {
            expect(utility.is.string(false)).toEqual(false);
        });

        it('should equal false on undefined', () => {
            expect(utility.is.string(undefined)).toEqual(false);
        });

        it('should equal false on object', () => {
            expect(utility.is.string({})).toEqual(false);
        });

    });

    describe('isArray', function() {

        it('should equal true on non-empty array', () => {
            expect(utility.is.array([0 , 0])).toEqual(true);
            //                         o
            //                       `---´
        });

        it('should equal true on empty array', () => {
            expect(utility.is.array([])).toEqual(true);
        });

        it('should equal false on object', () => {
            expect(utility.is.array({})).toEqual(false);
        });

        it('should equal false on undefined', () => {
            expect(utility.is.array(undefined)).toEqual(false);
        });

        it('should equal false on integer', () => {
            expect(utility.is.array(1)).toEqual(false);
        });

        it('should equal false on NaN', () => {
            expect(utility.is.array(NaN)).toEqual(false);
        });

        it('should equal false on boolean', () => {
            expect(utility.is.array(false)).toEqual(false);
        });

    });

    describe('isInt', function() {
        it('should equal true on integer', () => {
            expect(utility.is.int(1)).toEqual(true);
        });

        it('should equal false on max value', () => {
            expect(utility.is.int(Number.MAX_VALUE)).toEqual(false);
        });

        it('should equal false on min value', () => {
            expect(utility.is.int(Number.MIN_VALUE)).toEqual(false);
        });

        it('should equal false on infinity', () => {
            expect(utility.is.int(Infinity)).toEqual(false);
        });

        it('should equal false on array', () => {
            expect(utility.is.int([])).toEqual(false);
        });

        it('should equal false on object', () => {
            expect(utility.is.int({})).toEqual(false);
        });

        it('should equal false on undefined', () => {
            expect(utility.is.int(undefined)).toEqual(false);
        });

        it('should equal false on NaN', () => {
            expect(utility.is.int(NaN)).toEqual(false);
        });

        it('should equal false on boolean', () => {
            expect(utility.is.int(false)).toEqual(false);
        });

    });

    describe('isSet', function() {

        it('should equal true on R-value', () => {
            expect(utility.is.set(1)).toEqual(true);
        });

        it('should equal true on L-value', () => {
            var value = '';
            expect(utility.is.set(value)).toEqual(true);
        });

        it('should equal false on null', () => {
            expect(utility.is.set(null)).toEqual(false);
        });

        it('should equal false on undefined', () => {
            expect(utility.is.set(undefined)).toEqual(false);
            expect(utility.is.set()).toEqual(false);
        });

    });

    describe('int', function() {

        it('should return the value of an string integer', () => {
            expect(utility.to.int('1')).toEqual(1);
        });

        it('should truncate the value of an float and return an integer', () => {
            expect(utility.to.int('1.9')).toEqual(1);
        });

        it('should handle negative strings value', () => {
            expect(utility.to.int('-1')).toEqual(-1);
        });

        it('should equal 0 on non-numeric-strings', () => {
            expect(utility.to.int('Not a number')).toEqual(0);
        });

        it('should equal 0 on char', () => {
            expect(utility.to.int('a')).toEqual(0);
        });

        it('should equal 0 on NaN', () => {
            expect(utility.to.int(NaN)).toEqual(0);
        });

        it('should equal 0 on null', () => {
            expect(utility.to.int(null)).toEqual(0);
        });

        it('should equal 0 on array', () => {
            expect(utility.to.int([])).toEqual(0);
        });

        it('should equal 0 on object', () => {
            expect(utility.to.int({})).toEqual(0);
        });

        it('should equal 0 on undefined', () => {
            expect(utility.to.int(undefined)).toEqual(0);
        });

        it('should equal 1 on true', () => {
            expect(utility.to.int(true)).toEqual(1);
        });

        it('should equal 0 on false', () => {
            expect(utility.to.int(false)).toEqual(0);
        });

    });

    describe('time', function() {

        describe('Get next Sunday', function() {

            it('should return the text Sunday as an date object', function() {
                var actual = utility.time.nextSunday(new Date('2014', '11', '01'));
                var expected = new Date('2014', '11', '07');
                expect(actual.toUTCString()).toEqual(expected.toUTCString());

                actual = utility.time.nextSunday(new Date('2014', '01', '06'));
                expected = new Date('2014', '01', '09');
                expect(actual.toUTCString()).toEqual(expected.toUTCString());
            });

        });

        describe('Get a day in the future', function() {

            it('should be able to return a day in the future', function() {
                var timestamp = 1394288888570;
                spyOn(Date.prototype, 'getTime').and.returnValue(timestamp);
                expect(utility.time.futureDate(1)).toEqual('2014-03-09');
            });

            it('should be able to return a day in the past', function() {
                var timestamp = 1394288888570;
                spyOn(Date.prototype, 'getTime').and.returnValue(timestamp);
                expect(utility.time.futureDate(-1)).toEqual('2014-03-07');
            });

            it('should be able to return a two digit month', function() {
                var timestamp = 1394288888570;
                spyOn(Date.prototype, 'getTime').and.returnValue(timestamp);
                expect(utility.time.futureDate(250)).toEqual('2014-11-13');
            });

        });

    });



    describe('jsonParser', function() {

        it('should convert an json string to an object', () => {
            var json = '{}';
            expect(utility.jsonParser(json)).toEqual({});
        });

        it('should return the same value on non-json-string', () => {
            expect(utility.jsonParser(1)).toEqual(1);
        });

    });

    describe('urlTitle', function() {

        it('should return the same non-funny-string', () => {
            expect(utility.urlTitle('string'), 'string');
        });

        it('should replace space with dashes', () => {
            expect(utility.urlTitle('hello you'), 'hello-you');
        });

        it('should make the string lowercase', () => {
            expect(utility.urlTitle('heLLoYoU'), 'helloyou');
        });

        it('should only exist one dash in a row', () => {
            expect(utility.urlTitle('hello - You'), 'hello-you');
        });

        it('should remove non-ASCII char', () => {
            expect(utility.urlTitle('hello - You å'), 'hello-you-');
            expect(utility.urlTitle('hello - You åäö k'), 'hello-you-k');
        });

        it('should not end with a dash', () => {
            expect(utility.urlTitle('hello - You-'), 'hello-you');
        });

    });

    describe('episodeNumber', function() {

        it('should return an episode number', function() {
           expect(utility.episodeNumber(0, 0), 'S00E00');
           expect(utility.episodeNumber(10, 1), 'S10E01');
           expect(utility.episodeNumber(1, 10), 'S01E10');
           expect(utility.episodeNumber('1', '1'), 'S01E01');
           expect(utility.episodeNumber('11', '11'), 'S11E11');
        });

    });

});
