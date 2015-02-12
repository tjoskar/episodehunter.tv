'use strict';

import BaseResource from '../lib/resource';

class UpcomingResource extends BaseResource {

    constructor(http) {
        super(http);
    }

    get() {
        return super.get('http://localhost:8080/yoo');
    }

}

UpcomingResource.$inject = ['$http'];
export default UpcomingResource;
