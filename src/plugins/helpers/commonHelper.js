export function getGermanFormatDate(date) {
    let array_from_ISO_date = Intl.DateTimeFormat("en-GB").format(date).split('/');
    return array_from_ISO_date[0] + '.' + array_from_ISO_date[1] + '.' + array_from_ISO_date[2];
}

export function getDateFromGermanDate(dateString){
    let array_from_german_date = dateString.split('.');
    return new Date( array_from_german_date[2], Number(array_from_german_date[1] - 1), array_from_german_date[0]);
}

export function getFirstDayOfMonth(){
    let current_day = new Date();
    return new Array(100).fill(0)
    .map((it, index) => new Date(current_day.getFullYear(), current_day.getMonth() + 1 + index));
}
