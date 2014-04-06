function HistoryModel(options) {
    if (options.parent) {
        options.parent.call(this, options);
    }

    this.watchedID = options.watchedID;
    this.utcTimestamp = options.utcTimestamp * 1000;
}

HistoryModel.prototype.extraInfo = function() {
    if (this.episodeNumber) {
        return this.episodeNumber + ' ' + this.episodeName;
    }
    return '';
};
