var EH = EH || {};

// Events
// ---------------
// Bind a callback function to an event.
//
//     EH.on('avalanche', function() { alert('HELP!'); });
//     EH.trigger('avalanche');
//     EH.off('avalanche');
//
(function(exports) {

    /**
     * Array of registered events
     * @type {Object}
     */
    var eventList = {};

    /**
     * Array of old messages.
     * Used if an event want to get already send triggers
     * @type {Array}
     */
    var oldMessage = [];

    /**
     * Bind an event to a 'callback' function.
     * @param  {String}   eventName     Name of the event
     * @param  {function} callback      Callback function
     * @param  {Object}   context       Context of the function 'callback'
     * @param  {Boolian}  getOldMessage Determines if old triggers should be taken under account
     * @return {undefined}
     */
    exports.on = function(eventName, callback, context, getOldMessage) {
        if (!(eventName in eventList)) {
            eventList[eventName] = [];
        }
        eventList[eventName].push({
            'callback': callback,
            'context': context
        });

        if (getOldMessage) {
            oldMessage.forEach(function(val) {
                if (val.eventName === eventName) {
                    callback.apply(context, val.args);
                }
            });
        }
    };

    /**
     * Remove one or all events from the event-list. If 'callback' is null all events
     * with name 'eventName' will be removed.
     * @param  {String}   eventName  Name of the event
     * @param  {Function} callback   Callback function for selecting a specific event
     * @return {undefined}
     */
    exports.off = function(eventName, callback) {
        if (eventName in eventList) {
            if (!callback) {
                delete eventList[eventName];
            } else {
                var evList = eventList[eventName];
                for (var i = evList.length-1; i >= 0; i--) {
                    if (evList[i].callback === callback) {
                        evList.splice(i, 1);
                    }
                }
            }
        }
    };

    /**
     * Trigger one or many events, firing all bound callbacks. All arguments will
     * be passed throw to the callback function.
     * @param  {String} eventName   Name of the event
     * @param  {*args}  arguments   Will be passed throw to the callback function
     * @return {undefined}
     */
    exports.trigger = function(eventName) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        oldMessage.push({
            'eventName': eventName,
            'args': args
        });
        if (eventName in eventList) {
            eventList[eventName].forEach(function(currEvent) {
                currEvent.callback.apply(currEvent.context, args);
            });
        }
    };

    /**
     * Remove all events
     * @return {undefined}
     */
    exports.deleteAllEvents = function() {
        eventList = {};
        oldMessage = [];
    };

})(EH);
