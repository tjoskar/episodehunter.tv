import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
    selector: '[progress]'
})
class ProgressDirective {
    @Input() percent;
    private ctx;
    private speed = 4;
    private x = 100;
    private y = 100;
    private radius = 50;
    private degrees;
    private _percent;
    private _animationOffset;
    private _interval;

    constructor(el: ElementRef) {
        this.ctx = el.nativeElement.getContext('2d');
    }

    ngAfterContentChecked() {
        console.log('check progress directive');
    }

    ngOnChanges() {
        console.log('Progress changes');
        this.setPercent(this.percent);
        this.startAnimation();
    }

    clear() {
        this.ctx.clearRect(0, 0, 200, 200);
    };

    setPercent(percent) {
        this.degrees = 360 * (percent / 100);
        this._animationOffset = this.degrees;
        this._percent = percent;
    };

    startAnimation() {
        this.clear();
        clearInterval(this._interval);
        this._interval = setInterval(() => this.drawAnimation(), 10);
    };

    drawArc() {
        const startDegrees = -90;
        const endDegrees = startDegrees + this.degrees - this._animationOffset;
        // Degrees to radians
        const startAngle = startDegrees / 180 * Math.PI;
        const endAngle = endDegrees / 180 * Math.PI;
        // Draw arc
        this.setLineStyles();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
        this.ctx.stroke();
        this.drawText();
    };

    setLineStyles() {
        this.ctx.strokeStyle = 'rgb(3, 163, 126)';
        this.ctx.lineWidth = 15;
    };

    drawAnimation() {
        if (this._animationOffset < 0) {
            this._animationOffset = 0;
        }
        this.clear();
        this.drawArc();
        this._animationOffset -= this.speed;
        if (this._animationOffset < 0) {
            clearInterval(this._interval);
        }
    };

    drawText() {
        this.ctx.fillStyle = '#333';
        this.ctx.font = `16px 'Lato', sans-serif`;
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(' ' + this._percent + '%', this.x, this.y);
    };

}

export default ProgressDirective;