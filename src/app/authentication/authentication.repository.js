'use strict';

import BaseRepository from '../lib/base.repository';

class AuthenticationRepository extends BaseRepository {

    constructor(http) {
        super(http);
    }

    isLoggedIn() {
        return false;
    }
}

AuthenticationRepository.$inject = ['$http'];
export default AuthenticationRepository;
