'use strict';

class UpcomingCtrl {

    constructor(repository) {
        repository
            .get()
            .then(shows => this.shows = shows);
    }

}

UpcomingCtrl.$inject = ['UpcomingRepository'];
export default UpcomingCtrl;
