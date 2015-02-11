'use strict';

class UpcomingCtrl {

    constructor(upcoming) {
        console.log(upcoming);
        this.shows = upcoming.get();
    }

}

UpcomingCtrl.$inject = ['UpcomingResource'];
export default UpcomingCtrl;
