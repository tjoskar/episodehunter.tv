'use strict';

class UpcomingCtrl {

    constructor() {
        window.location.replace('http://episodehunter.tv/');
        // repository
        //     .get()
        //     .then(shows => this.shows = shows);
    }

}

UpcomingCtrl.$inject = ['UpcomingRepository'];
export default UpcomingCtrl;
