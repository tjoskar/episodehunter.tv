'use strict';

class UpcomingCtrl {

    constructor(upcoming) {
        upcoming
            .get()
            .then(data => this.shows = data.data);
    }

}

UpcomingCtrl.$inject = ['UpcomingResource'];
export default UpcomingCtrl;
