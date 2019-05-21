'use strict'

let carIds = [1, 2, 5];
let [ car1, car2, car3] = carIds;
console.log(car1, car2, car3);

let remainingCars;
[car1, ...remainingCars] = carIds;
console.log(car1, remainingCars);

[, ...remainingCars] = carIds;
console.log(remainingCars, typeof(remainingCars));