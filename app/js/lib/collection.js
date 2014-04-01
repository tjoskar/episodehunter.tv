/**
 * Sets of models
 * @param {string} _headline Headline for this collection
 * @param {array}  _models   An array of models
 */
var Collection = function(_headline, _models) {
    if (!(this instanceof Collection)) {
        return null;
    }

    this.headline = _headline || '';
    this.models = _models || [];

    Object.defineProperty(this, 'length', {
        get: function () {
            return this.models.length;
        }
    });

};

/**
 * Get all models
 * @return {array}
 */
Collection.prototype.getAll = function() {
    return this.models;
};

/**
 * Add an model to the collection
 * @param {object}
 */
Collection.prototype.add = function(model) {
    this.models.push(model);
};

/**
 * Remove an model
 * @param  {int} index
 * @return {null}
 */
Collection.prototype.remove = function(index) {
    if (EH.isInt(index) && index >= 0) {
        this.models.splice(index, 1);
    }
};

/**
 * Get the current number of models in the collection
 * @return {int} number of elements
 */
Collection.prototype.size = function() {
    return this.models.length;
};

/**
 * Shuffle the list of models
 * @return {array} all models
 */
Collection.prototype.shuffle = function() {
    return this.models.sort(function() { return 0.5 - Math.random(); });
};

/**
 * Sort an model of a given attribute
 * @param  {mix}     key        attribute of an element to sort after
 * @param  {boolean} reverse    if the list of models should be sorted in revers order
 * @return {array}              all models (in sorted order)
 */
Collection.prototype.sortOn = function(key, reverse) {
    return this.models.sort(function(left, right) {
        if (left[key] === right[key]) {
            return 0;
        }

        if (reverse) {
            return (left[key] < right[key]) ? 1 : -1;
        } else {
            return (left[key] > right[key]) ? 1 : -1;
        }
    });
};
