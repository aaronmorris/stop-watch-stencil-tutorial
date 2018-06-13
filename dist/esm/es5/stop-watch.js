/*! Built with http://stenciljs.com */
import { h } from './stopwatchbox.core.js';
var StopWatchComponent = /** @class */ (function () {
    function StopWatchComponent() {
    }
    StopWatchComponent.prototype.render = function () {
        return (h("div", { class: "watch-wrapper" }, h("div", { class: "watch" }, h("div", { class: "unit" }, this.hours), h("div", { class: "sep" }, " : "), h("div", { class: "unit" }, this.minutes), h("div", { class: "sep" }, " : "), h("div", { class: "unit" }, this.seconds), h("div", { class: "sep" }, " : "), h("div", { class: "unit" }, this.milliseconds))));
    };
    Object.defineProperty(StopWatchComponent, "is", {
        get: function () { return "stop-watch"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StopWatchComponent, "properties", {
        get: function () {
            return {
                "hours": {
                    "type": String,
                    "attr": "hours"
                },
                "milliseconds": {
                    "type": String,
                    "attr": "milliseconds"
                },
                "minutes": {
                    "type": String,
                    "attr": "minutes"
                },
                "seconds": {
                    "type": String,
                    "attr": "seconds"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StopWatchComponent, "style", {
        get: function () { return ".watch-wrapper {\n    background: #2196F3;\n    padding: 20px;\n    display: block;\n    font-family: monospace;\n    -webkit-box-shadow: 0 16px 16px 0 rgba(0,0,0,0.1);\n    box-shadow: 0 16px 16px 0 rgba(0,0,0,0.1);\n}\n\n.watch {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: space-evenly;\n    -webkit-justify-content: space-evenly;\n    -ms-flex-pack: space-evenly;\n    justify-content: space-evenly;\n    z-index: 2;\n}\n\n.watch .unit, .watch .sep {\n    font-size: 32px;\n    color: #FFEB3B;\n}"; },
        enumerable: true,
        configurable: true
    });
    return StopWatchComponent;
}());
var WatchService = /** @class */ (function () {
    function WatchService() {
    }
    /**
     * @description Calculates the units and sets in string format
     * @param unit value of the unit in numbers
     * @returns {string} the string representation fo the unit's value witha t least 2 digits
     */
    WatchService.prototype.getTimeString = function (unit) {
        return (unit ? (unit > 9 ? unit : "0" + unit) : "00").toString();
    };
    return WatchService;
}());
var StopWatchBoxComponent = /** @class */ (function () {
    function StopWatchBoxComponent() {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.ms = 0;
        // The difference between @State and @Prop is that the view is not re-rendered if something changes in a @Prop. 
        // But if any of the @State models change, the view is rendered again.
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        this.milliseconds = '00';
        this.timer = null;
        this.isTimerRunning = false;
        this.watchService = new WatchService();
    }
    /**
     * @description SStarts the timer, updates every 10 milliseconds
     */
    StopWatchBoxComponent.prototype.start = function () {
        var _this = this;
        this.isTimerRunning = true;
        this.timer = setInterval(function () {
            _this.updateTime();
        }, 10);
    };
    /**
     * @description Updates the value of hte units in for the watch
     */
    StopWatchBoxComponent.prototype.updateTime = function () {
        this.ms++;
        if (this.ms >= 100) {
            this.ms = 0;
            this.ss++;
            if (this.ss >= 60) {
                this.ss = 0;
                this.mm++;
                if (this.mm >= 60) {
                    this.mm = 0;
                    this.hh++;
                }
            }
        }
        this.setTime();
    };
    /**
     * @description Updates the time for the watch component
     * Applies the detected change
     */
    StopWatchBoxComponent.prototype.setTime = function () {
        this.hours = this.watchService.getTimeString(this.hh);
        this.minutes = this.watchService.getTimeString(this.mm);
        this.seconds = this.watchService.getTimeString(this.ss);
        this.milliseconds = this.watchService.getTimeString(this.ms);
    };
    /**
     * @description Stops the watch
     */
    StopWatchBoxComponent.prototype.stop = function () {
        this.isTimerRunning = false;
        clearInterval(this.timer);
    };
    /**
     * @description Clears the time of the watch
     */
    StopWatchBoxComponent.prototype.clear = function () {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.ms = 0;
        this.setTime();
    };
    StopWatchBoxComponent.prototype.render = function () {
        var _this = this;
        return (h("div", { class: "watch-box" }, h("div", { class: "watch-container" }, h("stop-watch", { hours: this.hours, minutes: this.minutes, seconds: this.seconds, milliseconds: this.milliseconds })), h("div", { class: "action-container" }, h("button", { onClick: function () { return _this.start(); }, disabled: this.isTimerRunning }, "Start"), h("button", { onClick: function () { return _this.stop(); }, disabled: !this.isTimerRunning }, "Stop"), h("button", { onClick: function () { return _this.clear(); }, disabled: this.isTimerRunning }, "Clear"))));
    };
    Object.defineProperty(StopWatchBoxComponent, "is", {
        get: function () { return "stop-watch-box"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StopWatchBoxComponent, "properties", {
        get: function () {
            return {
                "hours": {
                    "state": true
                },
                "isTimerRunning": {
                    "state": true
                },
                "milliseconds": {
                    "state": true
                },
                "minutes": {
                    "state": true
                },
                "seconds": {
                    "state": true
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StopWatchBoxComponent, "style", {
        get: function () { return ".watch-box {\n    display: block;\n    height: 300px;\n    width: 300px;\n    margin: 0 auto;\n    padding-top: 20px;\n}\n  \n.watch-box .watch-container {\n    padding: 20px;\n    font-family: system-ui;\n}\n  \n.watch-box .actions-container {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: space-evenly;\n    -webkit-justify-content: space-evenly;\n    -ms-flex-pack: space-evenly;\n    justify-content: space-evenly;\n}\n  \n.watch-box .actions-container button {\n    border-width: 0;\n    padding: 10px;\n    outline: none;\n    border-radius: 2px;\n    -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\n    background-color: #333;\n    color: #ecf0f1;\n    cursor: pointer;\n}\n  \n.watch-box .actions-container button:hover {\n    background-color: #555;\n}\n  \n.watch-box .actions-container button[disabled] {\n    background-color: #dcdcdc;\n    color: black;\n    opacity: 0.3;\n    cursor: not-allowed;\n}"; },
        enumerable: true,
        configurable: true
    });
    return StopWatchBoxComponent;
}());
export { StopWatchComponent as StopWatch, StopWatchBoxComponent as StopWatchBox };
