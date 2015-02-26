'use strict';

describe('Upcoming episodes', function () {
    var page;

    beforeEach(function () {
        browser.get('http://localhost:9000/index.html');
        page = require('./upcoming.po');
    });

    it('list more than 5 episodes', function () {
        expect(page.upcomingEpisodes.count()).toBeGreaterThan(5);
    });

});
