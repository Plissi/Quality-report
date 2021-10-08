const nodeCalendar = require('node-calendar');

//Définition de la date
let day, month, year, previous, lastMonth, today;
today = new Date();
day = today.getDate();
month = today.getMonth()+1;
year = today.getFullYear();

let dateOfToday, dateOfTodayWithMark, dateOfPreviousDay, dateOfPreviousDayWithMark;
let newMonth = false;

//Vérifie si le mois dernier était décembre
lastMonth = month-1; 
if(lastMonth == 0){
    lastMonth = 12;
}

// Vérifie si le jour précédent était un dimanche
previous = day-1;
if (nodeCalendar.weekday(year, month, previous) == 6){
    previous = day-3;
}

//Vérifie si le jour précédent était un jour du mois précédent
if (previous<=0){
    newMonth = true
}

switch (previous) {
    case 0:
        previous = nodeCalendar.monthrange(year, lastMonth)[1];
        break;
    case -1:
        previous = nodeCalendar.monthrange(year, lastMonth)[1]-1;
        break;
    case -2:
        previous = nodeCalendar.monthrange(year, lastMonth)[1]-2;
        break;
    default:
        break;
}

// Ajuste la mise en forme des premiers jours du mois
if (previous<10) previous = '0'+previous;
if (day<10) day = '0'+day;

// Ajuste la mise en forme des premiers mois de l'année
if (month<10) month = '0'+month;
if (lastMonth<10) lastMonth = '0'+lastMonth;

dateOfToday = day+month+year;
dateOfTodayWithMark = day+'/'+month+'/'+year;

if (newMonth){
    dateOfPreviousDay = previous+lastMonth+year
    dateOfPreviousDayWithMark = previous+'/'+lastMonth+'/'+year
}else{
    dateOfPreviousDay = previous+month+year
    dateOfPreviousDayWithMark = previous+'/'+month+'/'+year
}
module.exports = {dateOfToday, dateOfTodayWithMark, dateOfPreviousDay, dateOfPreviousDayWithMark};