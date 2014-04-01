/* exported PopularEpisodeModel, PopularMovieModel */
function PopularEpisodeModel(_popular) {
    if (!(this instanceof PopularEpisodeModel)) {
        return null;
    }

    this.title = _popular.series_name || '';
    this.url = '/tv/' + _popular.tv_id + '/' + EH.urlTitle(this.title);
    this.poster = EH.url.series.poster + EH.url.defaultImage.poster;
    this.views = _popular.views || 0;

    if (_popular.image) {
        this.poster = EH.url.series.poster + _popular.image;
    }

}

function PopularMovieModel(_popular) {
    if (!(this instanceof PopularMovieModel)) {
        return null;
    }

    this.title = _popular.title || '';
    this.url = '/movie/' + _popular.id + '/' + EH.urlTitle(this.title);
    this.poster = EH.url.movie.poster + EH.url.defaultImage.poster;
    this.views = _popular.views || 0;

    if (_popular.image) {
        this.poster = EH.url.movie.poster + _popular.image;
    }

}
