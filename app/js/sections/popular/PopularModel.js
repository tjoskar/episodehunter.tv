/* exported PopularModel */
function PopularModel(options) {
    if (options.parent) {
        options.parent.call(this, options);
    }
    this.views  = options.views || 0;
}
