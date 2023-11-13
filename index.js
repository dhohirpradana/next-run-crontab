var parser = require('cron-parser');

var lastRun = new Date();
console.log("Last Run:", lastRun);

var oneYearFromNow = new Date();
oneYearFromNow.setFullYear(lastRun.getFullYear() + 1);

// cron expression
var cronTime = '* 5 * * *';

var options = {
    currentDate: lastRun,
    endDate: oneYearFromNow, // Set an end date to limit the number of occurrences
};

var interval = parser.parseExpression(cronTime, options);

var nextRun = interval.next().toDate();

console.log("Next Run:", nextRun);