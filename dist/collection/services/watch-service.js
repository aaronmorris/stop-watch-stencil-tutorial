export class WatchService {
    /**
     * @description Calculates the units and sets in string format
     * @param unit value of the unit in numbers
     * @returns {string} the string representation fo the unit's value witha t least 2 digits
     */
    getTimeString(unit) {
        return (unit ? (unit > 9 ? unit : "0" + unit) : "00").toString();
    }
}
