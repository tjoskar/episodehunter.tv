import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { VoteResult } from '../../model/vote-result';

@Component({
    selector: 'eh-rating',
    styles: [ require('!raw!sass!./rating.scss') ],
    template: `
    <div (mouseleave)="hideRatingBar()" class="rating-holder">
        <div class="rating-bar-holder">
            <div class="rating-bar-content" [style.width.%]="totalRating"></div>
            <div class="text-holder">
                <div style="display: inline;" id="total-rating">{{totalRating}}%</div>
                <span id="total-votes">({{totalVotes}} votes)</span>
            </div>
        </div>
        <div (mouseenter)="showRatingBar()" id="user-vote">{{getOldRating()}}</div>
        <div class="bar-rating" [class.hide]="!showRating">
            <template ngFor let-i [ngForOf]="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]">
                <p (click)="vote(i)" (mouseenter)="setRating(i)" [class.selected]="rating > i - 1" [class.current]="currentRating === i"><span>{{i}}</span></p>
            </template>
        </div>
        <div class="clear"></div>
    </div>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RatingComponent {
    @Input() voteResult: VoteResult;
    showRating = false;
    totalRating = 0;
    totalVotes = 0;
    oldRating = 0;
    rating = 0;

    ngOnInit() {
        this.totalRating = Math.round(this.voteResult.totalScore * 10 / this.voteResult.totalVotes);
        this.totalVotes = this.voteResult.totalVotes;
        this.oldRating = this.voteResult.userVote || 0;
        this.setRating(this.oldRating);
    }

    vote(rating) {
        console.log('Voting ' + rating);
        this.setRating(rating);
        this.totalVotes += this.oldRating ? 0 : 1;
        this.totalRating += rating - this.oldRating;
        this.oldRating = rating;
        this.hideRatingBar();
        // Make http call and fix all values
    }

    getOldRating() {
        return this.oldRating ? `${this.oldRating * 10}%` : 'Vote';
    }

    setRating(rating) {
        this.rating = rating;
    }

    showRatingBar() {
        this.showRating = true;
    }

    hideRatingBar() {
        this.showRating = false;
    }

}
