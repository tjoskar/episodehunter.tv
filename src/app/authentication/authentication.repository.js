'use strict';

import BaseRepository from '../lib/base.repository';

class AuthenticationRepository extends BaseRepository {

    constructor(http, $q, notify) {
        super(http, notify);
        this.$q = $q;
        this.url = 'http://episodehunter.dev/api/auth/';
    }

    isLoggedIn() {
        return false;
    }

    login(username, password) {
        if (!username || !password) {
            var deferred = this.$q.defer();
            deferred.reject(
                this.notify.createError('intern', 'You have to enter both username and password')
            );
            return deferred.promise;
        }

        return this.post(this.url + 'login', {username, password}, {withCredentials: true})
            .then(user => {
                if (user && user.data && user.data.username && user.data.key) {
                    return user;
                }
                return this.$q.reject(
                    this.notify.createError('global', 'Server error')
                );
            });
    }
}

AuthenticationRepository.$inject = ['$http', '$q', 'notify'];
export default AuthenticationRepository;
