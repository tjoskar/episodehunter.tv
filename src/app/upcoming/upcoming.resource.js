'use strict';

class UpcomingResource {

    constructor($http) {
        this._http = $http;
    }

    get() {
        return this._http.get('http://localhost:8080/');
    }

}

export default UpcomingResource;
