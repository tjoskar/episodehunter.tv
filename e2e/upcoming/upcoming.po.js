'use strict';

var PageObject = function() {
    this.upcomingEpisodes = element(by.css('body')).all(by.repeater('episode in group.episodes'));
};

module.exports = new PageObject();
