var Collection = function(_headline, _media) {
    if (!(this instanceof Collection)) {
	return null;
    }

    this.headline = _headline || '';
    this.media = _media || [];

    Object.defineProperty(this, 'length', {
	get: function () {
	    return this.media.length;
	}
    });

};

Collection.prototype.getAll = function() {
    return this.media;
};

Collection.prototype.add = function(episode) {
    this.media.push(episode);
};

Collection.prototype.remove = function(index) {
    if (EH.isInt(index) && index >= 0) {
	this.media.splice(index, 1);
    }
};

Collection.prototype.size = function() {
    return this.media.length;
};

Collection.prototype.shuffle = function() {
    return this.media.sort(function() { return 0.5 - Math.random(); });
};

Collection.prototype.sortOn = function(key, reverse) {
    this.media.sort(function(left, right) {
	if (left[key] === right[key]) {
	    return 0;
	} else if (left[key] < right[key]) {
	    return -1;
	}
	return 1;
    });
    if (reverse) {
	this.media.reverse();
    }
    return this.media;
};
