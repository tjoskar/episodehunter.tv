/* exported EpisodeCollection, Episode */
/* jshint unused: false */
function EpisodeCollection(_headline, _episodes) {
  if (!(this instanceof EpisodeCollection)) {
    return null;
  }

  var headline = _headline || '';
  var episodes = _episodes || [];

  this.getHeadline = function() {
    return headline;
  };

  this.setHeadline = function(headline) {
    headline = headline;
  };

  this.getEpisodes = function() {
    return episodes;
  };

  this.addEpisode = function(episode) {
    episodes.push(episode);
  };

  this.removeEpisode = function(e) {
    if (EH.isInt(e) && e >= 0) {
      episodes.splice(e, 1);
    }
  };

  this.size = function() {
    return episodes.length;
  };

}

function Episode(_episode) {
  if (!(this instanceof Episode)) {
    return null;
  }

  var _showID          = _episode.showid      || 0;
  var _episodeID       = _episode.episodeid   || 0;
  var _timestamp       = _episode.timestamp   || '';
  var _seasonNr        = _episode.season      || -1;
  var _episodeNr       = _episode.episode     || -1;
  var _episodeName     = _episode.episodename || '';
  var _image           = _episode.image       || '';
  var _date            = null;

  this.image = EH.url.shows.poster + EH.url.defaultImage.poster; // Default image
  this.showName = _episode.showname || '';

  if (_image) {
    this.image = EH.url.shows.poster + _image;
  }

  this.getDate = function() {
    if (_timestamp === '') {
      return null;
    }
    if (_date === null) {
      _date = new Date(_timestamp);
    }
    return _date;
  };

  this.getEpisodeNumber = function() {
    if (_seasonNr < 0 && _episodeNr < 0) {
      return '';
    }
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
  };

  this.getEpisodeName = function() {
    return _episodeName;
  };

}

Episode.prototype.getDay = function() {
  if (this.getDate()) {
    var d = this.getDate().getDate();
    return (d < 10) ? '0' + d : d;
  }
  return '';
};

Episode.prototype.getDayName = function() {
  if (this.getDate()) {
    var d = this.getDate().getDay();
    return EH.days[d];
  }
  return '';
};

Episode.prototype.getMonth = function() {
  if (this.getDate()) {
    var d = this.getDate().getMonth() + 1;
    return (d < 10) ? '0' + d : d;
  }
  return '';
};

Episode.prototype.getMonthShortName = function() {
  if (this.getDate()) {
    var d = this.getDate().getDay();
    return EH.monthShortName[d];
  }
  return '';
};

Episode.prototype.getMonthName = function() {
  if (this.getDate()) {
    var d = this.getDate().getDay();
    return EH.month[d];
  }
  return '';
};

Episode.prototype.getYear = function() {
  if (this.getDate()) {
    return this.getDate().getFullYear();
  }
  return '';
};
