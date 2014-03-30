function UpcomingEpisode(_episode) {
    if (!(this instanceof UpcomingEpisode)) {
        return null;
    }

    this.showID      = _episode.tv_id        || 0;
    this.episodeID   = _episode.episode_id   || 0;
    this.episodeName = _episode.episode_name || '';
    this.showName    = _episode.shown_name   || '';
    this.progress    = _episode.progress     || 0;
    this.image       = EH.url.shows.poster + EH.url.defaultImage.poster; // Default image
    this.url         = '/tv/' + this.showID + '/' + EH.urlTitle(this.showName);

    if (_episode.image) {
        this.image = EH.url.shows.poster + _episode.image;
    }

    var _date      = null;
    var _timestamp = _episode.timestamp  || '';
    var _seasonNr  = _episode.season     || -1;
    var _episodeNr = _episode.episode    || -1;

    Object.defineProperty(this, 'episodeNumber', {
        get: function () {
            var SE = 'S';

            if (_seasonNr < 10) {
                SE += '0' + _seasonNr;
            } else {
                SE += _seasonNr;
            }

            SE += 'E';

            if (_episodeNr < 10) {
                SE += '0' + _episodeNr;
            } else {
                SE += _episodeNr;
            }

            return SE;
        }
    });

    this.getAirDate = function() {
        if (_timestamp === '') {
            return null;
        }
        if (_date === null) {
            _date = new Date(_timestamp);
        }
        return _date;
    };

}

UpcomingEpisode.prototype.getAirDay = function() {
    if (this.getAirDate()) {
        var d = this.getAirDate().getDate();
        return (d < 10) ? '0' + d : d;
    }
    return '';
};

UpcomingEpisode.prototype.getAirDayName = function() {
    if (this.getAirDate()) {
        var d = this.getAirDate().getDay();
        return EH.days[d];
    }
    return '';
};

UpcomingEpisode.prototype.getAirMonth = function() {
    if (this.getAirDate()) {
        var d = this.getAirDate().getMonth() + 1;
        return (d < 10) ? '0' + d : d;
    }
    return '';
};

UpcomingEpisode.prototype.getAirMonthShortName = function() {
    if (this.getAirDate()) {
        var d = this.getAirDate().getDay();
        return EH.monthShortName[d];
    }
    return '';
};

UpcomingEpisode.prototype.getAirMonthName = function() {
    if (this.getAirDate()) {
        var d = this.getAirDate().getDay();
        return EH.month[d];
    }
    return '';
};

UpcomingEpisode.prototype.getAirYear = function() {
    if (this.getAirDate()) {
        return this.getAirDate().getFullYear();
    }
    return '';
};
