'use strict'

// Constructor functions 
function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}
let carObject = new Car(123);
carObject.start();

// Prototypes

function Car2(id) {
    this.carId = id;
}

Car2.prototype.start = function() {
    console.log('start: ' + this.carId);
};

let car22 = new Car2(456);
car22.start();


// Expanding Objects Using Prototypes
String.prototype.hello = function() {
    return this.toString() + ' Hello';
};
console.log('foo'.hello());
console.log('Message'.hello());


// Javascript Object Notition - JSON
let carIdss = [
    { carId: 123 },
    { carId: 456 },
    { carId: 789 }
];
console.log(JSON.stringify(carIdss));

let jsonIn = '[{"carId":123},{"carId":456},{"carId":789}]';
let carIs = JSON.parse(jsonIn);
console.log(carIs);


// Array Iteration
let cars = [
    { id: 123, style: 'sedan' },
    { id: 456, style: 'convertible' },
    { id: 789, style: 'sedan' },
    { id: null, style: 'sedan' },
];
cars.forEach((car) => console.log(car));
cars.forEach((car, index) => console.log(index, car));

let convertibles = cars.filter(
    car => car.style === 'convertible'
);
console.log(convertibles);

let result = cars.every(
    car => car.id > 0
);
console.log(result);

let car123 = cars.find(
    car => car.id === 123
);
console.log(car123);
