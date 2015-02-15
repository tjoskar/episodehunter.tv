'use string';

import BaseEpisodeModel from '../lib/base.episode.model';
import BaseShowModel from '../lib/base.show.model';
import u from '../lib/utility';

const upcomingEnum = {
    JUST_AIRED: {'headline': 'just aired', 'order': 0},
    THIS_WEEK: {'headline': 'this week', 'order': 1},
    NEXT_WEEK: {'headline': 'next week', 'order': 2},
    UPCOMING: {'headline': 'upcoming', 'order': 3},
    TBA: {'headline': 'tba', 'order': 4}
};

/**
 * Upcoming Model
 * @param {object} options
 */
var UpcomingModel = function UpcomingModel(options) {
    BaseEpisodeModel.call(this, options);
    BaseShowModel.call(this.show = {}, options.show);

    /**
     * URL series page for this episode
     * @type {string}
     */
    this.url = (function(scope) {
        var url = scope.show.url;
        if (scope.id) {
            url += '/' + scope.id;
        }
        return url;
    })(this);

    /**
     * Determines right upcoming group
     * @type {UpcomingModel} scope
     * @return {upcomingEnum}
     */
    this.group = (scope => {
        var air = scope.airs;
        var now = new Date();
        var thisSunday = u.time.nextSunday(now);
        var nextSunday = u.time.nextSunday(thisSunday);
        if (air === undefined) {
            return upcomingEnum.TBA;
        }

        if (!u.is.set(scope.id) || air <= now) {
            return upcomingEnum.TBA;
        } else if (air < now) {
            return upcomingEnum.JUST_AIRED;
        } else if (air <= thisSunday) {
            return upcomingEnum.THIS_WEEK;
        } else if (thisSunday < air && air <= nextSunday) {
            return upcomingEnum.NEXT_WEEK;
        } else {
            return upcomingEnum.UPCOMING;
        }
    })(this);

};

export default UpcomingModel;
