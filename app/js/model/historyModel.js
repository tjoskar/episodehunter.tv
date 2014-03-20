/* exported popularMovieModel */
function HistoryTvModel(_history) {
    if (!(this instanceof HistoryTvModel)) {
	return null;
    }

    this.title = _history.show_name || '';
    this.url = '/tv/' + _history.tv_id + '/' + EH.urlTitle(this.title) + '/' + _history.episode_id;
    this.image = EH.url.shows.episode + EH.url.defaultImage.episode;
    this.episodeName = _history.episode_name;
    this.season = _history.season;
    this.episode = _history.episode;
    this.watchedId = _history.watched_id;
    this.utcTimestamp = _history.utc_timestamp * 1000;

    if (_history.image) {
	this.image = EH.url.shows.episode + _history.image;
    }

    Object.defineProperty(this, 'episodeNumber', {
	get: function () {
	    return EH.episodeNumber(this.season, this.episode);
	}
    });

}

HistoryTvModel.prototype.extraInfo = function() {
    return this.episodeNumber + ' ' + this.title;
};

function PopularMovieModel(_history) {
    if (!(this instanceof PopularMovieModel)) {
	return null;
    }

    this.title = _history.title || '';
    this.url = '/movie/' + _history.id + '/' + EH.urlTitle(this.title);
    this.image = EH.url.shows.episode + EH.url.defaultImage.episode;
    this.watchedId = _history.watched_id;
    this.utcTimestamp = _history.utc_timestamp * 1000;

    if (_history.image) {
	this.image = 'http://img.episodehunter.tv/' + _history.image + '/4';
    }

}

PopularMovieModel.prototype.extraInfo = function() {
    return '';
};
