describe('helper function', function(){

    it('should check if string', function() {
        expect(EH.isString('val')).toEqual(true);
        expect(EH.isString(NaN)).toEqual(false);
        expect(EH.isString(1)).toEqual(false);
        expect(EH.isString(null)).toEqual(false);
        expect(EH.isString(false)).toEqual(false);
        expect(EH.isString(undefined)).toEqual(false);
        expect(EH.isString({})).toEqual(false);
    });

    it('should check if array', function() {
        expect(EH.isArray([1])).toEqual(true);
        expect(EH.isArray([,])).toEqual(true);
        expect(EH.isArray([])).toEqual(true);
        expect(EH.isArray({})).toEqual(false);
        expect(EH.isArray(undefined)).toEqual(false);
        expect(EH.isArray(1)).toEqual(false);
        expect(EH.isArray(NaN)).toEqual(false);
        expect(EH.isArray(false)).toEqual(false);
    });

    it('should check if int', function() {
        expect(EH.isInt(1)).toEqual(true);
        expect(EH.isInt(Number.MAX_VALUE)).toEqual(false);  // Believe it or not
        expect(EH.isInt(Number.MIN_VALUE)).toEqual(false);  // Believe it or not
        expect(EH.isInt(Infinity)).toEqual(false);          // Believe it or not
        expect(EH.isInt([])).toEqual(false);
        expect(EH.isInt({})).toEqual(false);
        expect(EH.isInt(undefined)).toEqual(false);
        expect(EH.isInt(NaN)).toEqual(false);
        expect(EH.isInt(false)).toEqual(false);
    });

    it('should check if variable is set', function() {
        var value = '';
        expect(EH.isset(1)).toEqual(true);                  // R-value
        expect(EH.isset(value)).toEqual(true);              // L-value
        expect(EH.isset(null)).toEqual(false);
        expect(EH.isset(undefined)).toEqual(false);
    });

    it('should convert convert string to int', function() {
        expect(EH.int('1')).toEqual(1);
        expect(EH.int('1.9')).toEqual(1);
        expect(EH.int('-1')).toEqual(-1);
        expect(EH.int('Not a number')).toEqual(0);
        expect(EH.int('a')).toEqual(0);
        expect(EH.int(NaN)).toEqual(0);
        expect(EH.int(null)).toEqual(0);
        expect(EH.int([])).toEqual(0);
        expect(EH.int({})).toEqual(0);
        expect(EH.int(undefined)).toEqual(0);
        expect(EH.int(true)).toEqual(1);
    });

    it('should convert json to object', function() {
        var json = {};
        expect(EH.jsonParse(json)).toEqual({});
        expect(EH.jsonParse(1)).toEqual(1);
    });

    it('should get the text Sunday', function() {
        var actual = EH.getNextSunday(new Date('2014', '11', '01'));
        var expected = new Date('2014', '11', '07');
        expect(actual.toUTCString()).toEqual(expected.toUTCString());

        actual = EH.getNextSunday(new Date('2014', '01', '06'));
        expected = new Date('2014', '01', '09');
        expect(actual.toUTCString()).toEqual(expected.toUTCString());
    });

    it('return next day', function() {
        var timestamp = 1394288888570;
        spyOn(Date.prototype, 'getTime').andReturn(timestamp);
        expect(EH.getFutureDate(1)).toEqual('2014-03-09');
    });

    it('return previous day', function() {
        var timestamp = 1394288888570;
        spyOn(Date.prototype, 'getTime').andReturn(timestamp);
        expect(EH.getFutureDate(-1)).toEqual('2014-03-07');
    });

    it('return two digit month', function() {
        var timestamp = 1394288888570;
        spyOn(Date.prototype, 'getTime').andReturn(timestamp);
        expect(EH.getFutureDate(250)).toEqual('2014-11-13');
    });

    it('should convert a URL slug', function() {
        expect(EH.urlTitle('string'), 'string');

        expect(EH.urlTitle('hello You'), 'hello-you');

        expect(EH.urlTitle('hello - You'), 'hello-you');

        expect(EH.urlTitle('hello - You å'), 'hello-you-');

        expect(EH.urlTitle('hello - You åäö k'), 'hello-you-k');

        expect(EH.urlTitle('hello - You-'), 'hello-you');
    });

    it('should return an episode number', function() {
       expect(EH.episodeNumber(0, 0), 'S00E00');
       expect(EH.episodeNumber(10, 1), 'S10E01');
       expect(EH.episodeNumber(1, 10), 'S01E10');
       expect(EH.episodeNumber('1', '1'), 'S01E01');
       expect(EH.episodeNumber('11', '11'), 'S11E11');
    });

});
