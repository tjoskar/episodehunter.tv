'use strict';

import md5 from '../md5';

function GravatarFactory() {
    var Gravatar = {
        getImageSrc: function getImageSrc(email, secure) {
            var hash = md5(email.toLowerCase());
            var src = (secure ? 'https://secure' : 'http://www' ) + '.gravatar.com/avatar/' + hash + '?d=404';
            return src;
        }
    };

    return Gravatar;
}

export default GravatarFactory;
