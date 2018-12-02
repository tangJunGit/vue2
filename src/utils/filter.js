import { time } from "./method";

const filter = {
    timeFormat(date, format){
        return time.format(date, format);
    },
    formatAllDate(date){
        return time.format(date, 'yyyy-MM-dd hh:mm');
    },
    formatDate(date){
        return time.format(date, 'yyyy-MM-dd');
    },
    date(timestamp){
        return new Date(timestamp * 1000);
    },
    toFixed(number, digit){
        if (number === undefined) return 0;
        return (+number).toFixed(digit || 0);
    }
};

export default filter;