/* exported NowWatchingModel */

function NowWatchingModel(options) {
    if (options.parent) {
        options.parent.call(this, options);
    }
    this.progress  = options.progress || 0;
}
