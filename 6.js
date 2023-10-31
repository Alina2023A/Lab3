function calculateSeriesSum(n) {
    var sum = 0;
    var term = 1;

    for (var i = 0; i < n; i++) {
        sum += term;
        term = term * 10 + 1;
    }

    return sum;
}

var n = 5; // можна змінити на кількість доданків, яку потрібно обчислити.
var seriesSum = calculateSeriesSum(n);

console.log("Сума перших " + n + " доданків ряду: " + seriesSum);
