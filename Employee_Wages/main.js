
const WAGE_PER_HOUR = 20;
const FULL_TIME_HOURS = 8;
const PART_TIME_HOURS = 4;
<<<<<<< HEAD
const WORKING_DAYS_PER_MONTH = 20;
=======
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
const FULL_TIME_WAGE = FULL_TIME_HOURS * WAGE_PER_HOUR;
>>>>>>> 047f8b859213699f7ff12f6c950b9641bcfd98a3

function getWorkHours(workType) {
    switch (workType) {
        case 1:
<<<<<<< HEAD
            console.log("Employee worked Part Time");
            return PART_TIME_HOURS;
        case 2:
            console.log("Employee worked Full Time");
            return FULL_TIME_HOURS;
        default:
            console.log("Employee did not work");
=======
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
>>>>>>> 047f8b859213699f7ff12f6c950b9641bcfd98a3
            return 0;
    }
}


<<<<<<< HEAD
let totalWage = 0;

for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
    let workType = Math.floor(Math.random() * 3);
    let workHours = getWorkHours(workType);
    let dailyWage = workHours * WAGE_PER_HOUR;
    totalWage += dailyWage;
    console.log(`Day ${day}: Daily Wage = $${dailyWage}`);
}

console.log(`Total Monthly Wage: $${totalWage}`);
=======
let totalHours = 0;
let totalDays = 0;
let dailyWages = []; 
let dailyRecords = []; 
let dailyWageMap = new Map();
let dailyHourMap = new Map();
let empDailyData = [];


while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
    let workType = Math.floor(Math.random() * 3); 
    let workHours = getWorkHours(workType);
    
    if (totalHours + workHours > MAX_WORKING_HOURS) {
        workHours = MAX_WORKING_HOURS - totalHours; 
    }

    let dailyWage = workHours * WAGE_PER_HOUR;
    totalHours += workHours;
    totalDays++;

    dailyWageMap.set(totalDays, dailyWage);
    dailyHourMap.set(totalDays, workHours); 

    empDailyData.push({
        day: totalDays,
        hoursWorked: workHours,
        wageEarned: dailyWage
    });
}


console.log("Employee Work Data:", empDailyData);


const totalWage = empDailyData.reduce((sum, record) => sum + record.wageEarned, 0);
const totalWorkedHours = empDailyData.reduce((sum, record) => sum + record.hoursWorked, 0);
console.log(`Total Wage: $${totalWage}, Total Hours Worked: ${totalWorkedHours} hrs`);


console.log("Full Working Days:");
empDailyData.forEach(record => {
    if (record.hoursWorked === FULL_TIME_HOURS) {
        console.log(`Day ${record.day}`);
    }
});


const partWorkDays = empDailyData
    .filter(record => record.hoursWorked === PART_TIME_HOURS)
    .map(record => `Day ${record.day}`);
console.log("Part Working Days:", partWorkDays);


const noWorkDays = empDailyData
    .filter(record => record.hoursWorked === 0)
    .map(record => `Day ${record.day}`);
console.log("No Working Days:", noWorkDays);

let fullTimeDays = dailyRecords.filter(record => record.wage === FULL_TIME_WAGE);
console.log("Days with Full-Time Wage:", fullTimeDays.map(record => `Day ${record.day}`));

let firstFullTimeDay = dailyRecords.find(record => record.wage === FULL_TIME_WAGE);
console.log("First Full-Time Wage Earned On:", firstFullTimeDay ? `Day ${firstFullTimeDay.day}` : "Never");


let isEveryFullTime = fullTimeDays.every(record => record.wage === FULL_TIME_WAGE);
console.log("Is Every Full-Time Wage Exactly 160?", isEveryFullTime);


let hasPartTimeWage = dailyRecords.some(record => record.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("Is there any Part-Time Wage?", hasPartTimeWage);


let daysWorked = dailyRecords.filter(record => record.wage > 0).length;
console.log(`Total Days Employee Worked: ${daysWorked}`);
>>>>>>> 047f8b859213699f7ff12f6c950b9641bcfd98a3
