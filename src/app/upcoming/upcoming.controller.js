'use strict';

class UpcomingCtrl {

    constructor(upcoming) {
        upcoming
            .get()
            .then(shows => this.shows = shows);
    }

}

UpcomingCtrl.$inject = ['UpcomingResource'];
export default UpcomingCtrl;
