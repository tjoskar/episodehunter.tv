'use strict';

class AuthenticationService {

    static $inject = ['AuthenticationRepository', 'storage', '$q'];

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
        // A lazy check to see if a user is logged in
        // We trust the api layer to kick the user out if we must
        if (this.user && this.user.username && this.user.key) {
            return true;
        }

        var savedUser = this.storage.get('user');
        if (savedUser && savedUser.data.username && savedUser.data.key && !savedUser.obsolete) {
            this.user.username = savedUser.data.username;
            this.user.key = savedUser.data.key;
            return true;
        }
        return false;
    }

    login(username, password) {
        return this.authRepo
            .login(username, password)
            .then(user => this.saveUser(user.data));
    }

    register(credentials) {
        return this.authRepo
            .register(credentials)
            .then(user => this.saveUser(user.data));
    }

    forgotPassword(username) {
        return this.authRepo
            .forgotPassword(username);
    }

    saveUser(user) {
        this.user.username = user.username;
        this.user.key = user.key;
        this.storage.save('user', this.user);
        return user;
    }
}

export default AuthenticationService;
