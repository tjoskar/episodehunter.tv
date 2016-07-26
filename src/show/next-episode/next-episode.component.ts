import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Episode } from '../../model/episode';
import utility from '../../lib/utility';

@Component({
    selector: 'eh-next-episode',
    template: `
        <h3>Next episode to watch</h3>
        <div class="singel-episode-img">
            <span>{{episodeNumber}} {{name}}</span>
            <img src="{{episodeImage}}" class="episode-list-no-img" alt="" width="218">
        </div>
        <span class="airs"><span [style.color]="airColor">{{airString}}</span></span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NextEpisodeComponent {
    @Input() nextEpisode: Episode;
    arir: string[];

    get episodeNumber() {
        return utility.episodeNumber(this.nextEpisode.season, this.nextEpisode.episode);
    }

    get name() {
        return this.nextEpisode.name;
    }

    get episodeImage() {
        return `http://img.episodehunter.tv/episode/${this.nextEpisode.image || '1363113862.png'}`;
    }

    get airColor() {
        return this.getAirString(this.nextEpisode.firstAired)[1];
    }

    get airString() {
        return this.getAirString(this.nextEpisode.firstAired)[0];
    }

    getAirString(firstAired: Date) {
        /*
            Serious, components shouldn't be aware of any color. Fix this.
         */
        console.log('havy calculation');
        if (this.arir) {
            return this.arir;
        }
        if (utility.time.isValidDate(firstAired)) {
            if (firstAired.getTime() > utility.time.now()) {
                this.arir = [`Aired: ${firstAired}`, '#03a37e'];
            } else {
                this.arir = [`Airs: ${firstAired}`, '#D50000'];
            }
        } else {
            this.arir = ['-', '#03a37e'];
        }
        return this.arir;
    }

}
