describe('Event: ', function(){

    beforeEach(function() {
        EH.deleteAllEvents();
    });

    it('should receive message on trigger', function() {
        var context = {'called': 0};
        EH.on('eventName', function() {
            this.called++;
        }, context);
        EH.trigger('eventName');

        expect(context.called).toEqual(1);
    });

    it('the "on" method should accept arguments', function() {
        var context = {'called': 0, 'result': 1};
        EH.on('eventName', function(n) {
            this.called++;
            this.result += n;
        }, context);
        EH.trigger('eventName', 5);

        expect(context.called).toEqual(1);
        expect(context.result).toEqual(6);
    });

    it('should accept multiply listeners', function() {
        var context = {'called': 0, 'result': 1};
        EH.on('eventName', function(n) {
            this.called++;
            this.result += n;
        }, context);

        EH.on('eventName', function() {
            this.called++;
        }, context);

        EH.trigger('eventName', 5);

        expect(context.called).toEqual(2);
        expect(context.result).toEqual(6);
    });

    it('should be able to queue events', function() {
        var context = {'called': 0};
        EH.trigger('eventName');
        EH.trigger('eventName');

        EH.on('eventName', function() {
            this.called++;
        }, context, true);

        expect(context.called).toEqual(2);
    });

    it('should be able to queue events with arguments', function() {
        var context = {'called': 0, 'sum': 0};
        var context2 = {'called': 0, 'sum': 0};
        EH.trigger('eventName', 3);
        EH.trigger('eventName', 5);

        EH.on('eventName', function(n) {
            this.called++;
            this.sum += n;
        }, context, true);

        EH.on('eventName', function(n) {
            this.called++;
            this.sum += n;
        }, context2);

        expect(context.called).toEqual(2);
        expect(context.sum).toEqual(8);
        expect(context2.called).toEqual(0);
        expect(context2.sum).toEqual(0);
    });

    it('should be able to remove event listeners', function() {
        var context = {'called': 0, 'sum': 0};
        EH.on('eventName', function(n) {
            this.called++;
            this.sum += n;
        }, context);
        EH.on('eventName', function(n) {
            this.called++;
            this.sum += n;
        }, context);
        EH.trigger('eventName', 3);
        EH.off('eventName');
        EH.trigger('eventName', 3);

        expect(context.called).toEqual(2);
        expect(context.sum).toEqual(6);
    });

    it('should be able to remove single event listeners', function() {
        var context = {'funCalled': 0, 'fun2Called': 0};
        var fun = function() {
            this.funCalled++;
        };
        var fun2 = function() {
            this.fun2Called++;
        };
        EH.on('eventName', fun, context);
        EH.on('eventName', fun2, context);
        EH.trigger('eventName');
        EH.off('eventName', fun);
        EH.trigger('eventName');

        expect(context.funCalled).toEqual(1);
        expect(context.fun2Called).toEqual(2);
    });

});
