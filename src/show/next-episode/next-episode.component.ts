import {Component, Input} from '@angular/core';
import utility from '../../lib/utility';
import {NextEpisodeService} from './next-episode.service';

@Component({
    selector: 'eh-next-episode',
    template: `
        <h3>Next episode to watch</h3>
        <div class="singel-episode-img">
            <span>{{model.episodeNumber}} {{model.name}}</span>
            <img src="{{model.image}}" class="episode-list-no-img" alt="" width="218">
        </div>
        <span class="airs"><span [style.color]="model.airColor">{{model.airString}}</span></span>
    `,
    directives: [],
    providers: [NextEpisodeService]
})
class NextEpisodeComponent {
    @Input() showId;
    @Input() updateEmitter;
    service: NextEpisodeService;
    subscriber;
    model = {};

    constructor(service: NextEpisodeService) {
        this.service = service;
    }

    updateModel(episode) {
        const newModel: any = {};
        if (episode) {
            const [airStr, color] = this.getAirString(episode.firstAired);
            newModel.airString = airStr;
            newModel.airColor = color;
            newModel.episodeNumber = this.getEpisodeNumber(episode.season, episode.episode);
            newModel.name = episode.name + Math.random();
            newModel.image = this.getEpisodeImage(episode.image);
        }

        this.model = newModel;
    }

    ngOnInit() {
        const e = {
            'id': 790,
            'name': 'Winter Is Coming',
            'episode': 1,
            'season': 1,
            'firstAired': '2011-04-17',
            'image': '',
            'watched': '2012-09-01T17:44:01.000Z'
        };
        this.updateModel(e);

        this.subscriber = this.updateEmitter.subscribe(
            episode => {
                console.log('On update from next-episode');
                this.updateModel(e);
            }
        );
    }
    ngAfterContentChecked() {
        console.log('check next-episode');
    }

    getEpisodeImage(image) {
        return `http://img.episodehunter.tv/episode/${image || '1363113862.png'}`;
    }

    getAirString(firstAired) {
        /*
            Serious, components shouldn't be aware of any color. Fix this.
         */
        if (firstAired) {
            const date = new Date(firstAired);
            if (date.getTime() > utility.time.now()) {
                return [`Aired: ${firstAired}`, '#03a37e'];
            } else {
                return [`Airs: ${firstAired}`, '#D50000'];
            }
        } else {
            return ['-', '#03a37e'];
        }
    }

    getEpisodeNumber(seasonNumber, episodeNumber) {
        return `S${('0' + seasonNumber).slice(-2)}E${('0' + episodeNumber).slice(-2)}`;
    }

    ngOnDestroy() {
        if (!this.subscriber.isUnsubscribed) {
            this.subscriber.unsubscribe();
        }
    }

}

export default NextEpisodeComponent;
export {NextEpisodeComponent};
