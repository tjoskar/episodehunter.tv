export interface Episode {
    id: number;
    name: string;
    episode: number;
    season: number;
    firstAired: Date;
    image: string;
    watched: Date;
};

export interface Seasons {
    [season: string]: Episode;
}
