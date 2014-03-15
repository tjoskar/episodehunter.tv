/* exported nowWatchingTvModel, nowWatchingMovieModel */
function nowWatchingTvModel(_nowWatching) {
  if (!(this instanceof nowWatchingTvModel)) {
    return null;
  }

  this.title = _nowWatching.shown_name || '';
  this.url = '/tv/' + _nowWatching.tv_id + '/' + EH.urlTitle(this.title);
  this.poster = EH.url.shows.poster + EH.url.defaultImage.poster;
  this.progress = _nowWatching.progress || 0;

  if (_nowWatching.image) {
    this.poster = EH.url.shows.poster + _nowWatching.image;
  }

}

function nowWatchingMovieModel(_nowWatching) {
  if (!(this instanceof nowWatchingMovieModel)) {
    return null;
  }

  this.title = _nowWatching.title || '';
  this.url = '/movie/' + _nowWatching.movie_id + '/' + EH.urlTitle(this.title);
  this.poster = EH.url.movie.poster + EH.url.defaultImage.poster;
  this.progress = _nowWatching.progress || 0;

  if (_nowWatching.image) {
    this.poster = EH.url.movie.poster + _nowWatching.image;
  }

}
