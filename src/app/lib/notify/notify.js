'use strict';

class NotifyMessage {

    constructor(atomicNotify, type, humanError) {
        this.atomicNotify = atomicNotify;
        this.type = type;
        this.humanError = humanError;
    }

    show(timeout = 500000) {
        if (this.type === 'error') {
            this.atomicNotify.error(this.humanError, timeout);
        } else if (this.type === 'info') {
            this.atomicNotify.info(this.humanError, timeout);
        } else {
            this.atomicNotify.info(this.humanError, timeout);
        }
    }

}

class Notify {

    static $inject = ['$q', 'atomicNotifyService'];

    constructor($q, atomicNotify) {
        this.$q = $q;
        this.atomicNotify = atomicNotify;
    }

    createNotify(type, humanError) {
        return new NotifyMessage(this.atomicNotify, type, humanError);
    }

    createError(humanError) {
        return this.createNotify('error', humanError);
    }

    createInfo(message) {
        return this.createNotify('info', message);
    }

    reject(humanError) {
        return this.$q.reject(this.createError(humanError));
    }

}

export default Notify;
export {Notify};
