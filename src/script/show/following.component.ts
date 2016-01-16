import {Component, Input} from 'angular2/core';

@Component({
    selector: 'eh-following-button',
    template: `
        <button (click)="follow()" [disabled]="disabled" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            {{followingText}}
        </button>
    `,
    directives: [],
    providers: []
})
class FollowingButtonComponent {
    @Input() showId;
    disabled = true;
    followingText;
    followingStatus;

    ngAfterContentInit() {
        // fetch
        const result = {
            following: true,
            since: '2015-08-12'
        };
        this.disabled = false;
        this.followingStatus = result.following ? 1 : 0;
        this.updateFollowingText();
    }

    onChanges() {
        console.log('check following');
    }

    follow() {
        console.log('toggle folow status for show: ', this.showId);
        this.disabled = true;
        this.followingStatus = this.followingStatus ? 0 : 1;
        this.updateFollowingText();

        // updateServer
        // update client
        setTimeout(() => this.disabled = false, 2000);
    }

    updateFollowingText() {
        this.followingText = [
            'Follow this show',
            'Stop follow this show'
        ][this.followingStatus];
    }

}

export default FollowingButtonComponent;
