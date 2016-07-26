import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ProgressDirective } from './progress.directive';

@Component({
    selector: 'eh-progress',
    template: `
        <h3>Your progress</h3>
        <p>You've seen <span>{{numberWatchedEpisodes}}</span> out of <span>{{numberTotalEpisodes}}</span> episodes.</p>
        <p *ngIf="showGoodWork"><span>Good work!</span></p>
        <canvas height="200" width="200" progress [percent]="percent"></canvas>
    `,
    directives: [ ProgressDirective ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressComponent {
    @Input() numberWatchedEpisodes;
    @Input() numberTotalEpisodes;
    percent = 0;
    showGoodWork = false;

    ngOnInit() {
        this.percent = Math.floor((this.numberWatchedEpisodes / this.numberTotalEpisodes) * 100);
        if (this.percent === 100) {
            this.showGoodWork = true;
        }
    }

}
