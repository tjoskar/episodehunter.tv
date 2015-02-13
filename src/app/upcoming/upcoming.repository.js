'use strict';

import BaseRepository from '../lib/base.repository';

class UpcomingRepository extends BaseRepository {

    constructor(http) {
        super(http);
    }

    get() {
        return super.get('http://localhost:8080');
    }

}

UpcomingRepository.$inject = ['$http'];
export default UpcomingRepository;
