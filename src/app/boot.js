'use strict';

import upcoming from './upcoming/init';
import routeTable from './route';

angular
    .module('EH', ['ngAnimate', 'ngRoute'])
    .config(routeTable);

upcoming.bind();
