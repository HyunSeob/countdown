"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BASE_DAYS = 1;
var BASE_HOURS = 9;
var Countdown = /** @class */ (function () {
    function Countdown(future) {
        this.future = future;
    }
    Countdown.prototype.differenceFromNow = function () {
        var now = new Date();
        var diff = new Date(this.future.getTime() - now.getTime());
        return {
            days: diff.getDate() - BASE_DAYS,
            hours: diff.getHours() - BASE_HOURS,
            minutes: diff.getMinutes(),
            seconds: diff.getSeconds()
        };
    };
    Countdown.prototype.differenceFromNowString = function () {
        var diff = this.differenceFromNow();
        Object.keys(diff).forEach(function (key) {
            if (diff[key] <= 0) {
                diff[key] = 0;
            }
        });
        return diff.days + ":" + diff.hours + ":" + diff.minutes + ":" + diff.seconds;
    };
    return Countdown;
}());
exports.default = Countdown;
