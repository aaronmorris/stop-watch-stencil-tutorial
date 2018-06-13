export class StopWatchComponent {
    render() {
        return (h("div", { class: "watch-wrapper" },
            h("div", { class: "watch" },
                h("div", { class: "unit" }, this.hours),
                h("div", { class: "sep" }, " : "),
                h("div", { class: "unit" }, this.minutes),
                h("div", { class: "sep" }, " : "),
                h("div", { class: "unit" }, this.seconds),
                h("div", { class: "sep" }, " : "),
                h("div", { class: "unit" }, this.milliseconds))));
    }
    static get is() { return "stop-watch"; }
    static get properties() { return {
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
    }; }
    static get style() { return "/**style-placeholder:stop-watch:**/"; }
}
