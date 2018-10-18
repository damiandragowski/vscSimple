/// <reference path="clock.ts" />

namespace Time {
    export class AnalogClock implements Clock {
        private hourPointer : number;
        private minutePointer : number;
        constructor(hour: number = 12, minute: number = 0) {
            this.hourPointer = hour;
            this.minutePointer = minute;
        }
        tick() : number {
            return this.hourPointer*12*this.minutePointer;
        }
    }
}

