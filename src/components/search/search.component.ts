import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'eh-search',
    template: require('./search.html'),
    providers: [ SearchService ]
})
export class SearchComponet {
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
