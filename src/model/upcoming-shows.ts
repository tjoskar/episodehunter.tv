import { Show } from './show';

export interface UpcomingEpisode {
    ids: {
        id: number
    };
    title: string;
    season: number;
    episode: number;
    airs: Date | string;
    thumbnail: string;
    show: Show;
};

export interface UpcomingShows {
    justAired: UpcomingEpisode[];
    thisWeek: UpcomingEpisode[];
    nextWeek: UpcomingEpisode[];
    upcoming: UpcomingEpisode[];
    tba: UpcomingEpisode[];
}
