'use strict';

import BaseRepository from '../lib/base.repository';

class AuthenticationRepository extends BaseRepository {

    constructor(http) {
        super(http);
    }

    areLoggedin() {
        return false;
    }
}

AuthenticationRepository.$inject = ['$http'];
export default AuthenticationRepository;
