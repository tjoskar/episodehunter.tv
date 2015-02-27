'use strict';

import UpcomingCtrl from './upcoming.controller';
import UpcomingRepository from './upcoming.repository';

var bind = () => {
    var moduleName = 'EH.upcoming';

    angular
        .module(moduleName, [])
        .controller('UpcomingCtrl', UpcomingCtrl)
        .service('UpcomingRepository', UpcomingRepository);

    return moduleName;
};

export default {bind};
