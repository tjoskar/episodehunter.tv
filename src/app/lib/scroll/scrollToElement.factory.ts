'use strict';

function ScrollFactory() {
    var Scroll = {
        toElementById: function (id, speed, callback) {
            Scroll.toElement(window.$('#' + id), speed, callback);
        },

        toElement: function (element, speed, callback) {
            window.$('html, body').animate({
                scrollTop: element.offset().top
            }, speed, callback);
        },

        focus: function (id) {
            window.$('#' + id).focus();
        }
    };

    return Scroll;
}

export {ScrollFactory};
export default ScrollFactory;
