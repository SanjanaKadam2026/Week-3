function checkLeapYear(year) {
    if ((year % 400 === 0) || 
        (year % 4 === 0 && year % 100 !== 0)) {
        return "Leap Year";
    } else {
        return "Not a Leap Year";
    }
}

console.log(checkLeapYear(2024));