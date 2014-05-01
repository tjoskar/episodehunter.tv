var EH = EH || {};

(function(exports) {

    var eventList = {};
    var oldMessage = [];

    exports.on = function(eventName, fun, context, getOldMessage) {
        if (!(eventName in eventList)) {
            eventList[eventName] = [];
        }
        eventList[eventName].push({
            'fun': fun,
            'context': context
        });

        if (getOldMessage) {
            oldMessage.forEach(function(val) {
                if (val.eventName === eventName) {
                    fun.apply(context, val.args);
                }
            });
        }
    };

    exports.off = function(eventName, fun) {
        if (eventName in eventList) {
            if (!fun) {
                delete eventList[eventName];
            } else {
                var evList = eventList[eventName];
                for (var i = evList.length-1; i >= 0; i--) {
                    if (evList[i].fun === fun) {
                        evList.splice(i, 1);
                    }
                }
            }
        }
    };

    exports.trigger = function(eventName) {
        var args = Array.prototype.slice.call(arguments);
        args.splice(0, 1);
        oldMessage.push({
            'eventName': eventName,
            'args': args
        });
        if (eventName in eventList) {
            eventList[eventName].forEach(function(currEvent) {
                currEvent.fun.apply(currEvent.context, args);
            });
        }
    };

    exports.deleteAllEvents = function() {
        eventList = {};
        oldMessage = [];
    };

})(EH);
