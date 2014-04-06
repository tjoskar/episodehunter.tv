/**
 * Bridge to moment library
 * @return {string} A date string on format 'format'
 */
angular.module('EHW').filter('moment', function() {

    return function(input, format) {
        return input ? moment(input).format(format) : '';
    };

});
