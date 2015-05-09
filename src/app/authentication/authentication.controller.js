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

}

AuthenticationCtrl.$inject = ['scrollToElement'];

export default AuthenticationCtrl;
