/**
 * Order an object, by first convert it to an array. All keys will be lost!
 */

angular.module('EHW').filter('orderObjectBy', function() {
    return function(input, attribute) {
        if (!angular.isObject(input)) {
            return input;
        }

        var array = [];
        for(var objectKey in input) {
            array.push(input[objectKey]);
        }

        array.sort(function(a, b) {
            // Int parsing and comparing
            return (a[attribute]|0) - (b[attribute]|0);
        });

        return array;
    };
});
