export default class FormatTimeString {

    static minutesToHour(minutes: number){

        const hours = minutes / 60;

        if(FormatTimeString.isInteger(hours)) return parseInt(hours.toString());

        return `${parseInt(hours.toString())}h ${parseInt((minutes % 60).toString())} min`;
    }

    static isInteger(n: number){
        return n % 1 === 0;
    }
}