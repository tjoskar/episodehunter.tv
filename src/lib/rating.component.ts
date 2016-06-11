import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'eh-rating',
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
            <p (click)="vote(1)" (mouseenter)="setRating(1)" [class.selected]="rating > 0" [class.current]="currentRating === 1"><span>1</span></p>
            <p (click)="vote(2)" (mouseenter)="setRating(2)" [class.selected]="rating > 1" [class.current]="currentRating === 2"><span>2</span></p>
            <p (click)="vote(3)" (mouseenter)="setRating(3)" [class.selected]="rating > 2" [class.current]="currentRating === 3"><span>3</span></p>
            <p (click)="vote(4)" (mouseenter)="setRating(4)" [class.selected]="rating > 3" [class.current]="currentRating === 4"><span>4</span></p>
            <p (click)="vote(5)" (mouseenter)="setRating(5)" [class.selected]="rating > 4" [class.current]="currentRating === 5"><span>5</span></p>
            <p (click)="vote(6)" (mouseenter)="setRating(6)" [class.selected]="rating > 5" [class.current]="currentRating === 6"><span>6</span></p>
            <p (click)="vote(7)" (mouseenter)="setRating(7)" [class.selected]="rating > 6" [class.current]="currentRating === 7"><span>7</span></p>
            <p (click)="vote(8)" (mouseenter)="setRating(8)" [class.selected]="rating > 7" [class.current]="currentRating === 8"><span>8</span></p>
            <p (click)="vote(9)" (mouseenter)="setRating(9)" [class.selected]="rating > 8" [class.current]="currentRating === 9"><span>9</span></p>
            <p (click)="vote(10)" (mouseenter)="setRating(10)" [class.selected]="rating > 9" [class.current]="currentRating === 10"><span>10</span></p>
        </div>
        <div class="clear"></div>
    </div>
    `,
    directives: [],
    providers: []
})
class RatingComponent {
    @Input() showId;
    @Input() movieId;
    showRating = false;
    totalRating = 0;
    totalVotes = 0;
    oldRating = 0;
    rating = 0;

    ngAfterContentInit() {
        // input
        const result = {
            totalScore: 82,
            totalVotes: 11,
            yourVote: 9
        };
        this.totalRating = Math.round(result.totalScore * 10 / result.totalVotes);
        this.totalVotes = result.totalVotes;
        this.oldRating = result.yourVote || 0;
        this.setRating(result.yourVote);
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

export default RatingComponent;
