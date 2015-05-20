'use strict';

class AuthenticationCtrl {

    constructor(scroll) {
        this.username = '';
        this.emailadress = '';
        this.password = '';

        this.scroll = scroll;
    }

    scrollAndFocus(sectionId, focusId) {
        this.scroll.toElement(sectionId, 200, () => {
            this.scroll.focus(focusId);
        });
    }

    register() {
        console.log('register', this.emailadress, this.username, this.password, arguments);
    }

    login() {
        console.log('login', this.username, this.password, arguments);
    }

    forgot() {
        console.log('forgot', this.username, this.password, arguments);
    }

}

AuthenticationCtrl.$inject = ['scrollToElement'];

export default AuthenticationCtrl;
