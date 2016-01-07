import {Component} from 'angular2/core';

@Component({
    selector: 'eh-popular-shows',
    templateUrl: 'script/popular/template/popular-shows.html'
})
class PopularShowComponet {

    constructor() {
        console.log('Popular shows');
    }

}

export default PopularShowComponet;
export {PopularShowComponet};
