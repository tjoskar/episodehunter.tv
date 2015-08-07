'use strict';

class UpcomingCtrl {

    constructor(auth) {
        auth.logout();
        window.location.replace('http://episodehunter.tv/');
        // repository
        //     .get()
        //     .then(shows => this.shows = shows);
    }

}

UpcomingCtrl.$inject = ['AuthenticationService', 'UpcomingRepository'];
export default UpcomingCtrl;
