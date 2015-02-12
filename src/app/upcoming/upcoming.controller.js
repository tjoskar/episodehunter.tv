'use strict';

class UpcomingCtrl {

    constructor(resource) {
        resource
            .get()
            .then(shows => this.shows = shows);
    }

}

UpcomingCtrl.$inject = ['UpcomingResource'];
export default UpcomingCtrl;
