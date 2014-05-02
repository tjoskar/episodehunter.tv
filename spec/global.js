describe('Helper function: ', function() {

    describe('isString', function() {
        it('should equal true on string', function() {
            expect(EH.isString('val')).toEqual(true);
        });
        it('should equal false on NaN', function() {
            expect(EH.isString(NaN)).toEqual(false);
        });
        it('should equal false on integer', function() {
            expect(EH.isString(1)).toEqual(false);
        });
        it('should equal false on null', function() {
            expect(EH.isString(null)).toEqual(false);
        });
        it('should equal false on boolean', function() {
            expect(EH.isString(false)).toEqual(false);
        });
        it('should equal false on undefined', function() {
            expect(EH.isString(undefined)).toEqual(false);
        });
        it('should equal false on object', function() {
            expect(EH.isString({})).toEqual(false);
        });
    });

    describe('isArray', function() {
        it('should equal true on non-empty array', function() {
            expect(EH.isArray([,])).toEqual(true);
        });
        it('should equal true on empty array', function() {
            expect(EH.isArray([])).toEqual(true);
        });
        it('should equal false on object', function() {
            expect(EH.isArray({})).toEqual(false);
        });
        it('should equal false on undefined', function() {
            expect(EH.isArray(undefined)).toEqual(false);
        });
        it('should equal false on integer', function() {
            expect(EH.isArray(1)).toEqual(false);
        });
        it('should equal false on NaN', function() {
            expect(EH.isArray(NaN)).toEqual(false);
        });
        it('should equal false on boolean', function() {
            expect(EH.isArray(false)).toEqual(false);
        });
    });

    describe('isInt', function() {
        it('should equal true on integer', function() {
            expect(EH.isInt(1)).toEqual(true);
        });
        it('should equal false on max value', function() {
            expect(EH.isInt(Number.MAX_VALUE)).toEqual(false);
        });
        it('should equal false on min value', function() {
            expect(EH.isInt(Number.MIN_VALUE)).toEqual(false);
        });
        it('should equal false on infinity', function() {
            expect(EH.isInt(Infinity)).toEqual(false);
        });
        it('should equal false on array', function() {
            expect(EH.isInt([])).toEqual(false);
        });
        it('should equal false on object', function() {
            expect(EH.isInt({})).toEqual(false);
        });
        it('should equal false on undefined', function() {
            expect(EH.isInt(undefined)).toEqual(false);
        });
        it('should equal false on NaN', function() {
            expect(EH.isInt(NaN)).toEqual(false);
        });
        it('should equal false on boolean', function() {
            expect(EH.isInt(false)).toEqual(false);
        });
    });

    describe('isSet', function() {
        it('should equal true on R-value', function() {
            expect(EH.isSet(1)).toEqual(true);
        });
        it('should equal true on L-value', function() {
            var value = '';
            expect(EH.isSet(value)).toEqual(true);
        });
        it('should equal false on null', function() {
            expect(EH.isSet(null)).toEqual(false);
        });
        it('should equal false on undefined', function() {
            expect(EH.isSet(undefined)).toEqual(false);
            expect(EH.isSet()).toEqual(false);
        });
    });

    describe('int', function() {
        it('should return the value of an string integer', function() {
            expect(EH.int('1')).toEqual(1);
        });
        it('should truncate the value of an float and return an integer', function() {
            expect(EH.int('1.9')).toEqual(1);
        });
        it('should handle negative strings value', function() {
            expect(EH.int('-1')).toEqual(-1);
        });
        it('should equal 0 on non-numeric-strings', function() {
            expect(EH.int('Not a number')).toEqual(0);
        });
        it('should equal 0 on char', function() {
            expect(EH.int('a')).toEqual(0);
        });
        it('should equal 0 on NaN', function() {
            expect(EH.int(NaN)).toEqual(0);
        });
        it('should equal 0 on null', function() {
            expect(EH.int(null)).toEqual(0);
        });
        it('should equal 0 on array', function() {
            expect(EH.int([])).toEqual(0);
        });
        it('should equal 0 on object', function() {
            expect(EH.int({})).toEqual(0);
        });
        it('should equal 0 on undefined', function() {
            expect(EH.int(undefined)).toEqual(0);
        });
        it('should equal 1 on true', function() {
            expect(EH.int(true)).toEqual(1);
        });
        it('should equal 0 on false', function() {
            expect(EH.int(false)).toEqual(0);
        });
    });

    describe('jsonParser', function() {
        it('should convert an json string to an object', function() {
            var json = '{}';
            expect(EH.jsonParser(json)).toEqual({});
        });
        it('should return the same value on non-json-string', function() {
            expect(EH.jsonParser(1)).toEqual(1);
        });
    });

    describe('getNextSunday', function() {
        it('should return the text Sunday as an date object', function() {
            var actual = EH.getNextSunday(new Date('2014', '11', '01'));
            var expected = new Date('2014', '11', '07');
            expect(actual.toUTCString()).toEqual(expected.toUTCString());

            actual = EH.getNextSunday(new Date('2014', '01', '06'));
            expected = new Date('2014', '01', '09');
            expect(actual.toUTCString()).toEqual(expected.toUTCString());
        });
    });

    describe('getFutureDate', function() {
        it('should be able to return a day in the future', function() {
            var timestamp = 1394288888570;
            spyOn(Date.prototype, 'getTime').andReturn(timestamp);
            expect(EH.getFutureDate(1)).toEqual('2014-03-09');
        });

        it('should be able to return a day in the past', function() {
            var timestamp = 1394288888570;
            spyOn(Date.prototype, 'getTime').andReturn(timestamp);
            expect(EH.getFutureDate(-1)).toEqual('2014-03-07');
        });

        it('should be able to return a two digit month', function() {
            var timestamp = 1394288888570;
            spyOn(Date.prototype, 'getTime').andReturn(timestamp);
            expect(EH.getFutureDate(250)).toEqual('2014-11-13');
        });
    });

    describe('urlTitle', function() {
        it('should return the same non-funny-string', function() {
            expect(EH.urlTitle('string'), 'string');
        });
        it('should replace space with dashes', function() {
            expect(EH.urlTitle('hello you'), 'hello-you');
        });
        it('should make the string lowercase', function() {
            expect(EH.urlTitle('heLLoYoU'), 'helloyou');
        });
        it('should only exist one dash in a row', function() {
            expect(EH.urlTitle('hello - You'), 'hello-you');
        });
        it('should remove non-ASCII char', function() {
            expect(EH.urlTitle('hello - You å'), 'hello-you-');
            expect(EH.urlTitle('hello - You åäö k'), 'hello-you-k');
        });
        it('should not end with a dash', function() {
            expect(EH.urlTitle('hello - You-'), 'hello-you');
        });
    });

    describe('episodeNumber', function() {
        it('should return an episode number', function() {
           expect(EH.episodeNumber(0, 0), 'S00E00');
           expect(EH.episodeNumber(10, 1), 'S10E01');
           expect(EH.episodeNumber(1, 10), 'S01E10');
           expect(EH.episodeNumber('1', '1'), 'S01E01');
           expect(EH.episodeNumber('11', '11'), 'S11E11');
        });
    });

});
