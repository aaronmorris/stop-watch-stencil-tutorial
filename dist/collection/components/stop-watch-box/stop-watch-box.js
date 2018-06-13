import { WatchService } from "../../services/watch-service";
export class StopWatchBoxComponent {
    constructor() {
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
    start() {
        this.isTimerRunning = true;
        this.timer = setInterval(() => {
            this.updateTime();
        }, 10);
    }
    /**
     * @description Updates the value of hte units in for the watch
     */
    updateTime() {
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
    }
    /**
     * @description Updates the time for the watch component
     * Applies the detected change
     */
    setTime() {
        this.hours = this.watchService.getTimeString(this.hh);
        this.minutes = this.watchService.getTimeString(this.mm);
        this.seconds = this.watchService.getTimeString(this.ss);
        this.milliseconds = this.watchService.getTimeString(this.ms);
    }
    /**
     * @description Stops the watch
     */
    stop() {
        this.isTimerRunning = false;
        clearInterval(this.timer);
    }
    /**
     * @description Clears the time of the watch
     */
    clear() {
        this.hh = 0;
        this.mm = 0;
        this.ss = 0;
        this.ms = 0;
        this.setTime();
    }
    render() {
        return (h("div", { class: "watch-box" },
            h("div", { class: "watch-container" },
                h("stop-watch", { hours: this.hours, minutes: this.minutes, seconds: this.seconds, milliseconds: this.milliseconds })),
            h("div", { class: "action-container" },
                h("button", { onClick: () => this.start(), disabled: this.isTimerRunning }, "Start"),
                h("button", { onClick: () => this.stop(), disabled: !this.isTimerRunning }, "Stop"),
                h("button", { onClick: () => this.clear(), disabled: this.isTimerRunning }, "Clear"))));
    }
    static get is() { return "stop-watch-box"; }
    static get properties() { return {
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
    }; }
    static get style() { return "/**style-placeholder:stop-watch-box:**/"; }
}
