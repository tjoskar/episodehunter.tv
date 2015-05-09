'use strict';

import BaseRepository from '../lib/base.repository';
import UpcomingModel from './upcoming.model';

class UpcomingRepository extends BaseRepository {

    constructor(http) {
        super(http);
        this.apiEndpoint = 'http://localhost:8080/user/upcoming';
    }

    get() {
        return super.get()
            .then(data => {
                return _(data.episodes)
                    .map(e => new UpcomingModel(e))
                    .groupBy(u => u.group.order)
                    .map(groupedEpisodeList => {
                        return {
                            headline: _.first(groupedEpisodeList).group.headline,
                            episodes: _.sortBy(groupedEpisodeList, episode => episode.airs)
                        };
                    })
                    .value();
            });
    }
}

UpcomingRepository.$inject = ['$http'];
export default UpcomingRepository;
