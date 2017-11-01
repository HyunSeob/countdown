"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MS_IN_SECOND = 1000;
var MS_IN_MINUTE = 60 * MS_IN_SECOND;
var MS_IN_HOUR = 60 * MS_IN_MINUTE;
var MS_IN_DAY = 24 * MS_IN_HOUR;
var Countdown = /** @class */ (function () {
    function Countdown(future) {
        this.future = future;
    }
    Countdown.prototype.differenceFromNow = function () {
        var now = new Date();
        var diff = this.future.getTime() - now.getTime();
        if (diff < 0) {
            diff = 0;
        }
        var days = Math.floor(diff / MS_IN_DAY);
        diff = diff - days * MS_IN_DAY;
        var hours = Math.floor(diff / MS_IN_HOUR);
        diff = diff - hours * MS_IN_HOUR;
        var minutes = Math.floor(diff / MS_IN_MINUTE);
        diff = diff - minutes * MS_IN_MINUTE;
        var seconds = Math.floor(diff / MS_IN_SECOND);
        return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    };
    Countdown.prototype.observe = function (subscriber) {
        var _this = this;
        setInterval(function () {
            subscriber(_this.differenceFromNow());
        }, MS_IN_SECOND);
    };
    return Countdown;
}());
exports.default = Countdown;
