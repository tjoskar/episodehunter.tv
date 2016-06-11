import {Component, Input} from '@angular/core';
import ProgressDirective from './progress.directive';

@Component({
    selector: 'eh-progress',
    template: `
        <h3>Your progress</h3>
        <p>You've seen <span>{{watchedEpisodes}}</span> out of <span>{{totalEpisodes}}</span> episodes.</p>
        <p *ngIf="showGoodWork"><span>Good work!</span></p>
        <canvas height="200" width="200" progress [percent]="percent"></canvas>
    `,
    directives: [ProgressDirective],
    providers: []
})
class ProgressComponent {
    @Input() showId;
    @Input() updateEmitter;
    subscriber;
    watchedEpisodes;
    totalEpisodes;
    percent = 0;
    showGoodWork = false;

    ngAfterContentInit() {
        // fetch
        this.update();
        this.subscriber = this.updateEmitter.subscribe(
            () => {
                console.log('Update from progress');
                this.update();
            }
        );
    }

    ngAfterContentChecked() {
        console.log('check progress');
    }

    update() {
        const result = {
            watchedEpisodes: Math.floor(Math.random() * 75),
            totalEpisodes: 75
        };

        this.updateContent(result);
    }

    updateContent(serverResult) {
        this.watchedEpisodes = serverResult.watchedEpisodes;
        this.totalEpisodes = serverResult.totalEpisodes;
        this.percent = Math.floor((this.watchedEpisodes / this.totalEpisodes) * 100);
        if (this.percent === 100) {
            this.showGoodWork = true;
        }
    }

    ngOnDestroy() {
        if (!this.subscriber.isUnsubscribed) {
            this.subscriber.unsubscribe();
        }
    }

}

export default ProgressComponent;
export {ProgressComponent};
