'use strict'

// Begin - Functions and scope
function startCar(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message);
}
startCar(123);

// IIFE Immediately Invoked Function Expression
(function() {} ) ();

let app = (function() {
    let carId = 123;
    console.log('in function');

    return {};
})();
console.log(app);

// Closure
let application = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };

    return {
        getId: getId
    };
})();
console.log(application.getId());


// This keyword
let o = {
    carId: 345,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log(o.getId());


// call
let p = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};

let newCar = { carId:898 };
console.log(p.getId.call(newCar));


//apply
let m = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};
console.log(m.getId.apply(newCar, ['carId: '])); // La diferencia entre el call y apply es que este ultimo puede recibir argumentos


// Bind - Podemos realizar una copia de una function y utilizarla en otro contexto
let obj = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};
let newCarBind = {carId: 456};
let newFn = obj.getId.bind(newCarBind);
console.log(newFn());

// Arrow functions
let getId = () => 123;
console.log(getId());

let complex = (prefix, suffix) => {
    console.log('In function');
    return prefix + 123 + suffix;
};
console.log( complex('ID: ', '!') );

// Default parameters
let trackCar = function(carId, city='NY') {
    console.log(`Tracking ${carId} in ${city}`);
};
console.log(trackCar(123));
console.log(trackCar(456, 'Michigan'));
