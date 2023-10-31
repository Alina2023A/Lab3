function analyzeArray(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Масив порожній або не передано масив.";
    }

    let max = arr[0];
    let min = arr[0];
    let sumPositives = 0;
    let productNegatives = 1;
    let positiveCount = 0;
    let negativeCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > 0) {
            sumPositives += arr[i];
            positiveCount++;
        }
        if (arr[i] < 0) {
            productNegatives *= arr[i];
            negativeCount++;
        }
    }

    return {
        max,
        min,
        sumPositives,
        productNegatives,
        positiveCount,
        negativeCount,
    };
}

const numbers = [5, -3, 10, 7, -2, 15, 8, -6, 12, -9];
const analysis = analyzeArray(numbers);

console.log("Максимальне число: " + analysis.max);
console.log("Мінімальне число: " + analysis.min);
console.log("Сума додатних чисел: " + analysis.sumPositives);
console.log("Добуток від'ємних чисел: " + analysis.productNegatives);
console.log("Кількість додатних чисел: " + analysis.positiveCount);
console.log("Кількість від'ємних чисел: " + analysis.negativeCount);
