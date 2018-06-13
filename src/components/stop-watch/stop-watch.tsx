import { Component, Prop } from "@stencil/core"

@Component({
    tag: "stop-watch",
    styleUrl: "stop-watch.css"
})

export class StopWatchComponent {
    @Prop() hours: string;
    @Prop() minutes: string;
    @Prop() seconds: string;
    @Prop() milliseconds: string;

    render() {
        return (
            <div class="watch-wrapper">
                <div class="watch">
                    <div class="unit">{this.hours}</div>
                    <div class="sep"> : </div>
                    <div class="unit">{this.minutes}</div>
                    <div class="sep"> : </div>
                    <div class="unit">{this.seconds}</div>
                    <div class="sep"> : </div>
                    <div class="unit">{this.milliseconds}</div>
                </div>
            </div>
        );
    }
}