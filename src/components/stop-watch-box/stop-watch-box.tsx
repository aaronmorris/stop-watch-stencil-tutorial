import { Component, State } from "@stencil/core";
import { WatchService } from "../../services/watch-service";

@Component({
    tag: "stop-watch-box",
    styleUrl: "stop-watch-box.css"
})

export class StopWatchBoxComponent {
    private hh = 0;
    private mm = 0;
    private ss = 0;
    private ms = 0;

    // The difference between @State and @Prop is that the view is not re-rendered if something changes in a @Prop. 
    // But if any of the @State models change, the view is rendered again.
    @State() hours = '00';
    @State() minutes = '00';
    @State() seconds = '00';
    @State() milliseconds = '00';

    timer: any = null;

    @State() isTimerRunning = false;

    watchService = new WatchService();

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
                    this.hh++
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
        return (
            <div class="watch-box">
                <div class="watch-container">
                    <stop-watch hours={this.hours} minutes={this.minutes} seconds={this.seconds} milliseconds={this.milliseconds}></stop-watch>
                </div>
                <div class="action-container">
                    <button onClick={ () => this.start()} disabled={this.isTimerRunning}>Start</button>
                    <button onClick={ () => this.stop()} disabled={!this.isTimerRunning}>Stop</button>
                    <button onClick={ () => this.clear()} disabled={this.isTimerRunning}>Clear</button>
                </div>
            </div>
        )
    }
}