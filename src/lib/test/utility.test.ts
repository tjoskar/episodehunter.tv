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
});
