function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Приклади використання функції:
var year1 = 2020; // Рік є високосним
var year2 = 2021; // Рік не є високосним

console.log(year1 + " - високосний рік: " + isLeap(year1));
console.log(year2 + " - високосний рік: " + isLeap(year2));
