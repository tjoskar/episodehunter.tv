'use strict';

class NotifyError {

    constructor(atomicNotify, type, humanError) {
        this.atomicNotify = atomicNotify;
        this.type = type;
        this.humanError = humanError;
    }

    show(timeout = 500000) {
        this.atomicNotify.error(this.humanError, timeout);
    }
}

class Notify {

    static $inject = ['$q', 'atomicNotifyService'];

    constructor($q, atomicNotify) {
        this.$q = $q;
        this.atomicNotify = atomicNotify;
    }

    createError(type, humanError) {
        return new NotifyError(this.atomicNotify, type, humanError);
    }

    reject() {
        return this.$q.reject(this.createError(...arguments));
    }

}

export default Notify;
export {Notify};
