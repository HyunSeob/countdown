"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var countdown_1 = require("./countdown");
function showCountdown(element, future) {
    var countdown = new countdown_1.default(future);
    element.innerText = countdown.differenceFromNowString();
    setInterval(function () {
        element.innerText = countdown.differenceFromNowString();
    }, 1000);
}
exports.default = showCountdown;
