'use strict';

import {Notify} from './notify';
import {NotifyGui} from './notify-gui';

var bind = () => {
    var serviceName = 'EH.service.notify';

    angular
        .module(serviceName, [
            NotifyGui
        ])
        .service('notify', Notify);

    return serviceName;
};

export default {bind};
