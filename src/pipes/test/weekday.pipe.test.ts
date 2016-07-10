import { assert } from 'chai';
import { WeekdayPipe } from '../weekday.pipe';

describe('Weekday pipe', () => {
    let pipe: WeekdayPipe;

    beforeEach(() => {
        pipe = new WeekdayPipe();
    });

    it('Shuld return monday', () => {
        // Arange
        const date = new Date('2016-06-06');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Monday');
    });

    it('Shuld return tuesday', () => {
        // Arange
        const date = new Date('2016-06-07');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Tuesday');
    });

    it('Shuld return wednesday', () => {
        // Arange
        const date = new Date('2016-06-08');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Wednesday');
    });

    it('Shuld return thursday', () => {
        // Arange
        const date = new Date('2016-06-09');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Thursday');
    });

    it('Shuld return friday', () => {
        // Arange
        const date = new Date('2016-06-10');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Friday');
    });

    it('Shuld return saturday', () => {
        // Arange
        const date = new Date('2016-06-11');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Saturday');
    });

    it('Shuld return sunday', () => {
        // Arange
        const date = new Date('2016-06-12');

        // Act
        const result = pipe.transform(date);

        // Assert
        assert.equal(result, 'Sunday');
    });

});
