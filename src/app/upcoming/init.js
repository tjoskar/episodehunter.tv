'use strict';

import UpcomingCtrl from './upcoming.controller';
import UpcomingRepository from './upcoming.repository';

let bind = () => {
    angular
        .module('EH')
        .controller('UpcomingCtrl', UpcomingCtrl)
        .service('UpcomingRepository', UpcomingRepository);
};

export default {bind};
