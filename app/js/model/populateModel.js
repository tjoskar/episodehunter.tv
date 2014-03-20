/* exported populareEpisodeModel, popularMovieModel */
function populareEpisodeModel(_popular) {
    if (!(this instanceof populareEpisodeModel)) {
        return null;
    }

    this.title = _popular.shown_name || '';
    this.url = '/tv/' + _popular.tv_id + '/' + EH.urlTitle(this.title);
    this.poster = EH.url.shows.poster + EH.url.defaultImage.poster;
    this.views = _popular.views || 0;

    if (_popular.image) {
        this.poster = EH.url.shows.poster + _popular.image;
    }

}

function popularMovieModel(_popular) {
    if (!(this instanceof popularMovieModel)) {
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
