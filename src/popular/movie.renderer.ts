import {Component, Input} from '@angular/core';
import utility from '../lib/utility';
import {LazyLoadImage} from '../lib/lazy-load-image';

@Component({
    selector: 'movie-renderer',
    styles: [`
        img {
            width: 185px;
            min-height: 185px;
        }
    `],
    template: `
    <a href="{{movieLink}}">
        <div class="poster">
            <hgroup class="views">
                <p class="views">{{views}}</p>
                <p class="text">views</p>
            </hgroup>
            <img alt="" [defaultImg]="'http://img.episodehunter.tv/serie/poster/1363113862.png'" [lazyLoad]="moviePoster" [offset]="500">
            <hgroup class="title">
                <p>{{movieTitle}}</p>
            </hgroup>
        </div>
    </a>`,
    directives: [LazyLoadImage]
})
class MovieRenderer {
    @Input() movie;

    get views() {
        return this.movie.views;
    }

    get movieTitle() {
        return this.movie.title;
    }

    get movieLink() {
        // Todo: Fix this when we have a movie page
        const urlFrendlyMovieTitle = utility.urlTitle(this.movie.title);
        return `http://episodehunter.tv/movie/${this.movie.ids.id}/${urlFrendlyMovieTitle}`;
    }

    get moviePoster() {
        if (this.movie.poster) {
            return `http://img.episodehunter.tv/movie/poster/${this.movie.poster}`;
        }
        return 'http://img.episodehunter.tv/serie/poster/1363113862.png';
    }

}

export default MovieRenderer;
export {MovieRenderer};