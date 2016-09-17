import { Component, Input } from '@angular/core';
import utility from '../../lib/utility';

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
            <img src="http://img.episodehunter.tv/serie/poster/1363113862.png" alt="" [lazyLoad]="moviePoster" [offset]="500">
            <div class="title">
                <p>{{movieTitle}}</p>
            </div>
        </div>
    </a>`,
})
export class MovieRenderer {
    @Input() movie;

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
