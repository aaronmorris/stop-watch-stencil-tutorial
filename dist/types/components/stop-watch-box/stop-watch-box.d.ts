import '../../stencil.core';
import { WatchService } from "../../services/watch-service";
export declare class StopWatchBoxComponent {
    private hh;
    private mm;
    private ss;
    private ms;
    hours: string;
    minutes: string;
    seconds: string;
    milliseconds: string;
    timer: any;
    isTimerRunning: boolean;
    watchService: WatchService;
    /**
     * @description SStarts the timer, updates every 10 milliseconds
     */
    start(): void;
    /**
     * @description Updates the value of hte units in for the watch
     */
    updateTime(): void;
    /**
     * @description Updates the time for the watch component
     * Applies the detected change
     */
    setTime(): void;
    /**
     * @description Stops the watch
     */
    stop(): void;
    /**
     * @description Clears the time of the watch
     */
    clear(): void;
    render(): JSX.Element;
}
