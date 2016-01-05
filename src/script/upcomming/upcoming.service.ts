import {Injectable} from 'angular2/core';
import UpcomingRepository from './upcoming.repository';
import utility from '../lib/utility';

@Injectable()
class UpcomingService {
    repo: UpcomingRepository;

    constructor(repo: UpcomingRepository) {
        this.repo = repo;
    }

    get() {
        return this.repo
            .get()
            .map(episodes => this.groupeEpisodes(episodes));
    }

    groupeEpisodes(upcomingEpisodes) {
        const justAired = [];
        const thisWeek = [];
        const nextWeek = [];
        const upcoming = [];
        const tba = [];
        const justAiredTimestamp = utility.time.futureDate(-2);
        const nowTimestamp = utility.time.today();
        const thisWeekTimestamp = utility.time.nextSunday(nowTimestamp);
        const nextWeekTimestamp = utility.time.nextSunday(thisWeekTimestamp);

        upcomingEpisodes.forEach(episode => {
            episode.airs = episode.airs ? new Date(episode.airs) : -1;
            if (episode.airs <= justAiredTimestamp) {
                tba.push(episode);
            } else if (episode.airs <= nowTimestamp) {
                justAired.push(episode);
            } else if (episode.airs <= thisWeekTimestamp) {
                thisWeek.push(episode);
            } else if (episode.airs <= nextWeekTimestamp) {
                nextWeek.push(episode);
            } else {
                upcoming.push(episode);
            }
        });

        return {justAired, thisWeek, nextWeek, upcoming, tba};
    }

}


export default UpcomingService;
