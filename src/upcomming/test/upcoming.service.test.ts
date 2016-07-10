import { assert } from 'chai';
import { UpcomingEpisode } from '../../model';
import { UpcomingService } from '../upcoming.service';

const justAiredDateString = () => {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toString();
};

const thisWeekDateString = () => {
    const d = new Date();
    const date = new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay() + 4, 23, 59, 59);
    return date.toString();
};

const nextWeekDateString = () => {
    const d = new Date();
    const date = new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay() + 9, 23, 59, 59);
    return date.toString();
};

const upcomingDateString = () => {
    const date = new Date();
    date.setDate(date.getDate() + 15);
    return date.toString();
};

describe('Upcoming service', () => {
    let service: UpcomingService;

    beforeEach(() => {
        service = new UpcomingService(null, null);
    });

    it('Should mark an episode as just aired', () => {
        // Arrange
        const episodes: UpcomingEpisode[] = [{
            ids: {
                id: 1
            },
            title: 'Game of thrones',
            season: 6,
            episode: 10,
            airs: justAiredDateString(),
            thumbnail: '',
            show: null
        }];

        // Act
        const result = service.groupEpisodes(episodes);

        // Assert
        assert.equal(result.justAired.length, 1, 'justAired');
        assert.equal(result.thisWeek.length, 0, 'thisWeek');
        assert.equal(result.nextWeek.length, 0, 'nextWeek');
        assert.equal(result.upcoming.length, 0, 'upcoming');
        assert.equal(result.tba.length, 0, 'tba');
    });

    it('Should mark an episode to air this week', () => {
        // Arrange
        const episodes: UpcomingEpisode[] = [{
            ids: {
                id: 1
            },
            title: 'Game of thrones',
            season: 6,
            episode: 10,
            airs: thisWeekDateString(),
            thumbnail: '',
            show: null
        }];

        // Act
        const result = service.groupEpisodes(episodes);

        // Assert
        assert.equal(result.justAired.length, 0, 'justAired');
        assert.equal(result.thisWeek.length, 1, 'thisWeek');
        assert.equal(result.nextWeek.length, 0, 'nextWeek');
        assert.equal(result.upcoming.length, 0, 'upcoming');
        assert.equal(result.tba.length, 0, 'tba');
    });

    it('Should mark an episode to air next week', () => {
        // Arrange
        const episodes: UpcomingEpisode[] = [{
            ids: {
                id: 1
            },
            title: 'Game of thrones',
            season: 6,
            episode: 10,
            airs: nextWeekDateString(),
            thumbnail: '',
            show: null
        }];

        // Act
        const result = service.groupEpisodes(episodes);

        // Assert
        assert.equal(result.justAired.length, 0, 'justAired');
        assert.equal(result.thisWeek.length, 0, 'thisWeek');
        assert.equal(result.nextWeek.length, 1, 'nextWeek');
        assert.equal(result.upcoming.length, 0, 'upcoming');
        assert.equal(result.tba.length, 0, 'tba');
    });

    it('Should mark an episode as upcoming', () => {
        // Arrange
        const episodes: UpcomingEpisode[] = [{
            ids: {
                id: 1
            },
            title: 'Game of thrones',
            season: 6,
            episode: 10,
            airs: upcomingDateString(),
            thumbnail: '',
            show: null
        }];

        // Act
        const result = service.groupEpisodes(episodes);

        // Assert
        assert.equal(result.justAired.length, 0, 'justAired');
        assert.equal(result.thisWeek.length, 0, 'thisWeek');
        assert.equal(result.nextWeek.length, 0, 'nextWeek');
        assert.equal(result.upcoming.length, 1, 'upcoming');
        assert.equal(result.tba.length, 0, 'tba');
    });

    it('Should mark an episode as tba', () => {
        // Arrange
        const episodes: UpcomingEpisode[] = [{
            ids: {
                id: 1
            },
            title: 'Game of thrones',
            season: 6,
            episode: 10,
            airs: null,
            thumbnail: '',
            show: null
        }];

        // Act
        const result = service.groupEpisodes(episodes);

        // Assert
        assert.equal(result.justAired.length, 0, 'justAired');
        assert.equal(result.thisWeek.length, 0, 'thisWeek');
        assert.equal(result.nextWeek.length, 0, 'nextWeek');
        assert.equal(result.upcoming.length, 0, 'upcoming');
        assert.equal(result.tba.length, 1, 'tba');
    });

});
