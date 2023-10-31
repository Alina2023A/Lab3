var sum = 0;
var product = 1;

for (var i = 1; i <= 10; i++) {
    sum += i;      
    product *= i; 
}


console.log("Сума перших 10 натуральних чисел: " + sum);
console.log("Добуток перших 10 натуральних чисел: " + product);
