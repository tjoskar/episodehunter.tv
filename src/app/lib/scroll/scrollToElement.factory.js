'use strict';

function ScrollFactory() {
    var Scroll = {};

    Scroll.toElement = function (id, speed = 2000, callback) {
        window.$('html, body').animate({
            scrollTop: window.$('#' + id).offset().top
        }, speed, callback);
    };

    Scroll.focus = function (id) {
        window.$('#' + id).focus();
    };

    return Scroll;
}

export default ScrollFactory;
