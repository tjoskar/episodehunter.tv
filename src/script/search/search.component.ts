import {Component, EventEmitter, Output} from 'angular2/core';
import {SearchService} from './search.service';
import MovieRenderer from './movie.renderer';
import ShowRenderer from './show.renderer';

@Component({
    selector: 'eh-search',
    templateUrl: 'script/search/template/search.html',
    directives: [MovieRenderer, ShowRenderer],
    providers: [SearchService]
})
class SearchComponet {
    @Output() closeDialog = new EventEmitter();
    searchEmitter = new EventEmitter<string>();
    service: SearchService;
    shows = [];
    movies = [];

    constructor(service: SearchService) {
        this.service = service;
    }

    ngAfterContentInit() {
        this.searchEmitter
            .filter(term => term.length >= 2)
            .debounceTime(500)
            .flatMap((term: any) => this.service.search(term))
            .subscribe(
                ({shows, movies}: any) => {
                    this.shows = shows;
                    this.movies = movies;
                }
            );
    }

}

export default SearchComponet;
export {SearchComponet};
