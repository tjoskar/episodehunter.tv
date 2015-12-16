'use strict';

function ScrollFactory() {
    var Scroll = {};

    Scroll.toElementById = function (id, speed = 2000, callback) {
        Scroll.toElement(window.$('#' + id), speed, callback);
    };

    Scroll.toElement = function (element, speed = 2000, callback) {
        window.$('html, body').animate({
            scrollTop: element.offset().top
        }, speed, callback);
    };

    Scroll.focus = function (id) {
        window.$('#' + id).focus();
    };

    return Scroll;
}

export default ScrollFactory;
