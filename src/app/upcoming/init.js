'use strict';

import UpcomingCtrl from './upcoming.controller';
import UpcomingResource from './upcoming.resource';

let bind = () => {
    angular
        .module('EH')
        .controller('UpcomingCtrl', UpcomingCtrl)
        .service('UpcomingResource', UpcomingResource);
};

export default {bind};
