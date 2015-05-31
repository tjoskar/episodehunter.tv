'use strict';

class AuthenticationService {

    constructor(authRepo, storage, $q) {
        this.authRepo = authRepo;
        this.storage = storage;
        this.$q = $q;
        this.user = {
            username: '',
            key: ''
        };
    }

    isLoggedIn() {
        var savedUser = this.storage.get('user');
        if (savedUser && savedUser.data.username && savedUser.data.key && !savedUser.obsolete) {
            this.user.username = savedUser.data.username;
            this.user.key = savedUser.data.key;
            return true;
        }
        return false;
    }

    login(username, password) {
        return this.authRepo.login(username, password)
            .then(user => {
                this.user.username = user.data.username;
                this.user.key = user.data.key;
                this.storage.save('user', this.user);
                return user;
            })
            .catch(error => {
                this.storage.remove('user');
                return this.$q.reject(error);
            });
    }
}

AuthenticationService.$inject = ['AuthenticationRepository', 'storage', '$q'];
export default AuthenticationService;
