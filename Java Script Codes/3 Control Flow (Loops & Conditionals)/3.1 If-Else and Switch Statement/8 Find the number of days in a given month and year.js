// Find the number of days in a given month and year

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function TotalDaysInMonth(month, year) {
    const dayInMonth = new Date(year, month, 0).getDate();
    console.log(`Total number of days in month ${month}, ${year} is ${dayInMonth}`);
}

rl.question("Enter the month number (1-12): ", (monthInput) => {
    rl.question("Enter the year: ", (yearInput) => {
        const month = parseInt(monthInput);
        const year = parseInt(yearInput);

        if (isNaN(month) || isNaN(year) || month < 1 || month > 12 || year < 0) {
            console.log("Enter a valid month (1-12) and a valid year.");
        } else {
            TotalDaysInMonth(month, year);
        }
        rl.close();
    });
});
