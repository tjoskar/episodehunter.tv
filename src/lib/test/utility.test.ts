import { assert } from 'chai';
import { utility } from '../utility';

describe('Utility', () => {

    it('Should mark a date as invalid if null', () => {
        // Arrange
        const date = null;

        // Act
        const result = utility.time.isValidDate(date);

        // Assert
        assert.strictEqual(result, false);
    });

    it('Should mark a date as invalid', () => {
        // Arrange
        const date = new Date('e');

        // Act
        const result = utility.time.isValidDate(date);

        // Assert
        assert.strictEqual(result, false);
    });

    it('Should mark a date as valid', () => {
        // Arrange
        const date = new Date();

        // Act
        const result = utility.time.isValidDate(date);

        // Assert
        assert.strictEqual(result, true);
    });

    describe('Is set', () => {

        it('Should return false for undefined', () => {
            // Arrange
            const data = undefined;

            // Act
            const result = utility.is.set(data);

            // Assert
            assert.strictEqual(result, false);
        });

        it('Should return false for null', () => {
            // Arrange
            const data = null;

            // Act
            const result = utility.is.set(data);

            // Assert
            assert.strictEqual(result, false);
        });

        it('Should return true for a falsy falue', () => {
            // Arrange
            const data = false;

            // Act
            const result = utility.is.set(data);

            // Assert
            assert.strictEqual(result, true);
        });
    });

    describe('episode number', () => {

        it('Should concat episode and season number', () => {
            // Arrange
            const season = 2;
            const episode = 4;

            // Act
            const result = utility.episodeNumber(season, episode);

            // Assert
            assert.equal(result, 'S02E04');
        });

        it('Should not pad a zero', () => {
            // Arrange
            const season = 12;
            const episode = 14;

            // Act
            const result = utility.episodeNumber(season, episode);

            // Assert
            assert.equal(result, 'S12E14');
        });
    });

    describe('url title', function() {

        it('should return the same non-funny-string', () => {
            assert.equal(utility.urlTitle('string'), 'string');
        });

        it('should replace space with dashes', () => {
            assert.equal(utility.urlTitle('hello you'), 'hello-you');
        });

        it('should make the string lowercase', () => {
            assert.equal(utility.urlTitle('heLLoYoU'), 'helloyou');
        });

        it('should only exist one dash in a row', () => {
            assert.equal(utility.urlTitle('hello - You'), 'hello-you');
        });

        it('should remove non-ASCII char', () => {
            assert.equal(utility.urlTitle('hello - You å'), 'hello-you-');
            assert.equal(utility.urlTitle('hello - You åäö k'), 'hello-you-k');
        });

        it('should not end with a dash', () => {
            assert.equal(utility.urlTitle('hello - You-'), 'hello-you');
        });

    });
});
