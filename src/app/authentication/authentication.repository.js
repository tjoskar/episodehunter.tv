'use strict';

import BaseRepository from '../lib/base.repository';

class AuthenticationRepository extends BaseRepository {

    static $inject = ['$http', '$q', 'notify'];

    constructor(http, $q, notify) {
        super(http, notify);
        this.$q = $q;
        this.url = 'http://episodehunter.dev/api/auth/';
    }

    isLoggedIn() {
        return false;
    }

    login(username, password) {
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

    register({email, username, password, timezone}) {
        return this.post(this.url + 'register', {email, username, password, timezone}, {withCredentials: true})
            .then(user => {
                if (user && user.data && user.data.username && user.data.key) {
                    return user;
                }
                return this.$q.reject(
                    this.notify.createError('global', 'Server error')
                );
            });
    }

    forgotPassword(username) {
        return this.post(this.url + 'resetpassword', {username});
    }

}

export default AuthenticationRepository;
