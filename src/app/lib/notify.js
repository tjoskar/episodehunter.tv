'use strict';

class NotifyError {
    constructor(type, humanError) {
        this.type = type;
        this.humanError = humanError;
    }

    show(timeout = 5000) {
        Materialize.toast(this.humanError, timeout);
    }
}

class Notify {
    createError(type, humanError) {
        return new NotifyError(type, humanError);
    }
}

var bind = () => {
    var serviceName = 'EH.service.notify';

    angular
        .module(serviceName, [])
        .service('notify', Notify);

    return serviceName;
};

export default {bind};
