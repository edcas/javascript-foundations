'use strict'

import { Person } from './person';

// Class Basic
class Vehicle {
    constructor() {
        this.type = 'airplane';
    }

    start() {
        return `Starting: ${this.type}`;
    }
}

class Airplane extends Vehicle {
    start() {
        return 'in Airplane start';
    }
}

let plane = new Airplane();
console.log(plane.start());

let person = new Person(104498);
console.log('DNI: ' + person.identify());